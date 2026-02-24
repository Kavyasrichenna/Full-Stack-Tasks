INSERT INTO students (name, email, dob, department, phone) VALUES
('Amit Kumar', 'amit@gmail.com', '2001-03-12', 'Computer Science', '9876543211'),
('Neha Singh', 'neha@gmail.com', '2000-11-25', 'Information Technology', '9876543212'),
('Ravi Patel', 'ravi@gmail.com', '2002-06-05', 'Computer Science', '9876543213'),
('Sneha Rao', 'sneha@gmail.com', '2001-01-18', 'Electronics', '9876543214');
SELECT * FROM students;
SELECT * FROM students
ORDER BY name ASC;
SELECT * FROM students
ORDER BY dob ASC;
SELECT * FROM students
ORDER BY dob DESC;
SELECT * FROM students
WHERE department = 'Computer Science';
SELECT * FROM students
WHERE department = 'Information Technology';
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department;
