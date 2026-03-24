# Blog API (Node.js + Express)

RESTful API for a simple blog system, built with Node.js, Express, MongoDB, and modern backend practices.  
This project demonstrates authentication, CRUD operations, and clean architecture suitable for production-ready applications.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Zod (Validation)
- bcryptjs (Password hashing)

---

## 📁 Project Structure

```bash
express-blog-api/
├── src/
│   ├── config/ # Database connection
│   ├── controllers/ # Request handlers
│   ├── middleware/ # Auth & error handling
│   ├── models/ # Mongoose schemas
│   └── validators/ # Zod validation schemas
│
├── index.js # Entry point
├── README.md        
├── .prettierrc 
└── package.json
```

## ✨ Features

- User registration & login
- JWT-based authentication
- Protected routes (middleware)
- Create & fetch blog posts
- Input validation with Zod
- MongoDB integration with Mongoose
- Clean and scalable structure

---

## 🔐 Authentication Flow

Register → Login → Receive Token → Access Protected APIs

---

## 📌 API Endpoints

### Auth

- POST /api/auth/register → Register new user  
- POST /api/auth/login → Login & get token  

### Posts

- GET /api/posts → Get all posts  
- POST /api/posts → Create post (requires token)  

---

## 📌 Future Improvements

- Update & delete post APIs
- Pagination & filtering
- Role-based authorization
- Error handling middleware
- Environment configuration (.env)
- Docker support

---

## 👨‍💻 Author

Hien Le  
Frontend Developer transitioning to Fullstack  
8+ years experience building production web applications

