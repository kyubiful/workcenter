'use client'

import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material"
import { ReactNode } from "react"

const theme = createTheme({
  typography: {
    fontFamily: '',
  },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  )
}
