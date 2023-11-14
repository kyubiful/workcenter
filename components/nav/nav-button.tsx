import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import Link from "next-intl/link"
import { usePathname } from "next/navigation"

export function NavButton({ nav, open }: any) {
  const pathname = usePathname()

  return (
    <ListItem key={nav.title} sx={{ display: 'block', padding: '2px' }}>
      <Link href={nav.href} style={{ textDecoration: 'none' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            borderRadius: '8px',
            backgroundColor: pathname === nav.href || pathname === `/en${nav.href}` ? 'rgba(0,0,200,.3)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,200,.3)',
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <nav.icon
              sx={{ color: pathname === nav.href || pathname === `/en${nav.href}` ? 'rgba(0,0,200,.6)' : 'rgba(0,0,0,.6)' }}
            />
          </ListItemIcon>
          <ListItemText primary={nav.title}
            sx={{
              opacity: open ? 1 : 0,
              color: pathname === nav.href || pathname === `/en${nav.href}` ? 'rgba(0,0,200,.6)' : 'rgba(0,0,0,.5)'
            }}
          />
        </ListItemButton>
      </Link>
    </ListItem>
  )
}
