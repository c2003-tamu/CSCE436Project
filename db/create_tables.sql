CREATE DATABASE IF NOT EXISTS csce436; 

USE csce436;

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Room (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    floor INT NOT NULL,
    number INT NOT NULL,
    seats INT NOT NULL,
    table_type TINYINT(1) NOT NULL,
    has_monitor TINYINT(1) NOT NULL,
    has_whiteboard TINYINT(1) NOT NULL
);

CREATE TABLE Event (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    start_datetime DATETIME NOT NULL,
    end_datetime DATETIME NOT NULL,
    room_id INT NOT NULL,
    number_minutes INT NOT NULL
);
