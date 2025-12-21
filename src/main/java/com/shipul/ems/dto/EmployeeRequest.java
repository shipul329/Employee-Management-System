package com.shipul.ems.dto;

public class EmployeeRequest {

    private String name;
    private String email;
    private Long departmentId;

    public EmployeeRequest() {
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Long getDepartmentId() {
        return departmentId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }
}
