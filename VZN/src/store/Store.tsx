import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { TListVznPropsItem } from "../types"

import { TDivisions } from "../types"

type TCards = {
  ArrivalQty?: number
  LeaveQty?: number
  Name?: string
  Sign?: string
  Num?: string
}

interface IUseStore {
  listVzn: Array<TListVznPropsItem>
  divisions: TDivisions[] | []
  viewingComposition: Array<TCards> | []
  boOperation: string
  page: number
  addVzn: (vzn: TListVznPropsItem[]) => void
  addDivisions: (divisions: TDivisions[]) => void
  addViewingComposition: (viewingCompositions: TCards[]) => void
  findDivision: (division: number) => string
  findVzn: (code: number) => string
  addBoOperation: (boOperation: string) => void
  setPage: (page: number) => void
}

export const useStore = create<IUseStore>()(
  persist(
    (set, get) => ({
      listVzn: [],
      divisions: [],
      viewingComposition: [],
      boOperation: "",
      page: 0,

      addVzn: (vzn) => set({ listVzn: vzn }),
      addDivisions: (divisions) => set({ divisions }),
      addViewingComposition: (viewingCompositions) =>
        set({ viewingComposition: viewingCompositions }),
      addBoOperation: (boOperation) => set({ boOperation }),
      setPage: (page) => set({ page }),
      findDivision: (division) => {
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
