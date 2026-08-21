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

export type User = {
  id: number;
  username: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  getMe(): Promise<void>;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  username: string;
  email: string;
  password: string;
};
