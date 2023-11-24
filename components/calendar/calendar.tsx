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
      locale={locale === 'es' ? esLocale : enLocale}
      height={600}
      events={
        [
          {
            title: 'All Day Event',
            start: '2023-11-15',
            color: 'rgba(0,0,200,.6)'
          },
          {
            title: 'Long Event',
            start: '2023-11-01',
            end: '2023-11-10',
            color: 'rgba(200,0,0,.6)'
          },
          {
            title: 'Día de Todos los Santos',
            start: '2023-11-01',
            color: 'rgba(0,200,0,.6)'
          },
          {
            title: 'Fiesta de la Almudena',
            start: '2023-11-09',
            color: 'rgba(0,200,0,.6)'
          }
        ]
      }
    />
  )
}
