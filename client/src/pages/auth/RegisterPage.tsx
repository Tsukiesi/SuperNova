import useAuthStore from "@/features/auth/authStore";
import RegisterForm from "@/features/auth/ui/RegisterForm";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const user = useAuthStore((state) => state.user);
  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div
      className={
        "min-h-screen flex relative justify-center items-center overflow-hidden bg-cover bg-center bg-[url('/background-clouds.jpg')]"
      }
    >
      <div className="flex flex-col justify-center items-center gap-4 relative z-10">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterPage;
