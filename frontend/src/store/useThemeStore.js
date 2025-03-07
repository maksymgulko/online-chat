import { create } from "zustand";

export const userThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "retro",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
