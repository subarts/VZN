import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import TListVznPropsItem from "../types"

export const useStore = create(
  persist(
    (set, get) => ({
      listVzn: [],
      addVzn: (vzn) => set({ listVzn: vzn }),
      divisions: [],
      addDivisions: (divisions) => set({ divisions }),
      findDivison: (division) => {
        const result = get().divisions.filter((el) => el.Code === division)
        return result[0].Name
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
