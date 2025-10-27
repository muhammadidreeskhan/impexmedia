import type React from "react"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

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
  title: "Impex Media | Promotional Items LLC - Corporate Gifts & Branded Merchandise UAE",
  description:
    "Leading supplier of promotional items, corporate gifts, and customized printing solutions in Dubai, UAE. Quality branded merchandise with fast turnaround times.",
  keywords:
    "promotional items, corporate gifts, branded merchandise, printing services, custom gifts, Dubai, UAE, signboards, promotional products",
  authors: [{ name: "Impex Media" }],
  openGraph: {
    title: "Impex Media | Promotional Items LLC - Corporate Gifts UAE",
    description: "Quality promotional items and customized printing solutions for businesses in UAE",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
