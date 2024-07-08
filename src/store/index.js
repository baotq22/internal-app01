import { create } from "zustand"

const useStore = create((set) => ({
  scroll: true,
  setScroll: (scroll) => set({ scroll }),
  direction: "vertical",
  setDirection: (direction) => set({direction}),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  isFlip: false,
  setIsFlip: (isFlip) => set({isFlip})
}))

export default useStore;