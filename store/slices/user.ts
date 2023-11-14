import { StateCreator } from "zustand"

interface User {
  name: string | undefined
  email: string | undefined
  pern: string | undefined
  token: string | undefined
  society: string | undefined
  jobTitle: string | undefined
}

interface UserSlice {
  user: User
}

const initialUser: User = {
  name: undefined,
  email: undefined,
  pern: undefined,
  token: undefined,
  society: undefined,
  jobTitle: undefined
}

export const userSlice: StateCreator<UserSlice> = (set) => ({
  user: initialUser,
  setUser: (user: User) => set((state) => ({ user: { ...state.user, ...user } })),
  removeUser: () => set({ user: initialUser })
})
