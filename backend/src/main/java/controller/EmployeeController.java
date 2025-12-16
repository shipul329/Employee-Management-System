package com.shipul.ems.controller;

import com.shipul.ems.model.Employee;
import com.shipul.ems.repository.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeRepository repo;

    public EmployeeController(EmployeeRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Employee> getAll() { return repo.findAll(); }

    @PostMapping
    public Employee create(@RequestBody Employee emp) { return repo.save(emp); }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee emp) {
        Employee existing = repo.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        existing.setName(emp.getName());
        existing.setPosition(emp.getPosition());
        existing.setSalary(emp.getSalary());
        existing.setDepartment(emp.getDepartment());
        return ResponseEntity.ok(repo.save(existing));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { repo.deleteById(id); }
}
