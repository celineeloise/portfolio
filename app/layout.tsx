import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Celine Eloise',
  description: 'Data science student bridging software, data, and research to build impactful solutions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}