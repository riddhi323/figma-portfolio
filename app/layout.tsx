import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackgroud'
import Navbar from '@/components/main/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'itsMukherjee',
  description: 'Bibhabendu Mukherjee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <Navbar/>
      <StarsCanvas/>
      {children}
      </body>

    </html>
  )
}
