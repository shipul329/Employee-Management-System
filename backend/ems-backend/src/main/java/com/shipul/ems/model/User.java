package com.shipul.ems.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users") // ✅ IMPORTANT FIX
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
}
