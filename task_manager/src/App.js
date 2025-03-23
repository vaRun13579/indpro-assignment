import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext.js";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ViewProfile from "./components/ViewProfile";

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ name, userId, setUserId, setName }}>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard name={name} userId={userId} /></ProtectedRoute>} />
        <Route path="/viewprofile" element={<ProtectedRoute><ViewProfile /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />}/>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
