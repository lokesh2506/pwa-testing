"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import sideBarData from "@/data/sidebar.json";
import { useNavigate } from "./useNavigate";
import { usePathname } from "next/navigation";
import { useGlobalDataStore } from "@/store/globalData.store";
import { useBreadcrumbStore } from "@/store/breadcrumb.store";

type MenuItem = {
  key: string;
  path: string;
  name: string;
};

export const useSidebar = () => {
  // ================= STATE =================
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(true);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { activeTab, setActiveTab: setDashboardTab } = useGlobalDataStore();
  const { resetBreadcrumbs } = useBreadcrumbStore();
  const {fetchCommunityHealthOfficer,fetchDashboardData} = useGlobalDataStore();

  const { navigate } = useNavigate();
  const pathname = usePathname();

  // ================= HELPERS =================

  // Get path from key
  const getPathFromKey = useCallback((key: string): string => {
    const item = sideBarData.menu.find((m: MenuItem) => m.key === key);
    return item?.path || "/dashboard";
  }, []);

  // Get key from path
  const getKeyFromPath = useCallback((path: string): string | null => {
    const item = sideBarData.menu.find((m: MenuItem) => m.path === path);
    return item?.key || null;
  }, []);

  //  Get menu item by key
  const getMenuItemByKey = useCallback((key: string) => {
    return sideBarData.menu.find((m: MenuItem) => m.key === key);
  }, []);

  //  Get fetch function from globalStore using fetchKey
  const getFetchFunction = useCallback((fetchKey?: string) => {
    if (!fetchKey) return undefined;

    const fetchMap: { [key: string]: () => Promise<void> } = {
      dashboard: () =>fetchDashboardData(),
      chos: () => fetchCommunityHealthOfficer(),
    };

    return fetchMap[fetchKey];
  }, [fetchDashboardData,fetchCommunityHealthOfficer]);

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
  
  // ================= INIT BREADCRUMB ON LOAD =================
  useEffect(() => {
    if (!activeTab) return;

    const menuItem = getMenuItemByKey(activeTab);
    if (!menuItem) return;

    const { breadcrumbs } = useBreadcrumbStore.getState();

    // Only set if breadcrumb is empty (initial load case)
    if (breadcrumbs.length === 0) {
      const fetchFunction = getFetchFunction(menuItem.key);

      resetBreadcrumbs({
        label: menuItem.name,
        key: menuItem.key,
        onClick: fetchFunction,
      });
    }
  }, [activeTab, getMenuItemByKey, getFetchFunction, resetBreadcrumbs]);

  // ================= HANDLE TAB CLICK =================
  const handleTabChange = (key: string) => {
    setDashboardTab(key);

    const path = getPathFromKey(key);
    const menuItem = getMenuItemByKey(key);
    const fetchFunction = getFetchFunction(menuItem?.key);

    // Reset breadcrumbs to current tab
    if (menuItem) {
      resetBreadcrumbs({
        label: menuItem.name,
        key: key,
        onClick: fetchFunction,
      });
    }

    // Prevent unnecessary navigation
    if (path !== pathname) {
      navigate(path);
    }
  };

  // ================= ARROW VISIBILITY =================
  const resetInactivityTimer = useCallback(() => {
    setIsArrowVisible(true);

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setIsArrowVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("touchstart", resetInactivityTimer);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [resetInactivityTimer]);

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