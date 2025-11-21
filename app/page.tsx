import { UnifiedHeader } from "@/components/unified-header"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServiceCategories } from "@/components/service-categories"
import { FeaturedMarketplace } from "@/components/featured-marketplace"
import { WhyChooseUs } from "@/components/why-choose-us"
import { IndustriesServed } from "@/components/industries-served"
import { BulkQuoteSection } from "@/components/bulk-quote-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impex Capital Branding & Media House | B2B Bulk Production & Printing Dubai UAE",
  description:
    "Premium B2B marketplace for bulk production, corporate branding, printing, and media solutions in Dubai. Where creativity meets capital strength. Request bulk quotes today.",
  openGraph: {
    title: "Impex Capital Branding & Media House | B2B Marketplace Dubai",
    description: "Premium bulk production, branding, and printing solutions for businesses in UAE",
    url: "https://impexcapital.ae",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <UnifiedHeader />
      <HeroCarousel />
      <ServiceCategories />
      <FeaturedMarketplace />
      <WhyChooseUs />
      <IndustriesServed />
      <BulkQuoteSection />
      <Testimonials />
      <Footer />
    </main>
  )
}
