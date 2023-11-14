import { Card } from "@/components/card/card"
import { PersonalDataContainer } from "@/components/personal-data/personal-data-container"
import { Box, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

export default function PersonalDataPage() {
  const t = useTranslations('personalData')
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Card>
        <Typography variant='h6' fontWeight={600}>{t('title')}</Typography>
      </Card>
      <Card>
        <PersonalDataContainer />
      </Card>
    </Box>
  )
}
