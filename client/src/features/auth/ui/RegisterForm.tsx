import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import leftArrowIcon from "@/assets/left-arrow-icon.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { type RegisterFormState } from "../types";
import authAPI from "../authApi";
const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, { error: "Username must be at least 3 symbols" }),
    email: z
      .email({ error: "Wrong email format" })
      .nonempty({ error: "Email can't be empty" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 symbols" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

function RegisterForm() {
  const { register, handleSubmit, formState } = useForm<RegisterFormState>({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmit = (userData: RegisterFormState) => {
    authAPI
      .register(userData)
      .then((resData) => localStorage.setItem("token", resData.token));
  };
  const { errors } = formState;
  const navigate = useNavigate();
  return (
    <form
      noValidate
      className="w-140 rounded-[20px] border-2 text-center p-8 bg-[#164b68CC]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-4xl ">Register</span>

      <FieldGroup className="mt-4">
        <Field className="relative">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            className="focus-visible:border-ring-secondary focus-visible:ring-ring-secondary/30 bg-input-secondary/50"
            {...register("username")}
          />
          <FieldError
            errors={[errors.username]}
            className="absolute left-0 top-full mt-1"
          />
        </Field>

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

        <Field className="relative">
          <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="focus-visible:border-ring-secondary focus-visible:ring-ring-secondary/30 bg-input-secondary/50"
            {...register("confirmPassword")}
          />
          <FieldError
            errors={[errors.confirmPassword]}
            className="absolute left-0 top-full mt-1"
          />
        </Field>
      </FieldGroup>

      <Button
        type="submit"
        size="lg"
        className="w-full mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        Register
      </Button>
      <button
        aria-label="Back to login"
        type="button"
        onClick={() => navigate("/login")}
      >
        <img
          className={
            "w-10 h-10 border-2 border-transparent z-10 rounded-full mt-2 hover:border-black"
          }
          src={leftArrowIcon}
        />
      </button>
    </form>
  );
}

export default RegisterForm;
