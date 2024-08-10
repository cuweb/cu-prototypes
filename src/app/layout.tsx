import type { Metadata } from 'next'
import './globals.css'
import BodyWrapper from '@/blocks/Global/BodyWrapper'
import Footer from '@/blocks/Global/Footer'

export const metadata: Metadata = {
  title: 'Project Prototypes',
  description: 'A NextJS project for rapid layout prototyping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BodyWrapper>
        {children}
        <Footer />
      </BodyWrapper>
    </html>
  )
}
