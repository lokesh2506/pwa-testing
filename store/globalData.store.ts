import { create } from "zustand";

interface globalData {
  state: string | null;
  district: string | null;
  activeTab: string | null;
  dashboardData: any;
  choData: any;
  choProfileData: any;
  loading: boolean;

  setFilters: (state: string, district: string) => void;
  setActiveTab: (tab: string) => void;
  setStateOnly: (state: string) => void;
  fetchDashboardData: () => Promise<void>;
  fetchCommunityHealthOfficer: () => Promise<void>;
  fetchChoProfile: (choId: string) => Promise<void>;
}

export const useGlobalDataStore = create<globalData>((set, get) => ({
  state: null,
  district: null,
  activeTab: null,
  dashboardData: null,
  choData: null,
  choProfileData: null,
  loading: false,

  setStateOnly: (state) => {
    set({ state, district: null });
  },

  setFilters: (state, district) => {
    set({ state, district });
    if (get().activeTab === "dashboard") {
      get().fetchDashboardData();
    }
    if (get().activeTab === "chos") {
      get().fetchCommunityHealthOfficer();
    }
  },

  setActiveTab: (tab) => {
    set({ activeTab: tab });

    const { state, district } = get();

    if (tab === "dashboard" && state && district) {
      get().fetchDashboardData();
    }
    if (tab === "chos" && state && district) {
      get().fetchCommunityHealthOfficer();
    }
  },

  fetchDashboardData: async () => {
    const { state, district } = get();
    if (!state || !district) return;

    set({ loading: true });
    try {
      const res = await fetch("/api/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state, district }),
      });
      const result = await res.json();

      if (result.success) {
        set({ dashboardData: result.data, loading: false });
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      set({ loading: false });
    }
  },

  fetchCommunityHealthOfficer: async () => {
    const { state, district } = get();
    if (!state || !district) return;

    set({ loading: true });

    try {
      const res = await fetch("/api/chos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state, district }),
      });
      const result = await res.json();

      if (result.success) {
        set({ choData: result.data, loading: false });
        set({choProfileData:null})
      }
    } catch (err) {
      console.error("Error fetching CHOs data:", err);
      set({ loading: false });
    }
  },

  // Fetch CHO Profile Data
  fetchChoProfile: async (choId: string) => {
    
    set({ loading: true });
    console.log("CHO ID:", choId);
    try {
      const res = await fetch(`/api/chos/${choId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result.success) {
        set({ choProfileData: result.data, loading: false });
        set({choData:null})
      }
    } catch (err) {
      console.error("Error fetching CHO profile:", err);
      set({ loading: false });
    }
  },

}));