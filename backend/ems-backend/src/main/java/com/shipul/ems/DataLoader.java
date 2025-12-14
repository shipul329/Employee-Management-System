package com.shipul.ems;

import com.shipul.ems.model.User;
import com.shipul.ems.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findByEmail("test@example.com").isEmpty()) {
            User u = new User();
            u.setEmail("test@example.com");
            u.setPassword(passwordEncoder.encode("password"));
            userRepository.save(u);
            System.out.println("Created test user: test@example.com / password");
        }
    }
}
