import Link from "next/link"
import { Printer, Palette, Gift, Megaphone, Package, Monitor, Calendar, TrendingUp } from "lucide-react"

const categories = [
  {
    icon: Printer,
    title: "Bulk Printing",
    description: "Business cards, brochures, catalogs, flyers",
    href: "/services/bulk-printing",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Corporate Branding",
    description: "Logo design, brand guidelines, stationery",
    href: "/services/corporate-branding",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Gift,
    title: "Promotional Merchandise",
    description: "T-shirts, bags, pens, USB drives, mugs",
    href: "/services/promotional-merchandise",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Megaphone,
    title: "Signage & Banners",
    description: "LED boards, flex printing, display stands",
    href: "/services/signage-banners",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description: "Custom boxes, labels, product packaging",
    href: "/services/packaging",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Monitor,
    title: "Digital Media Production",
    description: "Video production, graphics, social media",
    href: "/services/digital-media",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Calendar,
    title: "Event Branding",
    description: "Exhibitions, conferences, trade shows",
    href: "/services/event-branding",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Advertising Campaigns",
    description: "Outdoor ads, vehicle wraps, billboards",
    href: "/services/advertising",
    color: "from-red-500 to-red-600",
  },
]

export function ServiceCategories() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive B2B solutions for all your branding and production needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={category.href}
                className="group bg-white border border-border-color rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-heading font-bold text-primary mb-2 group-hover:text-gold transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary line-clamp-2">
                  {category.description}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-lg font-heading font-semibold transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
