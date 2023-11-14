'use client'

import { AccountBox, Settings } from "@mui/icons-material";
import { Avatar, Box, CardActions, CardContent, CardMedia, Paper, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import profileImage from '@/public/images/profile-background.jpg'
import userProfileImage from '@/public/images/profile.webp'
import { UserInfoTab } from "./user-info-tab"
import { UserSettingsTab } from "./user-settings-tab"
import { useTranslations } from "next-intl"
import { useStore } from "@/store/useStore"

export function PersonalDataContainer() {
  const [value, setValue] = useState('profile')
  const t = useTranslations('personalData')
  const user = useStore(state => state.user)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue)
  }

  return isClient && (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '1200px', margin: 'auto' }}>
      <Paper sx={{ position: 'relative', borderRadius: 4 }} variant='outlined'>
        <CardMedia
          sx={{ height: 250, borderRadius: '10px 10px 0px 0px' }}
          image={profileImage.src}
          title='Fondo de pantalla del perfil'
        />
        <CardContent sx={{ position: 'absolute', left: '24px', bottom: '15px', display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={userProfileImage.src} sx={{ width: 100, height: 100, border: '4px solid white' }} />
          <Box>
            <Typography variant='h5' fontWeight='700' color='white'>{user.name}</Typography>
            <Typography variant='subtitle2' color='#ddd'>{user.jobTitle}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ paddingTop: 0, paddingBottom: 0, justifyContent: 'flex-end', width: '95%', margin: 'auto' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
          >
            <Tab icon={<AccountBox />} iconPosition='start' value='profile' label={t('profile')} sx={{ minHeight: 25 }} />
            <Tab icon={<Settings />} iconPosition='start' value='settings' label={t('settings')} sx={{ minHeight: 25 }} />
          </Tabs>
        </CardActions>
      </Paper>
      <Box>
        {
          value === 'profile' && <UserInfoTab />
        }
        {
          value === 'settings' && <UserSettingsTab />
        }
      </Box>
    </Box>
  )
}
