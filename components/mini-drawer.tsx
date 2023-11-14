'use client'

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import { usePathname, useRouter } from 'next-intl/client'
import {
  IconButton,
  List,
  Toolbar,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Drawer as MuiDrawer,
  Box,
  ListSubheader,
  Button
} from '@mui/material';

import { NavButton } from './nav/nav-button'
import { useTranslations, useLocale } from 'next-intl'

import { Info, PersonAdd, Insights, Paid, PieChart, ChevronLeft, ChevronRight, Menu, CalendarMonth, Checklist, ViewTimeline } from '@mui/icons-material'

import { ReactNode } from 'react'
import AccountMenu from './account-menu'
import { useStore } from '@/store/useStore'
import { WC } from './icons/wc'
import Link from 'next-intl/link'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const t = useTranslations('menu')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const openMenu = useStore(state => state.openMenu)
  const closeMenu = useStore(state => state.closeMenu)
  const appState = useStore(state => state.app)


  const changeLanguage = () => {
    router.replace(pathname, { locale: locale === 'es' ? 'en' : 'es' })
  }

  const NAVIGATION = [
    {
      href: '/calendar',
      title: t('calendar'),
      icon: CalendarMonth,
    },
    {
      href: '/time-reporting',
      title: t('timeReporting'),
      icon: ViewTimeline,
    }
  ]

  const PMNAVIGATION = [
    {
      href: '/information',
      title: t('information'),
      icon: Info,
    },
    {
      href: '/assignments',
      title: t('assignments'),
      icon: PersonAdd,
    },
    {
      href: '/planning',
      title: t('planning'),
      icon: Insights,
    },
    {
      href: '/summary',
      title: t('summary'),
      icon: Checklist,
    },
    {
      href: '/production',
      title: t('production'),
      icon: Paid,
    },
    {
      href: '/reports',
      title: t('reports'),
      icon: PieChart,
    }
  ]

  const handleDrawerOpen = () => {
    openMenu()
  };

  const handleDrawerClose = () => {
    closeMenu()
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        open={appState.menuOpen}
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(appState.menuOpen && { display: 'none' }),
              color: 'black'
            }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href='/'>
              <WC color='rgba(0,0,200,.6)' />
            </Link>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
              <Button sx={{ color: 'black' }} onClick={() => console.log({ appState, locale })}>App State</Button>
              <Button sx={{ color: 'black', backgroundColor: '#4747d9aa', '&:hover': { backgroundColor: '#4747d9aa' } }} onClick={() => changeLanguage()}>{locale === 'es' ? 'ES' : 'EN'}</Button>
              <AccountMenu />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={appState.menuOpen}
        sx={{
          '.css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
            border: 0
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <List
          subheader={<ListSubheader component='div'>{t('userMenuTitle')}</ListSubheader>}
        >
          {NAVIGATION.map((nav) => (
            <NavButton nav={nav} open={appState.menuOpen} key={nav.title} />
          ))}
        </List>
        <List
          subheader={<ListSubheader component='div'>{t('pmMenuTitle')}</ListSubheader>}
        >
          {PMNAVIGATION.map((nav) => (
            <NavButton nav={nav} open={appState.menuOpen} key={nav.title} />
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, minHeight: '100vh', pt: 12 }}>
        <Box sx={{ p: 3, background: 'rgb(238, 242, 246)', borderRadius: '8px', minHeight: '100%' }}>
          {children}
        </Box>
      </Box>
    </Box >
  );
}
