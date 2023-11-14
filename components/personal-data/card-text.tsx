import { Box, Typography } from "@mui/material";
import { ReactNode } from "react"

export function CardText({ title, text, href, icon }: { title: string, text: string, href?: string, icon?: ReactNode }) {
  return (
    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {icon}
      <Typography variant='body2' fontWeight={500}>
        {title}: {href !== undefined ? text : <a href={href}>{text}</a>}
      </Typography>
    </Box>
  )
}
