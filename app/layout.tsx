import React from "react"
import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'

import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-sans'
})
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Grit & Green Co. | Native Landscaping for Detroit',
  description: 'Detroit yards are ready to run wild. Grit & Green Co. brings native landscaping, rain gardens, and rewilding services to transform your yard into a thriving ecosystem.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
