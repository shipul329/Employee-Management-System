package com.shipul.ems.controller;

import com.shipul.ems.dto.EmployeeRequest;
import com.shipul.ems.dto.EmployeeResponse;
import com.shipul.ems.model.Employee;
import com.shipul.ems.model.Department;
import com.shipul.ems.repository.EmployeeRepository;
import com.shipul.ems.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping
    public List<EmployeeResponse> getAllEmployees() {
        return employeeRepository.findAll().stream().map(this::mapToResponse).collect(Collectors.toList());
    }

    @PostMapping
    public EmployeeResponse createEmployee(@RequestBody EmployeeRequest request) {
        Department dept = departmentRepository.findById(request.getDepartmentId()).orElse(null);
        Employee emp = new Employee();
        emp.setName(request.getName());
        emp.setEmail(request.getEmail());
        emp.setDepartment(dept);
        return mapToResponse(employeeRepository.save(emp));
    }

    private EmployeeResponse mapToResponse(Employee emp) {
        EmployeeResponse res = new EmployeeResponse();
        res.setId(emp.getId());
        res.setName(emp.getName());
        res.setEmail(emp.getEmail());
        res.setDepartmentName(emp.getDepartment() != null ? emp.getDepartment().getName() : null);
        return res;
    }
}
