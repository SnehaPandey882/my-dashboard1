import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);

  // If user is NOT logged in → redirect to login
  if (!user.email) {
    return <Navigate to="/" replace />;
  }

  return children;
}
