package ba.tim10.users.config.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

    /**
     * The method will be triggered anytime unauthenticated User requests a secured HTTP resource and throws an AuthenticationException.
     *
     * @param request Provides request information for HTTP servlets
     * @param response Provides response information for HTTP servlets
     * @param authException Authentication exception
     * @throws IOException Signals that an I/O exception of some sort has occurred
     * @throws ServletException Signals that a servlet exception has occurred
     */
    @Override
    public void commence(final HttpServletRequest request, final HttpServletResponse response,
                         final AuthenticationException authException) throws IOException, ServletException {
        logger.error("Unauthorized error: {}", authException.getMessage());
        final ObjectMapper mapper = new ObjectMapper();
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        mapper.writeValue(response.getOutputStream(), authException.getMessage());
    }
}
