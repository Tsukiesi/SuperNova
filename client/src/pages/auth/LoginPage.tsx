import LoginForm from "@/features/auth/ui/LoginForm";
import rocketIcon from "@/assets/rocket-icon.svg";
import { useState } from "react";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);
  return (
    <div
      className={
        "min-h-screen flex relative justify-center items-center overflow-hidden"
      }
    >
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-800 bg-[url('/background-clouds.jpg')] ${isBackgroundChanged ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-800 bg-[url('/background-blackhole.jpg')] ${isBackgroundChanged ? "opacity-100" : "opacity-0"}`}
      />

      <div className="flex flex-col justify-center items-center gap-4 relative z-10">
        <LoginForm
          onLogin={() => {
            setIsLoading(true);
            setTimeout(() => setIsBackgroundChanged(true), 800);
          }}
        />
      </div>

      <img
        className={`w-32 h-32 absolute z-10 left-72 bottom-36 transition-transform duration-1000 ease-in ${isLoading ? "translate-y-[-125vh]" : ""}`}
        src={rocketIcon}
      />
    </div>
  );
}

export default LoginPage;
