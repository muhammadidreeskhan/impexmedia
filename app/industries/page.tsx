import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Hotel, ShoppingBag, Calendar, Landmark, Heart, GraduationCap, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve | Impex Capital - B2B Solutions Across Sectors",
  description:
    "Impex Capital serves diverse industries including real estate, hospitality, retail, healthcare, education, and more with bulk production and branding solutions.",
  openGraph: {
    title: "Industries We Serve | Impex Capital Branding & Media House",
    description: "B2B solutions for diverse industries across UAE",
    url: "https://impexcapital.ae/industries",
  },
}

const industries = [
  {
    icon: Building2,
    name: "Real Estate",
    description: "Comprehensive branding solutions for property developers and real estate agencies",
    services: [
      "Property brochures and catalogs",
      "Signage and wayfinding systems",
      "Sales office branding",
      "Promotional materials",
      "Corporate gifts for clients",
    ],
    image: "/service_1.webp",
  },
  {
    icon: Hotel,
    name: "Hospitality",
    description: "Premium branding and printing solutions for hotels, restaurants, and resorts",
    services: [
      "Menu printing and design",
      "Room collateral and amenities",
      "Branded uniforms and apparel",
      "Signage and wayfinding",
      "Guest welcome kits",
    ],
    image: "/service_2.webp",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Complete packaging and branding solutions for retail businesses",
    services: [
      "Custom packaging and boxes",
      "Product labels and tags",
      "Shopping bags and carriers",
      "Point-of-sale materials",
      "Promotional merchandise",
    ],
    image: "/service_3.webp",
  },
  {
    icon: Calendar,
    name: "Corporate Events",
    description: "Full-service event branding and production for conferences and exhibitions",
    services: [
      "Event banners and backdrops",
      "Badge printing and lanyards",
      "Booth design and setup",
      "Promotional giveaways",
      "Event signage",
    ],
    image: "/service_4.webp",
  },
  {
    icon: Landmark,
    name: "Government Projects",
    description: "Reliable partner for government agencies and public sector organizations",
    services: [
      "Official documents and forms",
      "Public signage systems",
      "Campaign materials",
      "Certificates and awards",
      "Branded stationery",
    ],
    image: "/service_5.webp",
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Specialized printing and branding for hospitals, clinics, and medical facilities",
    services: [
      "Patient information materials",
      "Medical signage and wayfinding",
      "Staff uniforms and ID badges",
      "Prescription pads and forms",
      "Health campaign materials",
    ],
    image: "/service_8.webp",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Complete branding solutions for schools, universities, and training centers",
    services: [
      "Student stationery and supplies",
      "Certificates and diplomas",
      "Campus signage",
      "Promotional materials",
      "Event merchandise",
    ],
    image: "/service_1.webp",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    description: "Custom packaging and branding for restaurants, cafes, and food businesses",
    services: [
      "Menu design and printing",
      "Food packaging solutions",
      "Branded takeaway items",
      "Staff uniforms",
      "Promotional materials",
    ],
    image: "/service_2.webp",
  },
]

export default function IndustriesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Trusted by leading businesses across diverse sectors in UAE. We deliver tailored B2B solutions that meet the unique needs of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-3">
                          <Icon size={32} className="text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-text-secondary mb-6">
                      {industry.description}
                    </p>
                    
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">
                      Our Solutions:
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-text-secondary">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-3 rounded-lg font-heading font-bold transition-all shadow-lg hover:shadow-xl"
                    >
                      Get Industry Solutions
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We work with businesses across all sectors. Contact us to discuss your specific industry needs and custom solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-heading font-bold transition-all hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
