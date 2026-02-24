DROP DATABASE IF EXISTS student_db;
CREATE DATABASE student_db;
USE student_db;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    dob DATE,
    department VARCHAR(50),
    phone VARCHAR(15)
);
SHOW DATABASES;
USE student_db;
SHOW TABLES;
INSERT INTO students (name, email, dob, department, phone)
VALUES
('Anita Verma', 'anita@gmail.com', '2001-08-22', 'Information Technology', '9123456789');
SELECT * FROM students;
INSERT INTO students (name, email, dob, department, phone)
VALUES 
('Rahul Sharma', 'rahul@gmail.com', '2002-05-15', 'Computer Science', '9876543210');
SELECT * FROM students;
