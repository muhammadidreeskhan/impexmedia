import Link from "next/link"
import { Printer, Zap, Gift, Palette } from "lucide-react"

const services = [
  {
    icon: Printer,
    title: "Customized Printing",
    description: "High-quality printing solutions for all your branding needs including digital, offset, and specialty printing.",
  },
  {
    icon: Gift,
    title: "Promotional Items",
    description: "Wide range of promotional products and corporate gifts customized with your brand identity.",
  },
  {
    icon: Palette,
    title: "Signboards & Displays",
    description: "Professional signage solutions including LED boards, flex printing, and display stands.",
  },
  {
    icon: Zap,
    title: "Branded Merchandise",
    description: "Custom branded products including bags, apparel, stationery, and tech accessories.",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Complete range of customized printing and promotional solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-muted p-8 rounded-lg hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-accent hover:text-accent-light font-medium text-sm transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
