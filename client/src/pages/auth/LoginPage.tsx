import LoginForm from "@/features/auth/ui/LoginForm";
import rocketIcon from "@/assets/rocket-icon.svg";
import { useAuth } from "@/features/auth/AuthContext";

function LoginPage() {
  const { isLoading } = useAuth();
  return (
    <div
      className={
        "min-h-screen flex relative justify-center items-center overflow-hidden"
      }
    >
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-800 bg-[url('/background-clouds.jpg')]`}
      />

      <div className="flex flex-col justify-center items-center gap-4 relative z-10">
        <LoginForm />
      </div>

      <img
        className={`w-32 h-32 absolute z-10 left-72 bottom-36 transition-transform duration-1000 ease-in ${isLoading ? "translate-y-[-125vh]" : ""}`}
        src={rocketIcon}
      />
    </div>
  );
}

export default LoginPage;
