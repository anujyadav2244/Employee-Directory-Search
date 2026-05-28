# Employee Directory Search System

A full-stack Employee Directory Search application built using:

* Frontend: React + Vite
* Backend: FastAPI
* Database: MySQL

The application allows users to search employees by name or department with optimized API calls and clean architecture.

---

# Features

## Frontend Features

* Employee search by:

  * Name
  * Department

* Debounced search

  * Prevents API calls on every keystroke
  * Improves performance

* API state handling

  * Loading state
  * Error handling
  * No employees found
  * Success state

* Reusable components

  * SearchBar
  * EmployeeCard
  * EmployeeList

* Environment variable support

---

## Backend Features

* FastAPI REST API

* MySQL database integration

* Layered architecture

  * Router layer
  * Service layer
  * Repository layer
  * Database layer

* Search optimization

* Validation and error handling

* Clean and scalable code structure

---

# Tech Stack

## Frontend

* React
* Vite
* Axios

## Backend

* Python
* FastAPI
* SQLAlchemy

## Database

* MySQL

---

# Project Structure

## Frontend

```txt
frontend/
 ┣ src/
 ┃ ┣ components/
 ┃ ┣ pages/
 ┃ ┣ services/
 ┃ ┣ App.jsx
 ┃ ┗ main.jsx
 ┣ package.json
 ┣ vite.config.js
 ┗ .env
```

## Backend

```txt
backend/
 ┣ app/
 ┃ ┣ database/
 ┃ ┣ repository/
 ┃ ┣ routers/
 ┃ ┣ schemas/
 ┃ ┣ services/
 ┃ ┗ main.py
 ┣ requirements.txt
 ┗ .env
```

---

# Database Design

## Employees Table

| Column          | Type    |
| --------------- | ------- |
| id              | INT     |
| name            | VARCHAR |
| email           | VARCHAR |
| department      | VARCHAR |
| designation     | VARCHAR |
| date_of_joining | DATE    |

---

# Database Choice

MySQL is used because:

* Reliable relational database
* Good performance for structured employee data
* Supports indexing for faster searching
* Widely used in production applications

Indexes are added on searchable columns:

```sql
CREATE INDEX idx_employee_name ON employees(name);
CREATE INDEX idx_employee_department ON employees(department);
```

This improves search performance when employee records grow large.

---

# Search Performance Optimization

The frontend search uses debouncing.

When the user types in the search bar, the application waits for 500ms before sending the API request.

Example:

Typing:

```txt
Rah
```

does not immediately send 3 API calls.

Instead, only one optimized API request is sent after the user stops typing.

## Benefits

* Reduces unnecessary API calls
* Reduces server load
* Improves frontend performance
* Better user experience

---

# Backend API

## Search Employees

### Endpoint

```http
GET /employees?search=rahul
```

## Example

```http
GET /employees?search=IT
```

## Features

* Searches by:

  * Employee name
  * Department

* Optimized database querying

* Proper validation

* Error handling

---

# API States Handled

The frontend properly handles:

* Loading state
* Error state
* Empty results state
* Successful results state

---

# Setup Instructions

# 1. Clone Repository

```bash
git clone <your-github-repo-link>
```

---

# 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# 3. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on:

```txt
http://localhost:8000
```

---

# 4. MySQL Setup

Create database:

```sql
CREATE DATABASE employee_directory;
```

Create employees table and insert sample data.

---

# Environment Variables

## Frontend `.env`

```env
VITE_API_BASE_URL=http://localhost:8000
```

## Backend `.env`

```env
DATABASE_URL=mysql+pymysql://root:password@localhost/employee_directory
```

---

# Environment Example Files

## Frontend `.env.example`

```env
VITE_API_BASE_URL=
```

## Backend `.env.example`

```env
DATABASE_URL=
```

---

# Validation & Error Handling

The backend handles:

* Empty search query
* Invalid request handling
* Internal server errors
* Database connection issues

Using proper HTTP status codes and meaningful error messages.

---

# Clean Architecture

The backend follows layered architecture:

## Router Layer

Handles API routes.

## Service Layer

Contains business logic.

## Repository Layer

Handles database queries.

## Database Layer

Manages database connection and models.

This architecture makes the project:

* Scalable
* Maintainable
* Easy to extend


---

# Author

Anuj Yadav
