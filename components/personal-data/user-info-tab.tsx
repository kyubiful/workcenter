import { AssignmentInd, Email, LocalPhone, LocationCity, MarkunreadMailbox, PhoneAndroid, PhoneIphone, Public, Save, Tag, TravelExplore, Home, Cake, People, FamilyRestroom } from "@mui/icons-material"
import { Box, CardContent, Paper, Button, CardHeader, Divider } from "@mui/material"
import { CardText } from "./card-text"
import { useTranslations } from "next-intl"

export function UserInfoTab() {
  const t = useTranslations('personalData')
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, width: '100%' }}>
        <Paper sx={{ borderRadius: 4 }} variant='outlined'>
          <CardHeader title={t('title')} />
          <Divider />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 3 }}>
            <CardText title={t('personalNumber')} text='00000182' icon={<AssignmentInd />} />
            <CardText title={t('idNumber')} text='02656992D' icon={<Tag />} />
            <CardText title={t('email')} text='MARIA.ALBINANA@VASS.ES' icon={<Email />} href='mailto:maria.albinana@vass.es' />
          </CardContent>
        </Paper>
        <Paper sx={{ borderRadius: 4 }} variant='outlined'>
          <CardHeader title={t('contactDetailAddress')} />
          <Divider />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 3 }}>
            <CardText title={t('internalMobile')} text='1344' icon={<PhoneAndroid />} />
            <CardText title={t('externalMobile')} text='' icon={<PhoneIphone />} />
            <CardText title={t('internalPhone')} text='' icon={<LocalPhone />} />
            <CardText title={t('address')} text='C/. César Cort Botí 16, blq.2, 2ºE' icon={<Home />} />
            <CardText title={t('postalCode')} text='28055' icon={<MarkunreadMailbox />} />
            <CardText title={t('town')} text='Madrid' icon={<LocationCity />} />
            <CardText title={t('provinceState')} text='Madrid' icon={<TravelExplore />} />
            <CardText title={t('country')} text='Spain' icon={<Public />} />
          </CardContent>
        </Paper>
        <Paper sx={{ borderRadius: 4 }} variant='outlined'>
          <CardHeader title={t('otherPersonalData')} />
          <Divider />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 3 }}>
            <CardText title={t('birthDate')} text='20/11/1982' icon={<Cake />} />
            <CardText title={t('maritalStatus')} text='Marr.' icon={<People />} />
            <CardText title={t('numberChildren')} text='2' icon={<FamilyRestroom />} />
          </CardContent>
        </Paper>
      </Box>
      <Button sx={{ width: 350 }} variant='contained' startIcon={<Save />}>{t('requestDataModification')}</Button>
    </Box>
  )
}
