package ba.tim10.users.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.regex.Pattern;

import static ba.tim10.users.utils.RegexUtil.*;
import static ba.tim10.users.utils.ValidationMessageUtil.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO implements AuthDTO {

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private Set<String> roles;


    @Override
    public ErrorDTO validateInput() {
        if (firstName == null) {
            return new ErrorDTO("firstName", FIRST_NAME_EMPTY_MESSAGE);
        } else if (!Pattern.compile(NAME_PATTERN).matcher(firstName).matches()) {
            return new ErrorDTO("firstName", FIRST_NAME_MESSAGE);
        }
        if (lastName == null) {
            return new ErrorDTO("lastName", LAST_NAME_EMPTY_MESSAGE);
        } else if (!Pattern.compile(NAME_PATTERN).matcher(lastName).matches()) {
            return new ErrorDTO("lastName", LAST_NAME_MESSAGE);
        }
        if (email == null) {
            return new ErrorDTO("email", EMAIL_EMPTY_MESSAGE);
        } else {
            Pattern emailPattern = Pattern.compile(EMAIL_PATTERN);
            if (!emailPattern.matcher(email.toLowerCase()).matches()) {
                return new ErrorDTO("email", EMAIL_MESSAGE);
            }
        }
        if (password == null) {
            return new ErrorDTO("password", PASSWORD_EMPTY_MESSAGE);
        } else {
            return null;
        }
    }
}
