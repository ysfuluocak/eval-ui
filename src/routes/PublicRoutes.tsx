// routes/PublicRoutes.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoutes() {
  const { isAuthenticated } = useAuth();

  // Eğer kullanıcı zaten giriş yaptıysa login sayfasına erişimi engelle
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
