import RegisterForm from "@/features/auth/ui/RegisterForm";

function RegisterPage() {
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
