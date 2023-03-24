package ba.tim10.users.services;

import ba.tim10.users.domains.User;
import ba.tim10.users.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(UUID id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User saveOrUpdate(User user) {
        return userRepository.saveAndFlush(user);
    }

    public Boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }
}
