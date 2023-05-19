package ba.tim10.users.dto;

public interface AuthDTO {

    public ErrorDTO validateInput();

    public String getEmail();

    public String getPassword();
}
