# 📌 Task Management Application  
A web-based task management application where users can **sign up, log in, create, update, delete, and manage tasks**. It has **user authentication, a task dashboard, filtering options**, and a **progress tracker**.

---

## 📁 Project Structure
Task Management/ 
│── server/ # Backend (Node.js, Express, SQLite) 
│── task_manager/ # Frontend (React) 
│── .gitignore 
│── README.md
---

## ⚙️ Tech Stack
### **Frontend (React - `task_manager/`)**
- ReactJS
- React Router
- Context API
- CSS for styling

### **Backend (Node.js - `server/`)**
- Node.js
- Express.js
- SQLite3
- JWT Authentication

---

## 🚀 Features
✔️ **User Authentication** (Sign up, Log in, Logout)  
✔️ **Task CRUD Operations** (Create, Read, Update, Delete)  
✔️ **Filter Tasks** by status: `Pending`, `In Progress`, `Completed`, `Done`  
✔️ **Progress Tracker** (Shows percentage of completed tasks)  
✔️ **Profile Page**  
✔️ **Secure API with JWT Authentication**  

---

## 📌 Setup Instructions
### **1️⃣ Clone the Repository**
```
git clone https://github.com/vaRun13579/task-management-application.git
cd task-management-application
2️⃣ Backend Setup (server/)

cd server
npm install    # Install dependencies
node start  # Start the backend server
The backend runs on http://localhost:5000

3️⃣ Frontend Setup (task_manager/)

cd ../task_manager
npm install    # Install dependencies
npm start      # Start the React frontend
The frontend runs on http://localhost:3000

🛠 API Endpoints (Backend)
Method	Endpoint	Description
POST	/register	Register a new user
POST	/login	Log in and get a JWT token
GET	/tasks	Get all tasks (Requires JWT)
POST	/task/add	Add a new task (Requires JWT)
PUT	/task/:id/update	Update task status (Requires JWT)
DELETE	/task/:id/delete	Delete a task (Requires JWT)
🔑 Authentication
JWT token is stored in cookies

Protected routes ensure only logged-in users can access tasks

