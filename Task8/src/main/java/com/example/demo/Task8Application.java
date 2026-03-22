package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.example.task8")
public class Task8Application {

	public static void main(String[] args) {
		SpringApplication.run(Task8Application.class, args);
	}
}