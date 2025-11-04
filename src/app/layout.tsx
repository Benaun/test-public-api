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
      <body className={`${poppins.variable} antialiased h-dvh`}>
        <Providres>
          <div className='container w-full flex flex-col gap-5 mx-auto'>
            <header className='py-5 flex w-full gap-4 justify-center'>
              <h1 className='text-5xl'>Rick and Morty API</h1>
            </header>
            <main className='container py-4 mx-auto min-h-dvh'>
              {children}
            </main>
          </div>
        </Providres>
      </body>
    </html>
  )
}
