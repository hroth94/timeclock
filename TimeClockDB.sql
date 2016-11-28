# -------------------------------------------------------------
# SQL Script to Create Two PizzaHutDB Tables
# -------------------------------------------------------------
 
DROP TABLE IF EXISTS Hours;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Supervisor;

/* The Employee table*/
CREATE TABLE Employee
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	email VARCHAR (128) NOT NULL,
    password VARCHAR (32) NOT NULL,
    first_name VARCHAR (32) NOT NULL,
    middle_name VARCHAR (32),
    last_name VARCHAR (32) NOT NULL,
	supervisor_id INT UNSIGNED,
    PRIMARY KEY (id)
);

/* The Supervisor table*/
CREATE TABLE Supervisor
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	email VARCHAR (128) NOT NULL,
    password VARCHAR (32) NOT NULL, 
    first_name VARCHAR (32) NOT NULL,
    middle_name VARCHAR (32),
    last_name VARCHAR (32) NOT NULL,
    PRIMARY KEY (id)
);

/* The Hours table*/
CREATE TABLE Hours
(
       id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
       date_time VARCHAR (12) NOT NULL, /*MMDDYYYYHHmm*/
	   duration VARCHAR (4) NOT NULL, /*HHmm*/
	   description VARCHAR (256) NOT NULL,
	   approval INT UNSIGNED NOT NULL, /*0=pending, 1=approved, 2=rejected*/
	   employee_id INT UNSIGNED,
	   FOREIGN KEY (employee_id) REFERENCES Employee(id) ON DELETE CASCADE
);
