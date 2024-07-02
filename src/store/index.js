import { create } from "zustand"

const useStore = create((set) => ({
  scroll: true,
  setScroll: (scroll) => set({ scroll }),
}))

export default useStore;