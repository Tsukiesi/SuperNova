import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
function ProtectedRoutes() {
  const { isLoading, user } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="login" replace />;
  return <Outlet />;
}

export default ProtectedRoutes;
