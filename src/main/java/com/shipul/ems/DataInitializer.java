package com.shipul.ems;

import com.shipul.ems.model.User;
import com.shipul.ems.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initUsers(
            UserRepository repo,
            PasswordEncoder encoder) {

        return args -> {
            if (repo.count() == 0) {
                User admin = new User();
                admin.setName("Admin");
                admin.setEmail("admin@ems.com");
                admin.setPassword(encoder.encode("admin123"));
                admin.setRole("ADMIN");

                repo.save(admin);
            }
        };
    }
}
