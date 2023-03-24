package ba.tim10.users.controllers;

import ba.tim10.users.domains.User;
import ba.tim10.users.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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
}
