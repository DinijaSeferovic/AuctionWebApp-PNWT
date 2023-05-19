package ba.tim10.users.utils;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class ValidationMessageUtil {

    public static final String FIRST_NAME_EMPTY_MESSAGE = "Please enter your first name.";

    public static final String LAST_NAME_EMPTY_MESSAGE = "Please enter your last name.";

    public static final String FIRST_NAME_MESSAGE = "Please enter your first name correctly.";

    public static final String LAST_NAME_MESSAGE = "Please enter your last name correctly.";

    public static final String EMAIL_EMPTY_MESSAGE = "Please enter your email address.";

    public static final String EMAIL_MESSAGE = "Please enter a valid email address.";

    public static final String PASSWORD_EMPTY_MESSAGE = "Please enter your password.";

    public static final String PASSWORD_WEAK_MESSAGE = "Your password is weak.";

    public static final String PASSWORD_MEDIUM_MESSAGE = "Your password is medium strength.";
}
