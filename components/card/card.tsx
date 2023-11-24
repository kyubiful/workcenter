import { Card as MUICard } from '@mui/material'
import { ReactNode } from "react"

export function Card({ children, sx }: { children: ReactNode, sx?: any }) {
  return (
    <MUICard
      sx={{
        ...sx,
        padding: '16px',
        boxShadow: 'none',
      }}
    >
      {children}
    </MUICard>
  )
}
