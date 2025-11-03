import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import { Providres } from './providers'
import { config } from '@/common/config'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: config.title.default,
    template: config.title.template
  },
  description: config.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${poppins.variable} antialiased`}>
        <Providres>
          <main className='container py-4'>{children}</main>
        </Providres>
      </body>
    </html>
  )
}
