import { create } from "zustand";

type DashboardState = {
  state: string | null;
  district: string | null;
  data: any;
  loading: boolean;

  setFilters: (state: string, district: string) => void;
  setStateOnly: (state: string) => void;
  fetchDashboardData: () => Promise<void>;
};

export const useDashboardStore = create<DashboardState>((set, get) => ({
  state: null,
  district: null,
  data: null,
  loading: false,

  setStateOnly: (state) => {
    set({ state, district: null }); // reset district
  },

  setFilters: (state, district) => {
    set({ state, district });
    get().fetchDashboardData(); // trigger API
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