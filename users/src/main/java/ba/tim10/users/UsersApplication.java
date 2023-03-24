package ba.tim10.users;

import ba.tim10.users.domains.User;
import ba.tim10.users.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UsersApplication {

	private static final Logger log = LoggerFactory.getLogger(UsersApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(UsersApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			repository.save(new User("user1@email.com", "Prvi", "User", "user1", true));
			repository.save(new User("user2@email.com", "Drugi", "User", "user2", true));
			repository.save(new User("user3@email.com", "Treci", "User", "user3", true));

			for (User user : repository.findAll()) {
				log.info(user.getEmail());
				log.info("---");
			}
			log.info("");

			User user = repository.findUserByFirstName("Treci");
			log.info(user.getPassword());
			log.info("");
		};
	}

}
