"use client"

import { useState } from "react"
import { UnifiedHeader } from "@/components/unified-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const categories = ["All", "Branding", "Printing", "Packaging", "Events", "Signage", "Digital Media"]

const projects = [
  {
    id: 1,
    title: "Dubai Properties Corporate Branding",
    category: "Branding",
    client: "Dubai Properties",
    image: "/corporate-gifts-branded-merchandise-premium.jpg",
    description: "Complete corporate identity redesign including logo, stationery, and branded merchandise for 500+ employees.",
    services: ["Logo Design", "Stationery", "Branded Merchandise"],
  },
  {
    id: 2,
    title: "Luxury Hotel Collateral Package",
    category: "Printing",
    client: "Confidential",
    image: "/service_2.webp",
    description: "Premium printing solutions for 5-star hotel including menus, room directories, and guest amenities.",
    services: ["Menu Printing", "Room Collateral", "Premium Finishing"],
  },
  {
    id: 3,
    title: "E-commerce Packaging Solution",
    category: "Packaging",
    client: "UAE E-commerce Brand",
    image: "/service_3.webp",
    description: "Custom packaging design and production for 50,000+ monthly orders with sustainable materials.",
    services: ["Package Design", "Bulk Production", "Sustainable Materials"],
  },
  {
    id: 4,
    title: "Tech Conference 2024",
    category: "Events",
    client: "Tech Summit Dubai",
    image: "/service_4.webp",
    description: "Complete event branding for 2,000+ attendee conference including signage, badges, and promotional materials.",
    services: ["Event Signage", "Badge Printing", "Promotional Items"],
  },
  {
    id: 5,
    title: "Retail Chain Signage System",
    category: "Signage",
    client: "Major Retail Chain",
    image: "/service_5.webp",
    description: "Comprehensive signage solution for 15 retail locations across UAE including LED and traditional signage.",
    services: ["LED Signage", "Wayfinding", "Installation"],
  },
  {
    id: 6,
    title: "Healthcare Campaign Materials",
    category: "Printing",
    client: "Healthcare Provider",
    image: "/service_8.webp",
    description: "Public health campaign materials including posters, brochures, and digital assets for 20+ clinics.",
    services: ["Campaign Design", "Bulk Printing", "Digital Assets"],
  },
  {
    id: 7,
    title: "Corporate Gift Sets",
    category: "Branding",
    client: "Financial Institution",
    image: "/branded-pen-corporate-gift.jpg",
    description: "Premium corporate gift sets for 1,000+ VIP clients including custom packaging and branding.",
    services: ["Gift Curation", "Custom Packaging", "Bulk Production"],
  },
  {
    id: 8,
    title: "Restaurant Menu & Branding",
    category: "Printing",
    client: "Restaurant Group",
    image: "/service_1.webp",
    description: "Complete menu design and printing for restaurant chain with 8 locations across Dubai.",
    services: ["Menu Design", "Premium Printing", "Brand Guidelines"],
  },
  {
    id: 9,
    title: "Social Media Campaign",
    category: "Digital Media",
    client: "Fashion Brand",
    image: "/service_2.webp",
    description: "6-month social media campaign with content creation, graphics, and promotional materials.",
    services: ["Content Creation", "Graphics Design", "Campaign Management"],
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <main className="overflow-x-hidden">
      <UnifiedHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our successful projects across diverse industries. From bulk printing to complete branding solutions, see how we've helped businesses scale.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gold text-primary shadow-lg"
                    : "bg-muted text-text-secondary hover:bg-gold/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-text-secondary">
              Showing <span className="font-bold text-primary">{filteredProjects.length}</span> projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border-color animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-primary text-xs font-bold px-3 py-2 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="bg-white text-primary p-3 rounded-full hover:bg-gold transition-colors inline-flex items-center justify-center"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-sm text-gold font-semibold mb-2">{project.client}</p>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-text-secondary px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">500+</div>
              <div className="text-gray-200">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">200+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">10M+</div>
              <div className="text-gray-200">Items Produced</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">99.8%</div>
              <div className="text-gray-200">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us for a consultation and bulk quote.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-heading font-bold transition-all hover:scale-105 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
