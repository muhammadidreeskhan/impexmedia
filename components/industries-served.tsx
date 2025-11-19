import { Building2, Hotel, ShoppingBag, Calendar, Landmark, Heart, GraduationCap, UtensilsCrossed } from "lucide-react"

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Brochures, signage, promotional materials",
  },
  {
    icon: Hotel,
    name: "Hospitality",
    description: "Menus, room collateral, branded amenities",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Packaging, labels, promotional items",
  },
  {
    icon: Calendar,
    name: "Corporate Events",
    description: "Banners, badges, event branding",
  },
  {
    icon: Landmark,
    name: "Government Projects",
    description: "Official documents, signage, campaigns",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Patient materials, signage, uniforms",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Stationery, certificates, promotional items",
  },
  {
    icon: UtensilsCrossed,
    name: "F&B",
    description: "Menus, packaging, branded merchandise",
  },
]

export function IndustriesServed() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trusted by leading businesses across diverse sectors in UAE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-muted to-white border border-border-color rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-base md:text-lg font-heading font-bold text-primary mb-2">
                  {industry.name}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
