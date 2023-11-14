import { Calendar } from "@/components/calendar/calendar"
import { Card } from "@/components/card/card"
import { Box, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

export default function CalendarPage() {
  const t = useTranslations('calendar')
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Card>
        <Typography variant='h6' fontWeight={600}>{t('title')}</Typography>
      </Card>
      <Card>
        <Calendar view='multiMonthYear' />
      </Card>
    </Box>
  )
}
