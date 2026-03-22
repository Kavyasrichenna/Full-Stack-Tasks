package com.example.task8.service;

import com.example.task8.model.Employee;
import org.springframework.stereotype.Component;

@Component
public class EmployeeService {

    public Employee getEmployee() {
        return new Employee(1, "Kavya");
    }
}