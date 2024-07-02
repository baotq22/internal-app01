import { create } from "zustand"

const useStore = create((set) => ({
  scroll: true,
  setScroll: (scroll) => set({ scroll }),
  direction: "vertical",
  setDirection: (direction) => set({direction})
}))

export default useStore;