# Server Setup Guide

This project contains a backend server built using **Node.js**, **Express.js**, and **SQL**.

## 📦 Technologies Used
- **Node.js**
- **Express.js**
- **SQL**

## 🚀 Getting Started

Follow these steps to set up and run the server:

### 1. Clone the Repository

git clone <your-repo-url>
cd <your-server-folder>

2. Install Dependencies
Make sure you have Node.js and npm installed. Then run:
npm install

3. Run the Server
Start the server using the following command:

npx run index.js

🛢️ Database Setup
Create a database named opq1 and run the following table definitions:

CREATE DATABASE DSA;

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE topics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE subtopics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic_id INT,
    name VARCHAR(255) NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);

CREATE TABLE problems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subtopic_id INT,
    name VARCHAR(255) NOT NULL,
    level ENUM('Easy', 'Medium', 'Tough') NOT NULL,
    youtube_link VARCHAR(255),
    leetcode_link VARCHAR(255),
    article_link VARCHAR(255),
    completed TINYINT(1) DEFAULT 0,
    FOREIGN KEY (subtopic_id) REFERENCES subtopics(id) ON DELETE CASCADE
);

📌 Notes
Ensure your SQL server is running and accessible with the credentials in .env.

You can use tools like Postman to test API routes once the server is up.


🤝 Contribution
Feel free to fork the repo, submit issues, or create pull requests to contribute to this project.

