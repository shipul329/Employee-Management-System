package com.shipul.ems.controller;

import com.shipul.ems.model.Department;
import com.shipul.ems.repository.DepartmentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentRepository repo;

    public DepartmentController(DepartmentRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Department> getAll() { return repo.findAll(); }

    @PostMapping
    public Department create(@RequestBody Department dept) { return repo.save(dept); }
}
