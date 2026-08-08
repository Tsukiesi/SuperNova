import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type LoginFormProps } from "../types";

function LoginForm({ onLogin }: LoginFormProps) {
  return (
    <form
      action=""
      className="w-140 h-140 rounded-[20px] border-2 p-8 bg-background text-amber-50"
      onSubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="Email" />
          <FieldError />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" placeholder="Password" />
          <FieldError />
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" className="w-full mt-8">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
