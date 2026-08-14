export type LoginFormProps = {
  onLogin: () => void;
};

export type LoginFormState = {
  email: string;
  password: string;
};

export type RegisterFormState = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};
