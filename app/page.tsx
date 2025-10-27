import { Header } from "@/components/header"
import { HeroEnhanced } from "@/components/hero-enhanced"
import { ServicesGridEnhanced } from "@/components/services-grid-enhanced"
import { FeaturedProductsEnhanced } from "@/components/featured-products-enhanced"
import { SignsBoards } from "@/components/signs-boards"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impex Media | Promotional Items LLC - Corporate Gifts & Branded Merchandise UAE",
  description:
    "Leading supplier of promotional items, corporate gifts, and customized printing solutions in Dubai, UAE. Quality branded merchandise with fast turnaround times.",
  openGraph: {
    title: "Impex Media | Promotional Items LLC - Corporate Gifts UAE",
    description: "Quality promotional items and customized printing solutions for businesses in UAE",
    url: "https://impexmedia.ae",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroEnhanced />
      <ServicesGridEnhanced />
      <FeaturedProductsEnhanced />
      <SignsBoards />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
