import { type LoginForm, type RegisterForm } from "./types";

const baseURL = "http://localhost:3000/api/auth";

const authAPI = {
  login: function ({ email, password }: LoginForm) {
    const user = { email, password };
    return fetch(`${baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    });
  },

  register: function ({ username, email, password }: RegisterForm) {
    const user = { username, email, password };
    return fetch(`${baseURL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  },
};

export default authAPI;
