package ba.tim10.users.utils;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public final class RegexUtil {

    public static final String NAME_PATTERN = "^[a-zA-Z '\\D-]+$";

    public static final String EMAIL_PATTERN = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})";

    public static final String MEDIUM_PASSWORD_STRENGTH = "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))";

    public static final String STRONG_PASSWORD_STRENGTH = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})";
}