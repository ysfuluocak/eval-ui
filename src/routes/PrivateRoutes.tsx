// routes/PrivateRoutes.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuth();

  return true ? <Outlet /> : <Navigate to="/login" replace />;
}
