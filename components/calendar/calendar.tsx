'use client'

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import multimonthPlugin from "@fullcalendar/multimonth"
import esLocale from '@fullcalendar/core/locales/es'
import enLocale from '@fullcalendar/core/locales/en-gb'
import { useLocale } from 'next-intl'

export function Calendar({ view }: { view: string }) {
  const locale = useLocale()
  return (
    <FullCalendar
      plugins={[dayGridPlugin, multimonthPlugin]}
      initialView={view}
      contentHeight={1600}
      locale={locale === 'es' ? esLocale : enLocale}
    />
  )
}
