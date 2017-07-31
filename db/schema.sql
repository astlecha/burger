DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE rxaptrodusmvrrsb;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);