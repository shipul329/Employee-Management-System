package com.shipul.ems.controller;

import com.shipul.ems.model.User;
import com.shipul.ems.repository.UserRepository;
import com.shipul.ems.security.JwtUtils;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtUtils jwt;

    public AuthController(UserRepository repo, PasswordEncoder encoder, JwtUtils jwt) {
        this.repo = repo;
        this.encoder = encoder;
        this.jwt = jwt;
    }

    @PostMapping("/login")
    public TokenResponse login(@RequestBody LoginRequest req) {
        User user = repo.findByEmail(req.getEmail()).orElseThrow();

        if (!encoder.matches(req.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return new TokenResponse(jwt.generateToken(user.getEmail()));
    }

    @Data
    static class LoginRequest {
        private String email;
        private String password;
    }

    record TokenResponse(String token) {}
}
