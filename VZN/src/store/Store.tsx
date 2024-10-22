import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useStore = create(
  persist(
    (set, get) => ({
      listVzn: [],
      addVzn: (vzn) => set({ listVzn: vzn }),
      divisions: [],
      addDivisions: (divisions) => set({ divisions }),
      findDivison: (division) => {
        const result = get().divisions.filter((el) => el.code === division)
        return result
      },
      findVzn: (code) => {
        const result = get().listVzn.filter((el) => el.Code === code)
        return result[0].Num
      },
    }),

    {
      name: "listVzn",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
