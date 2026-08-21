import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { type LoginFormProps, type LoginFormState } from "../types";
import authAPI from "../authAPI";
import { useAuth } from "../AuthContext";

const LoginSchema = z.object({
  email: z
    .email({ error: "Wrong email format" })
    .nonempty({ error: "Email can't be empty" }),
  password: z.string().min(8, { error: "Password must be at least 8 symbols" }),
});

function LoginForm({ onLogin }: LoginFormProps) {
  const { register, handleSubmit, formState } = useForm<LoginFormState>({
    resolver: zodResolver(LoginSchema),
  });
  const { errors } = formState;
  const { getMe } = useAuth();
  const onSubmit = (userData: LoginFormState) => {
    authAPI.login(userData).then((resData) => {
      localStorage.setItem("token", resData.token);
      onLogin();
      getMe();
    });
  };

  return (
    <form
      noValidate
      className="w-140 h-140 rounded-[20px] border-2 text-center p-8 bg-[#164b68CC]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-4xl ">Welcome</span>

      <FieldGroup className="mt-4">
        <Field className="relative">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="focus-visible:border-ring-secondary focus-visible:ring-ring-secondary/30 bg-input-secondary/50"
            {...register("email")}
          />
          <FieldError
            errors={[errors.email]}
            className="absolute left-0 top-full mt-1"
          />
        </Field>

        <Field className="relative">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="focus-visible:border-ring-secondary focus-visible:ring-ring-secondary/30 bg-input-secondary/50"
            {...register("password")}
          />
          <FieldError
            errors={[errors.password]}
            className="absolute left-0 top-full mt-1"
          />
        </Field>
      </FieldGroup>
      <div className="flex justify-between text-sm mt-8">
        <span>
          Don't have account?
          <Link to="/register" className="ml-1 hover:underline text-[#a37d32]">
            Register here
          </Link>
        </span>
        <span>
          Forget password?
          <a href="" className="ml-1 hover:underline text-[#a37d32]">
            Reset password
          </a>
        </span>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
