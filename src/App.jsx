import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Users from "./pages/Users";    // ⭐ NEW

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<UserDetails />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Documents />
          </ProtectedRoute>
        }
      />

      {/* ⭐ NEW USERS PAGE ROUTE */}
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
