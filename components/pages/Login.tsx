"use client";

import { useLogin } from "@/hooks/auth/useLogin";
import { useState } from "react";
import CommonButton from "@/components/buttons/CommonButton";


export default function LoginPage() {
  const { handleLogin, loading } = useLogin();

  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("1234");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-80 p-6 rounded-xl border space-y-4">
        <h1 className="text-xl font-bold">Login</h1>

        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CommonButton
          buttonStyle="w-full bg-black text-white p-2 rounded"
          content={loading ? "Loading..." : "Login"}
          clickFunction={() => handleLogin(email, password)}
        />
      </div>
    </div>
  );
}