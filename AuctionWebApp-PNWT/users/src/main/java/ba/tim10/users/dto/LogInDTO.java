package ba.tim10.users.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.regex.Pattern;

import static ba.tim10.users.utils.RegexUtil.EMAIL_PATTERN;
import static ba.tim10.users.utils.ValidationMessageUtil.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LogInDTO implements AuthDTO {

    private String email;

    private String password;

    @Override
    public ErrorDTO validateInput() {
        if (email == null) {
            return new ErrorDTO("email", EMAIL_EMPTY_MESSAGE);
        } else {
            Pattern pattern = Pattern.compile(EMAIL_PATTERN);
            if (!pattern.matcher(email.toLowerCase()).matches()) {
                return new ErrorDTO("email", EMAIL_MESSAGE);
            }
        }
        if (password == null) {
            return new ErrorDTO("password", PASSWORD_EMPTY_MESSAGE);
        }
        return null;
    }

}
