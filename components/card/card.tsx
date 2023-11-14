import { Card as MUICard } from '@mui/material'
import { ReactNode } from "react"

export function Card({ children }: { children: ReactNode }) {
  return (
    <MUICard
      sx={{
        padding: '16px',
        boxShadow: 'none',
      }}
    >
      {children}
    </MUICard>
  )
}
