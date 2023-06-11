package ba.tim10.items;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ItemsApplication {

	private static final Logger log = LoggerFactory.getLogger(ItemsApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ItemsApplication.class, args);
	}
}
