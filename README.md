# 💊 E-Pharmacy Admin Dashboard API

A robust RESTful API built with Node.js and Express to manage pharmacy operations. This system handles inventory, supplier tracking, customer management, and provides a centralized dashboard for financial analytics.

## 🚀 Key Features

- **Secure Authentication**: Advanced session management using Access and Refresh tokens stored in `HttpOnly` cookies.
- **Dynamic Dashboard**: Aggregated statistics for products, suppliers, and customers, plus recent transactions from the last 30 days.
- **Inventory Management**: Full CRUD (Create, Read, Update, Delete) operations for pharmacy products and suppliers.
- **Smart Filtering**: Advanced search, sorting, and pagination for Orders and Product lists.
- **Data Integrity**: Strict schema validation using Joi and secure password hashing with Bcrypt.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: JSON Web Tokens (JWT), HttpOnly Cookies, Bcrypt.js
- **Validation**: Joi
- **API Testing**: Postman

---

## 📋 API Reference

### 🔐 Authentication

| Method | Endpoint              | Description                             |
| :----- | :-------------------- | :-------------------------------------- |
| `POST` | `/api/user/login`     | Authenticate user & set session cookies |
| `POST` | `/api/user/logout`    | Terminate session & clear cookies       |
| `GET`  | `/api/user/user-info` | Get current user's profile              |

### 📊 Dashboard

| Method | Endpoint         | Description                             |
| :----- | :--------------- | :-------------------------------------- |
| `GET`  | `/api/dashboard` | Get summary stats & recent transactions |

### 📦 Products

| Method   | Endpoint            | Description                                |
| :------- | :------------------ | :----------------------------------------- |
| `GET`    | `/api/products`     | List all products (supports search/filter) |
| `POST`   | `/api/products`     | Add a new product                          |
| `PUT`    | `/api/products/:id` | Update product details                     |
| `DELETE` | `/api/products/:id` | Remove a product from inventory            |

### 🚚 Suppliers, Orders & Customers

| Method | Endpoint             | Description                                 |
| :----- | :------------------- | :------------------------------------------ |
| `GET`  | `/api/suppliers`     | List all suppliers                          |
| `GET`  | `/api/orders`        | List all orders (with pagination)           |
| `GET`  | `/api/customers`     | Get customer list                           |
| `GET`  | `/api/customers/:id` | Get detailed info about a specific customer |

---

## ⚙️ Setup & Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/OksanaSlonska/e-pharmacy-backend
    cd e-pharmacy-backend
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:

    ```env
    PORT=3000
    DB_HOST=your_mongodb_uri
    ```

4.  **Run the application**:

    ```bash
    # Development mode
    npm run dev

    # Production mode
    npm start
    ```

## 🏗 Project Structure

```text
src/
 ├── controllers/    # Request handlers
 ├── models/         # Mongoose schemas
 ├── routes/         # API endpoint definitions
 ├── middlewares/    # Auth and error handling
 ├── services/       # Business logic (e.g., session management)
 ├── validations/    # Joi validation schemas
 └── server.js       # Entry point
```
