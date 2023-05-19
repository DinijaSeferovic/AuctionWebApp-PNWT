package ba.tim10.users;

import ba.tim10.users.controllers.UserController;
import ba.tim10.users.domains.User;
import ba.tim10.users.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
@AutoConfigureMockMvc(addFilters = false)
public class UserWebMockTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void contextLoads() {
    }


    @Test
    public void testGetUsers() throws Exception {
        List<User> users = Arrays.asList(new User("john@example.com", "John"), new User("jane@example.com", "Jane"));
        given(userService.findAll()).willReturn(users);

        mockMvc.perform(get("/user"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"email\":\"john@example.com\", \"password\": \"John\"}," +
                        "{\"email\":\"jane@example.com\", \"password\": \"Jane\"}]"));
    }

    @Test
    public void testGetUserById() throws Exception {
        User user = new User((UUID.fromString("f53d2c7b-dcae-46ce-ba1e-f74b7f7070df")), "john@example.com", "John");
        given(userService.findById(UUID.fromString("f53d2c7b-dcae-46ce-ba1e-f74b7f7070df"))).willReturn(user);

        mockMvc.perform(get("/user/f53d2c7b-dcae-46ce-ba1e-f74b7f7070df"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"id\":\"f53d2c7b-dcae-46ce-ba1e-f74b7f7070df\",\"email\":\"john@example.com\", \"password\": \"John\"}"));
    }

    @Test
    void testSaveOrUpdate() throws Exception {
        User newUser = new User();
        newUser.setEmail("john@example.com");
        newUser.setPassword("password");

        User savedUser = new User();
        savedUser.setId(UUID.fromString("f53d2c7b-dcae-46ce-ba1e-f74b7f7070df"));
        savedUser.setFirstName("john");

        given(userService.saveOrUpdate(any(User.class))).willReturn(savedUser);

        ObjectMapper objectMapper = new ObjectMapper();

        String requestJson = objectMapper.writeValueAsString(newUser);
        String expectedJson = objectMapper.writeValueAsString(savedUser);

        mockMvc.perform(post("/user")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestJson))
                .andExpect(status().isCreated())
                .andExpect(content().json(expectedJson));
    }

    @Test
    public void testChangePassword() throws Exception {
        String email = "john@example.com";
        String password = "newPass";

        // mock the userService.changePassword method to perform some actions
        Mockito.doAnswer(invocation -> {
            String emailArg = invocation.getArgument(0);
            String passwordArg = invocation.getArgument(1);
            assertEquals(email, emailArg);
            assertEquals(password, passwordArg);
            return null;
        }).when(userService).changePassword(email, password);

        mockMvc.perform(MockMvcRequestBuilders
                        .put("/user/change-password")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"email\": \"" + email + "\", \"password\": \"" + password + "\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Password is successfully changed"));

        // verify that the userService.changePassword method was called with the correct arguments
        Mockito.verify(userService).changePassword(email, password);
    }
}
