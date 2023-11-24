import MiniDrawer from '@/components/mini-drawer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from '@/components/theme/theme-provider'

export function getStaticParams() {
  return {
    locale: ['en', 'es']
  }
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Workcenter',
  description: 'Workcenter App',
}

const locales = ['es', 'en']

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: any
}) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (e) {
    notFound()
  }

  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <CssBaseline />
      <body className={inter.className}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages} locale={locale} >
            <MiniDrawer>
              {children}
            </MiniDrawer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
