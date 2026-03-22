package com.example.task8.main;

import com.example.task8.service.EmployeeService;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MainApp {

    @Autowired
    private EmployeeService employeeService;

    public void run() {
        employeeService.getEmployee().display();
    }

    public static void main(String[] args) {
        BeanFactory factory =
                new AnnotationConfigApplicationContext("com.example.task8");

        MainApp app = factory.getBean(MainApp.class);
        app.run();
    }
}