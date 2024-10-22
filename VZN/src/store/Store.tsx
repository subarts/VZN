import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useStore = create(
  persist(
    (set, get) => ({
      listVzn: [],
      divisions: [],
      addVzn: (vzn) => set((state) => ({ listVzn: vzn })),
      adddivisions: (divisions) => set((state) => ({ divisions: divisions })),
    }),

    {
      name: "listVzn",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
