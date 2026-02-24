CREATE DATABASE IF NOT EXISTS order_management;
USE order_management;
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10,2)
);
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
INSERT INTO customers (name, email) VALUES
('Kavyasri', 'kavya@gmail.com'),
('Rahul', 'rahul@gmail.com'),
('Sneha', 'sneha@gmail.com');
INSERT INTO products (product_name, price) VALUES
('Laptop', 50000),
('Mobile', 20000),
('Headphones', 3000);
INSERT INTO orders (customer_id, product_id, quantity, order_date) VALUES
(1, 1, 1, '2024-01-10'),
(1, 3, 2, '2024-02-12'),
(2, 2, 1, '2024-02-15'),
(3, 1, 1, '2024-03-01'),
(2, 3, 3, '2024-03-10');
SELECT 
    c.name,
    p.product_name,
    o.quantity,
    p.price,
    (o.quantity * p.price) AS total_amount,
    o.order_date
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN products p ON o.product_id = p.product_id
ORDER BY o.order_date DESC;
SELECT *
FROM (
    SELECT 
        o.order_id,
        c.name,
        (o.quantity * p.price) AS total_amount
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id
    JOIN products p ON o.product_id = p.product_id
) AS order_totals
ORDER BY total_amount DESC
LIMIT 1;
SELECT name, total_orders
FROM (
    SELECT 
        c.name,
        COUNT(o.order_id) AS total_orders
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id
) AS customer_orders
ORDER BY total_orders DESC
LIMIT 1;