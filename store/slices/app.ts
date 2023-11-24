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
  toggleMenu: () => set((state) => {
    return {
      app: { ...state.app, menuOpen: !state.app.menuOpen }
    }
  }),
  removeSettings: () => set({ app: initialApp })
})
