import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { userSlice } from "./slices/user"
import { appSlice } from "./slices/app"

export const useStore = create<any>()(
  devtools(
    persist(
      (...a) => ({ ...userSlice(...a), ...appSlice(...a) }),
      { name: "store" }
    )
  )
)
