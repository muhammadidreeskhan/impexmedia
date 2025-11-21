import type React from "react"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import RFQCart from "@/components/rfq-cart"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Impex Capital Branding & Media House | B2B Bulk Production & Printing Dubai UAE",
  description:
    "Premium B2B marketplace for bulk production, corporate branding, printing, and media solutions in Dubai. Where creativity meets capital strength. Request bulk quotes today.",
  keywords:
    "bulk printing Dubai, B2B marketplace UAE, corporate branding, promotional merchandise bulk, printing services Dubai, signage Dubai, packaging solutions, event branding, advertising campaigns",
  authors: [{ name: "Impex Capital" }],
  openGraph: {
    title: "Impex Capital Branding & Media House | B2B Marketplace Dubai",
    description: "Premium bulk production, branding, and printing solutions for businesses in UAE",
    type: "website",
    locale: "en_AE",
  },
  robots: "index, follow",
  generator: 'v0.app'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0f1724',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://impexmedia.ae" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <RFQCart />
      </body>
    </html>
  )
}
