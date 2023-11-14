'use client'

import { Box, Button, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useStore } from '@/store/useStore'
import { useEffect, useState } from 'react'
import { Card } from '@/components/card/card'

export default function Home() {
  const t = useTranslations('home')
  const user = useStore(state => state.user)
  const setUser = useStore(state => state.setUser)
  const removeUser = useStore(state => state.removeUser)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogin = () => {
    setUser({
      name: 'Sergio Zabala',
      email: 'sergio.zabala@avantgardeit.es',
      pern: '1234',
      token: 'asdfasdflajsdfñlasdfasdfasdfasdf',
      jobTitle: 'FullStack Developer'
    })
  }

  const handleLogout = () => {
    removeUser()
  }

  return isClient && (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card>
        {
          user.token !== undefined
            ? <Typography variant='h6'>{`${t('welcome')} ${user.name}!`}</Typography>
            : <Typography variant='h6'>{t('loginMessage')}</Typography>}
      </Card>
      <Card>
        {
          user.token !== undefined
            ? <Button variant='contained' onClick={handleLogout}>{t('logout')}</Button>
            : <Button variant='contained' onClick={handleLogin}>{t('login')}</Button>
        }
      </Card>
    </Box>
  )
}
