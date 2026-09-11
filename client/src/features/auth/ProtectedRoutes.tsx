import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./authStore";
import Loading from "@/shared/ui/Loading";
function ProtectedRoutes() {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  if (isLoading) return <Loading />;
  if (user === null) return <Navigate to="login" replace />;
  return <Outlet />;
}

export default ProtectedRoutes;
