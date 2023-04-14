package ba.tim10.users;

import ba.tim10.users.controllers.UserController;
import ba.tim10.users.domains.User;
import ba.tim10.users.services.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
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

        mockMvc.perform(get("/users"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"email\":\"john@example.com\", \"password\": \"John\"}," +
                        "{\"email\":\"jane@example.com\", \"password\": \"Jane\"}]"));
    }

    @Test
    public void testGetUserById() throws Exception {
        User user = new User(1L, "john@example.com", "John");
        given(userService.findById(1L)).willReturn(user);

        mockMvc.perform(get("/users/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"id\":1,\"email\":\"john@example.com\", \"password\": \"John\"}"));
    }

    @Test
    public void testSaveOrUpdate() throws Exception {
        User user = new User("john@example.com", "John");
        given(userService.saveOrUpdate(user)).willReturn(user);

        mockMvc.perform(post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ 'email': 'john@example.com', 'password': 'John' }"))
                .andExpect(status().isCreated())
                .andExpect(content().json("{\"email\":\"john@example.com\", \"password\": \"John\"}"));
    }

    @Test
    public void testChangePassword() throws Exception {
        String email = "john@example.com";
        String password = "newPass";

        // mock the userService.changePassword method to perform some actions
        Mockito.doAnswer(invocation -> {
            // here you can write the code to perform some actions
            // when the changePassword method is called
            String emailArg = invocation.getArgument(0);
            String passwordArg = invocation.getArgument(1);
            // you can perform some assertions here
            assertEquals(email, emailArg);
            assertEquals(password, passwordArg);
            // you can also return a value if needed
            return null;
        }).when(userService).changePassword(email, password);

        // perform the HTTP request and assert the response
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/users/change-password")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"email\": \"" + email + "\", \"password\": \"" + password + "\"}"))
                .andExpect(status().isOk())
                .andExpect(content().string("Password is successfully changed"));

        // verify that the userService.changePassword method was called with the correct arguments
        Mockito.verify(userService).changePassword(email, password);
    }
}
