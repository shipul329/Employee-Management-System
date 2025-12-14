package com.shipul.ems.controller;

import com.shipul.ems.model.Employee;
import com.shipul.ems.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository repo;

    public EmployeeController(EmployeeRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Employee> all() {
        return repo.findAll();
    }

    @PostMapping
    public Employee create(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
        Employee e = repo.findById(id).orElseThrow();
        e.setName(emp.getName());
        e.setDepartment(emp.getDepartment());
        return repo.save(e);
    }
}
