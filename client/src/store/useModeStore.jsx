import { create } from 'zustand';

const useModeStore = create((set) => ({
  darkMode: false,
  updateMode: () => {
    const darkMode = useModeStore.getState().darkMode;
    set({ darkMode: !darkMode });
  },
}));

export default useModeStore;
