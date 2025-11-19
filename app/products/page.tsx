import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsMarketplace } from "@/components/products-marketplace"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Impex Capital - B2B Bulk Promotional Merchandise",
  description:
    "Browse our B2B marketplace for bulk promotional products. Competitive pricing on branded merchandise with MOQ options. Request bulk quotes today.",
  openGraph: {
    title: "Products | Impex Capital Branding & Media House",
    description: "B2B bulk promotional merchandise and corporate products",
    url: "https://impexcapital.ae/products",
  },
}

const products = [
  {
    id: 1,
    name: "Custom Branded T-Shirts",
    category: "Apparel",
    price: "From AED 25",
    image: "/placeholder.svg?key=6juni",
    description: "High-quality cotton t-shirts with your custom logo or design.",
  },
  {
    id: 2,
    name: "Corporate Caps & Hats",
    category: "Headwear",
    price: "From AED 15",
    image: "/placeholder.svg?key=ubeza",
    description: "Premium caps and hats perfect for brand promotion.",
  },
  {
    id: 3,
    name: "Branded Mugs",
    category: "Drinkware",
    price: "From AED 12",
    image: "/placeholder.svg?key=4ykm0",
    description: "Ceramic mugs with custom printing for daily use.",
  },
  {
    id: 4,
    name: "Custom Notebooks",
    category: "Stationery",
    price: "From AED 8",
    image: "/placeholder.svg?key=801z3",
    description: "Professional notebooks with your branding.",
  },
  {
    id: 5,
    name: "Branded Pens",
    category: "Stationery",
    price: "From AED 3",
    image: "/placeholder.svg?key=o7bx6",
    description: "Quality pens with custom imprinting.",
  },
  {
    id: 6,
    name: "Corporate Bags",
    category: "Bags",
    price: "From AED 35",
    image: "/placeholder.svg?key=ykfml",
    description: "Durable bags perfect for corporate gifting.",
  },
  {
    id: 7,
    name: "Branded Lanyards",
    category: "Accessories",
    price: "From AED 5",
    image: "/placeholder.svg?key=v33vf",
    description: "Custom lanyards for events and corporate use.",
  },
  {
    id: 8,
    name: "USB Flash Drives",
    category: "Tech",
    price: "From AED 20",
    image: "/placeholder.svg?key=u2hd3",
    description: "Custom USB drives with your branding.",
  },
]

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              B2B Marketplace
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Bulk Products Catalog
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Browse our extensive B2B marketplace for bulk promotional products. Competitive pricing with flexible MOQ options.
            </p>
          </div>
        </div>
      </section>

      {/* Products Marketplace */}
      <ProductsMarketplace />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Need Custom Bulk Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We specialize in large-scale custom orders. Get competitive bulk pricing and fast turnaround times.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
