import LoginPage from "@/pages/auth/LoginPage";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import ProtectedRoutes from "./ProtectedRouteS";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
