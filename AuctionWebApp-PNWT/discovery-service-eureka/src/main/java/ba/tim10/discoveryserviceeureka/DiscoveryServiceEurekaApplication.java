package ba.tim10.discoveryserviceeureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServiceEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServiceEurekaApplication.class, args);
    }

}
