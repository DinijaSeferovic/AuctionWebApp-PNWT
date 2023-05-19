package ba.tim10.users.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponseDTO {

    private String token;

    private UUID uuid;

    private String firstName;

    private String lastName;

    private String email;

    private List<String> roles;
}
