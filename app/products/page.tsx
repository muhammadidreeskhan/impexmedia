import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Impex Media - Customizable Corporate Merchandise",
  description:
    "Browse our wide range of customizable products including branded t-shirts, caps, mugs, notebooks, and more for corporate gifting.",
  openGraph: {
    title: "Products | Impex Media",
    description: "Customizable corporate merchandise and promotional products",
    url: "https://impexmedia.ae/products",
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
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[#F59E0B]">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our wide range of customizable products perfect for corporate branding and promotional campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#F59E0B] hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden bg-gray-100 h-64">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-[#F59E0B] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <Link
                      href={`/contact`}
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-white p-3 rounded-lg transition-all hover:scale-110 inline-flex items-center justify-center shadow-lg"
                      aria-label={`Inquire about ${product.name}`}
                    >
                      <ShoppingCart size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#F59E0B]">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific needs. Contact us for a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
