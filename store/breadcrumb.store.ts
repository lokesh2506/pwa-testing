import { create } from "zustand";

export interface BreadcrumbItem {
  label: string;
  key: string;
  onClick?: () => void | Promise<void>;
}

interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];

  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
  addBreadcrumb: (item: BreadcrumbItem) => void;
  resetBreadcrumbs: (item: BreadcrumbItem) => void;
  handleClick: (index: number) => Promise<void>;
  clearBreadcrumbs: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>((set, get) => ({
  breadcrumbs: [],

  // Replace everything (used on tab click)
  setBreadcrumbs: (items) => set({ breadcrumbs: items }),

  // Push new breadcrumb (drill-down)
  addBreadcrumb: (item) =>
    set((state) => ({
      breadcrumbs: [...state.breadcrumbs, item],
    })),

  // Reset and add single item (tab click use-case)
  resetBreadcrumbs: (item) =>
    set({
      breadcrumbs: [item],
    }),

  // Clear all breadcrumbs
  clearBreadcrumbs: () =>
    set({
      breadcrumbs: [],
    }),

  // Handle click on breadcrumb
  handleClick: async (index) => {
    const { breadcrumbs } = get();
    const selected = breadcrumbs[index];

    // Keep only till clicked index
    const updated = breadcrumbs.slice(0, index + 1);

    set({ breadcrumbs: updated });

    // Trigger action
    if (selected.onClick) {
      await selected.onClick();
    }
  },
}));