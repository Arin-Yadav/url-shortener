# 🔗 URL Shortener

A minimal, full-stack URL shortening service with Node.js, Express, and MongoDB. Users can sign up, shorten long URLs, and manage their links. Admins have access to view all generated URLs.

---

## 🚀 Features

- ✂️ Shorten long URLs into compact, shareable links
- 🔐 User authentication (Sign up / Sign in)
- 🧠 Admin dashboard to view all shortened URLs
- 🍪 Cookie-based session handling
- 📦 Clean RESTful routes and modular structure

---

## 🛠️ Tech Stack

| Layer        | Technology                  |
|--------------|-----------------------------|
| Backend      | Node.js, Express.js         |
| Database     | MongoDB, Mongoose           |
| Auth         | JWT (jsonwebtoken), Cookies |
| View Engine  | EJS                         |
| Utilities    | nanoid, uuid, dotenv        |

---


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
