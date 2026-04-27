import { create } from "zustand";

type DataState = {
  state: string | null;
  district: string | null;
  activeTab: string | null;
  data: any;
  loading: boolean;

  setFilters: (state: string, district: string) => void;
  setActiveTab: (tab: string) => void;
  setStateOnly: (state: string) => void;
  fetchDashboardData: () => Promise<void>;
};

export const useDataStore = create<DataState>((set, get) => ({
  state: null,
  district: null,
  activeTab:null,
  data: null,
  loading: false,


  setStateOnly: (state) => {
    set({ state, district: null }); // reset district
  },

  setFilters: (state, district) => {
    set({ state, district });
    if (get().activeTab === "dashboard") {
        get().fetchDashboardData();
      }
  },

  setActiveTab: (tab) => {
    set({ activeTab: tab });

    const { state, district } = get();

    //  If dashboard is clicked AND filters already exist → call API
    if (tab === "dashboard" && state && district) {
      get().fetchDashboardData();
    }
  },

  fetchDashboardData: async () => {
    const { state, district } = get();

    if (!state || !district) return;

    set({ loading: true });

    try {
      const res = await fetch("/api/dashboard", {
        method: "POST",
        body: JSON.stringify({ state, district }),
      });

      const result = await res.json();

      if (result.success) {
        set({ data: result.data, loading: false });
      }
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },
}));