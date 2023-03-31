package ba.tim10.users.domains;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;

import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue
    private long id;

    @UuidGenerator
    private UUID uuid;

    @Column(nullable = false)
    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @Column(nullable = false)
    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @Column
    @Past(message = "Date of birth must be in the past")
    private Date dateOfBirth;

    @Column
    private String phoneNumber;

    @Column(nullable = false)
    @Email(message = "Email must be valid")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Password name cannot be empty")
    private String password;

    @Column
    private String imagePath;

    @Column
    private Boolean active;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();


    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(String email, String firstName, String lastName, String password, Boolean active) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.active = active;
    }
}