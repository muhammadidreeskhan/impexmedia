import { Factory, Shield, Award, Zap } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Scale & Capacity",
    description: "State-of-the-art facilities capable of handling orders from 100 to 100,000+ units with consistent quality.",
    stats: "100K+ Units/Month",
  },
  {
    icon: Shield,
    title: "Trust & Capital Strength",
    description: "Financially backed and reliable partner for your business. We deliver on time, every time.",
    stats: "99.8% On-Time Delivery",
  },
  {
    icon: Award,
    title: "Quality & Precision",
    description: "Premium materials, cutting-edge technology, and meticulous quality control for perfect execution.",
    stats: "ISO Certified",
  },
  {
    icon: Zap,
    title: "Speed & Professionalism",
    description: "Fast turnaround times without compromising quality. Express production available for urgent orders.",
    stats: "24-48hr Rush Available",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
            Why Choose Impex Capital
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Where Creativity Meets Capital Strength
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Your trusted B2B partner for bulk production and corporate branding in Dubai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-block bg-gold/20 border border-gold/40 rounded-full px-3 py-1">
                    <span className="text-gold text-xs font-bold">{feature.stats}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
