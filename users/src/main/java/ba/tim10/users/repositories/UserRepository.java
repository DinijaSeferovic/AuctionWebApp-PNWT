package ba.tim10.users.repositories;

import ba.tim10.users.domains.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

    User findById(long id);

    User findUserByFirstName(String firstName);

    User findUserByLastName(String lastName);

    Boolean existsByEmail(String email);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE users SET password=:newPassword WHERE email=:email", nativeQuery = true)
    void changePassword(String email, String newPassword);
}