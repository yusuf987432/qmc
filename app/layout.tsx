import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Queen's Medical Centre - Healthcare Training Institution",
  description: 'Independent training institution in healthcare, medical, and professional development in Wuse, Abuja. Partnered with University of Nottingham (UK).',
  keywords: 'medical training, healthcare education, Abuja, Queen\'s Medical Centre, University of Nottingham',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}