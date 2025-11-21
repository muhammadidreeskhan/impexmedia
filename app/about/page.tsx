import { UnifiedHeader } from "@/components/unified-header"
import { Footer } from "@/components/footer"
import { Building2, Users, Award, TrendingUp, Target, Heart, Shield, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Impex Capital Branding & Media House - Dubai UAE",
  description:
    "Learn about Impex Capital Branding & Media House - Where creativity meets capital strength. Leading B2B bulk production and corporate branding solutions in Dubai, UAE.",
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <UnifiedHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/40 rounded-full text-gold text-sm font-semibold mb-6">
              About Impex Capital
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Where Creativity Meets Capital Strength
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A premium Dubai-based agency specializing in bulk production, branding, printing, media, and advertising solutions. 
              Built on strong capital resources and creative expertise, we deliver end-to-end services for businesses that demand quality, volume, and strategic impact.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Impex Capital Branding & Media House is a premium Dubai-based agency specializing in bulk production, 
                  branding, printing, media, and advertising solutions. Built on strong capital resources and creative expertise, 
                  Impex Capital delivers end-to-end services for businesses that demand quality, volume, and strategic impact.
                </p>
                <p>
                  From mass printing to high-level digital campaigns, from corporate branding to large-scale advertising, 
                  we combine innovation, precision, and reliability to elevate brands to their highest potential. We help 
                  our clients stand out through professional design, premium materials, strategic advertising, and powerful 
                  media production — all under one roof.
                </p>
                <p>
                  At Impex Capital, we don't just create content. We build brands that last. With strong capital backing 
                  and a dedicated creative team, we deliver projects with precision, speed, and uncompromised quality.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <img
                src="/corporate-gifts-branded-merchandise-premium.jpg"
                alt="Impex Capital facilities"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border-color">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                To empower businesses across UAE with premium bulk production, branding, and media solutions that combine 
                creative excellence, capital strength, and unwavering reliability. We deliver projects with precision, speed, 
                and uncompromised quality — helping brands achieve maximum impact.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border-color">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                To become the leading provider of bulk production, branding, and media solutions in the Middle East, 
                recognized for our scale, capital strength, creative innovation, and commitment to building brands that last. 
                Your brand deserves excellence — we make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality & Precision",
                description: "Zero-compromise print and production quality. Premium materials and perfect execution every time.",
              },
              {
                icon: Shield,
                title: "Trust & Capital Strength",
                description: "Reliable and financially strong. Our capital backing ensures we deliver on every promise.",
              },
              {
                icon: Heart,
                title: "Creativity & Innovation",
                description: "Modern designs and advertising ideas that make your brand stand out in the market.",
              },
              {
                icon: Zap,
                title: "Speed & Professionalism",
                description: "Fast delivery with premium service. We respect your timelines and exceed expectations.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capital Strength Highlights */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Capital Strength & Capabilities
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Financially backed and equipped to handle projects of any scale
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100K+", label: "Units Produced Monthly" },
              { number: "500+", label: "Happy Clients" },
              { number: "99.8%", label: "On-Time Delivery" },
              { number: "24-48hr", label: "Rush Production" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Modern equipment and technology for superior production quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Printing",
                description: "Latest digital printing technology for high-quality, fast-turnaround projects",
                features: ["4K Resolution", "Color Accuracy", "Variable Data"],
              },
              {
                title: "Offset Printing",
                description: "Large-scale offset printing for bulk orders with consistent quality",
                features: ["High Volume", "Cost Effective", "Premium Finish"],
              },
              {
                title: "Finishing Equipment",
                description: "Professional finishing and packaging for a polished final product",
                features: ["Die Cutting", "Lamination", "Binding"],
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-6 border border-border-color hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{facility.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Experienced professionals driving our success
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-border-color text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={64} className="text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">Hamdan</h3>
              <p className="text-gold font-semibold mb-4">Founder & CEO</p>
              <p className="text-text-secondary leading-relaxed">
                Founder & Managing Director of Impex Capital Branding & Media House. With a vision to combine creative 
                excellence with capital strength, Hamdan established Impex Capital as a premium provider of bulk production, 
                branding, and media solutions. His leadership has made the company a trusted partner for businesses across UAE 
                seeking quality, volume, and strategic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Committed to quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "ISO 9001 Certified",
              "Dubai Chamber Member",
              "Quality Assured",
              "Eco-Friendly Materials",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-6 text-center border border-border-color hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <p className="font-heading font-bold text-primary">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-muted to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Milestones that shaped our success
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2020",
                title: "Company Founded",
                description: "Impex Capital established in Dubai with a vision to revolutionize B2B bulk production",
              },
              {
                year: "2021",
                title: "Facility Expansion",
                description: "Invested in state-of-the-art printing equipment and expanded production capacity",
              },
              {
                year: "2022",
                title: "100+ Clients Milestone",
                description: "Reached 100+ satisfied corporate clients across UAE",
              },
              {
                year: "2023",
                title: "ISO Certification",
                description: "Achieved ISO 9001 certification for quality management systems",
              },
              {
                year: "2024",
                title: "Digital Transformation",
                description: "Launched B2B marketplace platform for seamless ordering and quotations",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-border-color">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-text-secondary">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Your brand deserves excellence — we make it happen. Experience bulk production, powerful branding, and premium media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gold hover:bg-gold-light text-primary font-heading font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Request Bulk Quote
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white hover:bg-white hover:text-primary text-white font-heading font-bold px-8 py-4 rounded-lg transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
