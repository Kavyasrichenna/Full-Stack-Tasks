# Task 8 - Employee Management using Spring Core

## 📌 Objective

To create a simple Employee Management module using Spring Core concepts such as Inversion of Control (IoC) and Dependency Injection (DI).

---

## 🛠️ Technologies Used

* Java
* Spring Core
* Spring Boot
* Maven

---

## 📚 Concepts Demonstrated

* Inversion of Control (IoC)
* Dependency Injection (DI)
* @Component annotation
* @Autowired annotation
* BeanFactory (AnnotationConfigApplicationContext)

---

## 📂 Project Structure

```
com.example.task8
 ├── model
 │     └── Employee.java
 ├── service
 │     └── EmployeeService.java
 ├── main
 │     └── MainApp.java
```

---

## 🧩 Description

This project demonstrates a basic Employee Management system where:

* Employee data is stored in memory
* Spring manages object creation (IoC)
* Dependencies are injected using annotations

---

## ▶️ How to Run

1. Open project in Spring Tool Suite (STS)
2. Ensure Maven dependencies are downloaded
3. Run:

   * `MainApp.java` (Right click → Run As → Java Application)

---

## ✅ Output

```
ID: 1, Name: Kavya
```

---

## 💡 Notes

* No database is used (data stored in memory)
* Uses annotation-based configuration
* Demonstrates basic Spring Core functionality
