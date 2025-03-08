import { create } from "zustand";

import { ToastState } from "@src/types/toast";

export const useToastStore = create<ToastState>((set) => ({
  toast: null,
  showToast: (message, type) => {
    set({ toast: { message, type } });
    setTimeout(() => set({ toast: null }), 3000);
  },
}));
