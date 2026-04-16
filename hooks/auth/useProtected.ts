"use client";

import { useEffect } from "react";
import { useNavigate } from "../dashboard/useNavigate";
import { useAuthStore } from "@/store/auth.store";

export const useProtected = () => {
  const { user, isAuthenticated, hasHydrated } = useAuthStore();
  const { navigate } = useNavigate();

  useEffect(() => {
    if (!hasHydrated) return;

    if (!user || !isAuthenticated) {
      navigate("/");
    }
  }, [user, isAuthenticated, hasHydrated, navigate]);
};