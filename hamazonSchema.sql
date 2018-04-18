-- DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;



CREATE TABLE products(
 item_id INT AUTO_INCREMENT,
 product_name VARCHAR(250),
 department_name VARCHAR(250),
 price DECIMAL(65, 2),
 stock_quantity INTEGER(10),
 PRIMARY KEY (item_id)
 );
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Game Boy", "Handhelds", 39.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Nintendo", "Consoles", 79.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo 64", "Consoles", 69.99, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo 64 A/C power supply", "Accessories", 19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Game Boy Advance", "Handhelds", 49.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Wii", "Consoles", 49.99, 160);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Entertainment System", "Consoles", 89.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Entertainment System Controller", "Accessories", 9.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wii Remote Controller", "Accessories", 29.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo 64 Controller", "Accessories", 29.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo 64 A/C Power Supply", "Accessories", 19.99, 50);


 
SELECT * FROM products;

