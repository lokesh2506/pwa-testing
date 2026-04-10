"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useNavigate = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const navigate = (url: string) => {
    if (!isReady) return; // prevents early call
    router.push(url);
  };

  return { navigate };
};