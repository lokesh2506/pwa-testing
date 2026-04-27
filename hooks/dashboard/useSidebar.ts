"use client";

import { useEffect, useState, useCallback } from "react";
import sideBarData from "@/data/sidebar.json";
import { useNavigate } from "./useNavigate";
import { usePathname } from "next/navigation";
import {useDataStore} from "@/store/data.store"

type MenuItem = {
  key: string;
  path: string;
};

export const useSidebar = () => {
  // ================= STATE =================
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(true);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const { activeTab,setActiveTab: setDashboardTab } = useDataStore();

  const { navigate } = useNavigate();
  const pathname = usePathname();

  // ================= HELPERS =================

  // 🔹 Get path from key
  const getPathFromKey = useCallback((key: string): string => {
    const item = sideBarData.menu.find((m: MenuItem) => m.key === key);
    return item?.path || "/dashboard";
  }, []);

  // 🔹 Get key from path
  const getKeyFromPath = useCallback((path: string): string | null => {
    const item = sideBarData.menu.find(
      (m: MenuItem) => m.path === path
    );
    return item?.key || null;
  }, []);

  // ================= SYNC: URL → activeTab =================
  useEffect(() => {
    const matchedKey = getKeyFromPath(pathname);

    if (matchedKey) {
      setDashboardTab(matchedKey);
    } else {
      const fallback = sideBarData?.menu?.[0]?.key || null;
      if (fallback) setDashboardTab(fallback);
    }
  }, [pathname, getKeyFromPath, setDashboardTab]);

  // ================= HANDLE TAB CLICK =================
  const handleTabChange = (key: string) => {
    setDashboardTab(key);

    const path = getPathFromKey(key);

    // Prevent unnecessary navigation
    if (path !== pathname) {
      navigate(path); // client-side navigation (no reload)
    }
  };

  // ================= ARROW VISIBILITY =================
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

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
    };
  }, []);

  // ================= TOGGLE =================
  const toggle = (): void => setIsOpen((prev) => !prev);

  // ================= RETURN =================
  return {
    isOpen,
    toggle,
    isArrowVisible,
    activeTab,
    setDashboardTab,
    handleTabChange, 
    navigate,
  };
};