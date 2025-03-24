import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./context/UserContext.js";

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ViewProfile from "./components/ViewProfile";

import './App.css';

function App() {
  const URL="http://localhost:5000".trim("/");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{URL, name, userId, setUserId, setName }}>
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

const useUrl=()=>useContext(UserContext);

export default App;
export {useUrl};