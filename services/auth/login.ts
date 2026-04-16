import { LoginPayload, LoginResponse } from "@/types/auth/login";

export const AuthService = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return res.json();
  },
};