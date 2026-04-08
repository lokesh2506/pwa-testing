"use client";

import { useEffect, useState } from "react";
import data from "@/data/sidebar.json";
import { useNavigate } from "./useNavigate";

export const useSidebar = () => {
  const [isOpen,setIsOpen] = useState<boolean>(false);

  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(true);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const [activeTab,setActiveTab] = useState<string | null>(data?.menu?.[0]?.key || null);

  const {navigate} = useNavigate()



  const resetInactivityTimer = () => {
    setIsArrowVisible(true);

    if (hideTimeout) clearTimeout(hideTimeout);

    const timeout = setTimeout(() => {
      setIsArrowVisible(false);
    }, 3000);

    setHideTimeout(timeout);
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("touchstart", resetInactivityTimer);

    resetInactivityTimer(); // initialize

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
    };
  }, []);

  const toggle = ():void => setIsOpen((prev)=>!prev);
  return {
    isOpen,
    toggle,
    isArrowVisible,
    activeTab,
    setActiveTab,
    navigate
  };
};