# Intro to Backend

A comprehensive Node.js backend tutorial project demonstrating REST API development with Express.js, MongoDB, and user authentication.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Post Endpoints](#post-endpoints)
- [Models](#models)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project is a beginner-friendly introduction to backend development using Node.js and Express.js. It demonstrates how to build a RESTful API with user authentication, database integration, and CRUD operations.

## ✨ Features

- ✅ User registration and authentication
- ✅ Password hashing with bcrypt
- ✅ MongoDB database integration with Mongoose
- ✅ RESTful API architecture
- ✅ CRUD operations for posts
- ✅ Input validation and error handling
- ✅ Environment variable configuration
- ✅ Hot-reload development with nodemon

## 🛠 Tech Stack

- **Runtime:** Node.js (v22+)
- **Framework:** Express.js v5.2.1
- **Database:** MongoDB with Mongoose v9.0.2
- **Authentication:** bcrypt/bcryptjs for password hashing
- **Environment Management:** dotenv
- **Dev Tools:** nodemon for auto-restart

## 📁 Project Structure

```
intro-to-backend/
├── src/
│   ├── app.js                 # Express app setup and middleware
│   ├── index.js               # Server entry point
│   ├── config/
│   │   ├── constants.js       # App constants
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   ├── user.controller.js # User business logic
│   │   └── post.controller.js # Post business logic
│   ├── models/
│   │   ├── user.model.js      # User schema
│   │   └── post.model.js      # Post schema
│   └── routes/
│       ├── user.route.js      # User API routes
│       └── post.route.js      # Post API routes
├── package.json
├── .env                       # Environment variables (create this)
└── README.md
```

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GeorgeLukaanya/intro-to-backend.git
   cd intro-to-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory** (see [Environment Variables](#environment-variables))

## 🔑 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/intro-to-backend
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/intro-to-backend
```

## 🚀 Running the Application

### Development Mode (with hot-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:4000` (or the PORT specified in your `.env` file).

## 🌐 API Endpoints

Base URL: `http://localhost:4000/api/v1`

### User Endpoints

#### Register User
- **POST** `/users/register`
- **Description:** Register a new user
- **Request Body:**
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response:** `201 Created`
  ```json
  {
    "message": "User registered successfully.",
    "userId": "64f7a3c2e5b8d9a1c2d3e4f5"
  }
  ```

#### Login User
- **POST** `/users/login`
- **Description:** Authenticate a user
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response:** `200 OK`
  ```json
  {
    "message": "Login successful.",
    "id": "64f7a3c2e5b8d9a1c2d3e4f5",
    "username": "johndoe",
    "email": "john@example.com"
  }
  ```

#### Logout User
- **POST** `/users/logout`
- **Description:** Logout a user
- **Request Body:**
  ```json
  {
    "email": "john@example.com"
  }
  ```
- **Success Response:** `200 OK`
  ```json
  {
    "message": "Logout successful."
  }
  ```

### Post Endpoints

#### Create Post
- **POST** `/posts/create`
- **Description:** Create a new post
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "description": "Software Developer",
    "age": 25
  }
  ```
- **Success Response:** `201 Created`
  ```json
  {
    "message": "Post created successfully.",
    "postId": "64f7a3c2e5b8d9a1c2d3e4f6"
  }
  ```

#### Get All Posts
- **GET** `/posts/getPosts`
- **Description:** Retrieve all posts
- **Success Response:** `200 OK`
  ```json
  {
    "posts": [
      {
        "_id": "64f7a3c2e5b8d9a1c2d3e4f6",
        "name": "John Doe",
        "description": "Software Developer",
        "age": 25,
        "createdAt": "2023-09-05T10:30:00.000Z",
        "updatedAt": "2023-09-05T10:30:00.000Z"
      }
    ]
  }
  ```

#### Update Post
- **PATCH** `/posts/update/:id`
- **Description:** Update a post by ID
- **Request Body:** (any fields to update)
  ```json
  {
    "description": "Senior Software Developer",
    "age": 26
  }
  ```
- **Success Response:** `200 OK`
  ```json
  {
    "message": "Post updated successfully.",
    "post": { ... }
  }
  ```

#### Delete Post
- **DELETE** `/posts/delete/:id`
- **Description:** Delete a post by ID
- **Success Response:** `200 OK`
  ```json
  {
    "message": "Post deleted successfully."
  }
  ```

## 📊 Models

### User Model
- `username`: String (required, unique, lowercase, 1-30 chars)
- `email`: String (required, unique, lowercase)
- `password`: String (required, hashed, 6-50 chars)
- `timestamps`: createdAt, updatedAt

**Features:**
- Password is automatically hashed before saving
- `comparePassword()` method for authentication

### Post Model
- `name`: String (required)
- `description`: String (required)
- `age`: Number (required, 1-120)
- `timestamps`: createdAt, updatedAt

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

---

**Author:** George Lukaanya  
**Repository:** [intro-to-backend](https://github.com/GeorgeLukaanya/intro-to-backend)