package ba.tim10.users.controllers;

import ba.tim10.users.config.jwt.JwtUtils;
import ba.tim10.users.domains.Role;
import ba.tim10.users.domains.User;
import ba.tim10.users.dto.*;
import ba.tim10.users.services.RoleService;
import ba.tim10.users.services.UserDetailsImpl;
import ba.tim10.users.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.*;
import java.util.stream.Collectors;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final RoleService roleService;

    public UserController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtUtils jwtUtils;
    @Value("${email.address}")
    private String emailAddress;
    @Value("${email.password}")
    private String emailPassword;
    @Value("${app.link}")
    private String appLink;

    /**
     * Validates both login or registration request and adds custom header
     *
     * @param request provided login or registration request
     * @return {@link ResponseEntity} with body message, custom header and http status
     * @param <T> class of the request
     */
    private <T extends AuthDTO> ResponseEntity validateData(T request) {
        ErrorDTO validation = request.validateInput();
        if (validation != null) {
            HttpHeaders header = new HttpHeaders();
            header.add("errorType", validation.getType());
            return new ResponseEntity<>(validation.getMessage(), header, HttpStatus.BAD_REQUEST);
        }
        if (request instanceof LogInDTO && !userService.existsByEmail(request.getEmail())) {
            HttpHeaders header = new HttpHeaders();
            header.add("errorType","email");
            return new ResponseEntity<>("Email address not found", header, HttpStatus.BAD_REQUEST);
        }
        if (request instanceof RegisterDTO && userService.existsByEmail(request.getEmail())) {
            HttpHeaders header = new HttpHeaders();
            header.add("errorType","email");
            return new ResponseEntity("This email address is already taken. Please try another one.", header, HttpStatus.BAD_REQUEST);
        }
        return null;
    }

    /**
     * Validates and authenticates the user provided in login request
     *
     * @param loginRequest user information that need authentication
     * @return {@link JwtResponseDTO} with authenticated user information
     */
    @PostMapping("/auth/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LogInDTO loginRequest) {
        if (validateData(loginRequest) != null) {
            return validateData(loginRequest);
        }
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getRoles().stream()
                .map(item -> item.getName())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponseDTO(jwt,
                userDetails.getId(),
                userDetails.getFirstName(),
                userDetails.getLastName(),
                userDetails.getEmail(),
                roles));
    }

    /**
     * Validates and creates an account for the user provided in registration request
     *
     * @param registrationRequest user information that need registration
     * @return {@link ResponseEntity} return value of authenticateUser method
     */
    @PostMapping("/auth/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterDTO registrationRequest) {
        if (validateData(registrationRequest) != null) {
            return validateData(registrationRequest);
        }
        User user = new User(registrationRequest.getEmail(), registrationRequest.getFirstName(),
                registrationRequest.getLastName(), encoder.encode(registrationRequest.getPassword()), true);
        Set<String> strRoles = registrationRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleService.findByName("user");
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                roles.add(roleService.findByName(role));
            });
        }
        user.setRoles(roles);
        userService.createAccount(user);
        return authenticateUser(new LogInDTO(registrationRequest.getEmail(), registrationRequest.getPassword()));
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable UUID id) {
        return userService.findById(id);
    }

    @PostMapping
    public ResponseEntity<User> saveOrUpdate(@RequestBody User newUser) throws ServerException {

        User user = userService.saveOrUpdate(newUser);
        if (user == null) {
            throw new ServerException("Server exception");
        } else {
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserFromToken(@RequestParam String token) {
        String email = jwtUtils.getEmailFromJwtToken(token);
        User user = userService.findByEmail(email).orElse(null);
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
        }
        List<String> roles = user.getRoles().stream().map(role -> role.getName()).collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponseDTO(token,
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                roles));
    }

    @PostMapping("/send-reset-email")
    public ResponseEntity sendResetEmail(@RequestParam String email ){
        if (!userService.existsByEmail(email)) {
            throw new UsernameNotFoundException("Email address not found");
        }
        Properties properties = System.getProperties();
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", 587);
        properties.put("mail.smtp.ssl.trust", "smtp.gmail.com");
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(emailAddress, emailPassword);
            }
        });
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(emailAddress));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
            message.setSubject("Auction App Reset Password");
            String token = jwtUtils.generatePasswordToken(email);
            message.setText("Reset password link for your Auction App profile has been generated. To reset your password, follow the instructions on the following link: "+appLink+"/change-password?token="+token);
            Transport.send(message);
        } catch (MessagingException m) {
            return new ResponseEntity("Email sending failed", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok("Email is successfully sent");
    }

    @PutMapping("/change-password")
    public  ResponseEntity changePassword(@RequestBody LogInDTO account){
        userService.changePassword(account.getEmail(), account.getPassword());
        return ResponseEntity.ok("Password is successfully changed");
    }
}
