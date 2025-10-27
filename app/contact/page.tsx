import type { Metadata } from "next"
import ContactClientPage from "./ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us | Impex Media - Get Your Quote Today",
  description:
    "Contact Impex Media for corporate gifts, printing services, and branding solutions. Request a quote or call us today.",
  openGraph: {
    title: "Contact Us | Impex Media",
    description: "Get in touch with Impex Media for your corporate branding needs",
    url: "https://impexmedia.ae/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
