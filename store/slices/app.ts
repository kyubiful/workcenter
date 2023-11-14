import { StateCreator } from "zustand"

interface App {
  language: string
  menuOpen: boolean
}

interface AppSlice {
  app: App
}

const initialApp: App = {
  language: 'es',
  menuOpen: false
}

export const appSlice: StateCreator<AppSlice> = (set) => ({
  app: initialApp,
  openMenu: () => set((state) => ({ app: { ...state.app, menuOpen: true } })),
  closeMenu: () => set((state) => ({ app: { ...state.app, menuOpen: false } })),
  removeSettings: () => set({ app: initialApp })
})
