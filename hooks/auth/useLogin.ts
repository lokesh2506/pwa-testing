"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useNavigate } from "../dashboard/useNavigate";
import { AuthService } from "@/services/auth/login";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthStore();
  const { navigate } = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      const res = await AuthService.login({ email, password });

      if (!res.success || !res.data) {
        throw new Error(res.message || "Login failed");
      }

      setUser(res.data);

      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};