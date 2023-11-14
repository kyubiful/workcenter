import { Card } from "@/components/card/card"
import { ImputationsTable } from "@/components/imputations/imputation-table"
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useTranslations } from "next-intl"

export default function TimeReportingPage() {
  const t = useTranslations('timeReporting')
  return (
    <Box sx={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <Card>
        <Typography variant='h6' fontWeight={600}>{t('title')}</Typography>
      </Card>
      <Card>
        <ImputationsTable />
      </Card >
    </Box >
  )
}
