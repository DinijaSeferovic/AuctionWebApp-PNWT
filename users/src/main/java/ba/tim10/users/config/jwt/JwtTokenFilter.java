package ba.tim10.users.config.jwt;

import ba.tim10.users.domains.User;
import ba.tim10.users.repositories.UserRepository;
import ba.tim10.users.services.UserDetailsImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class JwtTokenFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);

    /**
     * The method validates JWT from request, parses username from it and sets current UserDetails in SecurityContext. It is guaranteed to be just invoked once per request within a single request thread.
     *
     * @param request Provides request information for HTTP servlets
     * @param response Provide response information for HTTP servlets
     * @param filterChain Invocation chain of a filtered request for a resource
     * @throws ServletException Signals that a servlet exception has occurred
     * @throws IOException Signals that an I/O exception of some sort has occurred
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String jwt = parseJwt(request);
            if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
                String email = jwtUtils.getEmailFromJwtToken(jwt);
                if (!userRepository.existsByEmail(email)) {
                    throw new Exception("Email address not found");
                }
                User user = userRepository.findByEmail(email).get();
                UserDetails userDetails = UserDetailsImpl.build(user);
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null,
                        userDetails.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: {}", e);
        }
        filterChain.doFilter(request, response);
    }

    /**
     * Parses token based on Authorization header from request
     *
     * @param request Provides request information for HTTP servlets
     * @return token from the header if found
     */
    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");
        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
            return headerAuth.substring(7);
        }
        return null;
    }
}
