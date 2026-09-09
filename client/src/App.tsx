import LoginPage from "@/pages/auth/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import RegisterPage from "@/pages/auth/RegisterPage";
import ProtectedRoutes from "@/features/auth/ProtectedRoutes";
import HomePage from "@/pages/HomePage";
import SpacePage from "@/pages/solar_system/SpacePage";
import PlanetPage from "./pages/solar_system/PlanetPage";
import { useEffect } from "react";
import useAuthStore from "./features/auth/authStore";
function App() {
  const getMe = useAuthStore((state) => state.getMe);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) getMe(navigate);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/space" element={<SpacePage />} />
          <Route path="/space/:planetName" element={<PlanetPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
