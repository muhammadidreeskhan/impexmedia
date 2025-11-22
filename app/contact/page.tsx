import type { Metadata } from "next"
import { Suspense } from "react"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us | Impex Capital - Request Bulk Quote",
  description:
    "Contact Impex Capital for bulk production, corporate branding, and B2B printing solutions. Request a bulk quote or call us today.",
  openGraph: {
    title: "Contact Us | Impex Capital Branding & Media House",
    description: "Get in touch for B2B bulk production and corporate branding solutions",
    url: "https://impexcapital.ae/contact",
  },
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactClientPage />
    </Suspense>
  )
}
