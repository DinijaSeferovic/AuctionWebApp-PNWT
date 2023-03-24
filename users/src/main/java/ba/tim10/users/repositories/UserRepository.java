package ba.tim10.users.repositories;

import ba.tim10.users.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    User findById(UUID id);

    User findUserByFirstName(String firstName);

    User findUserByLastName(String lastName);

    Boolean existsByEmail(String email);
}