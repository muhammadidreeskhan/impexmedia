"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const signServices = [
  {
    id: "traffic-signs",
    title: "Traffic Signs Dubai Service",
    image: "/service_5.webp",
    description:
      "Our Traffic Signs Dubai service provides high-quality, durable, and government-compliant traffic and safety signs for roads, parking areas, and construction sites. We use premium materials and reflective coatings to ensure maximum visibility day and night. Each sign is designed to meet Dubai's road safety standards, ensuring clarity, durability, and reliability in all weather conditions.",
    fullDescription:
      "From directional and warning signs to custom-made safety boards, we specialize in manufacturing and installing a wide range of traffic solutions. Our expert team ensures precision, timely delivery, and professional installation. Keep your roads and facilities safe and compliant with our trusted Traffic Signs Dubai service.",
    features: [
      "Government-compliant traffic signs",
      "Premium reflective materials",
      "24/7 visibility in all weather",
      "Custom safety boards",
      "Professional installation",
      "RTA standards compliance",
    ],
  },
  {
    id: "gantry-cantilever",
    title: "Gantry & Cantilever Signs Dubai Service",
    image: "/service_3.webp",
    description:
      "Our Gantry & Cantilever Signs Dubai service provides top-quality overhead signage solutions for highways, main roads, and commercial areas. Designed for maximum visibility and durability, our signs ensure smooth traffic flow and clear navigation for all drivers. Each structure is engineered using premium materials to withstand Dubai's harsh weather conditions and meet RTA specifications.",
    fullDescription:
      "We offer complete solutions from design and fabrication to installation and maintenance. Whether you need directional, informational, or warning gantry signs, our expert team delivers precision, safety, and reliability. Trust us to enhance road communication with high-standard Gantry & Cantilever Signs in Dubai.",
    features: [
      "Overhead signage solutions",
      "Highway and main road installations",
      "Weather-resistant materials",
      "RTA specification compliance",
      "Complete design to installation",
      "Maintenance services available",
    ],
  },
  {
    id: "ground-mounted",
    title: "Ground Mounted Signs Dubai Service",
    image: "/service_2.webp",
    description:
      "Our Ground Mounted Signs Dubai service provides durable and high-visibility signage solutions for roads, parking areas, and public spaces. These signs are designed to deliver clear guidance and important information to drivers and pedestrians alike. Built with premium reflective materials, they ensure visibility both day and night under all weather conditions.",
    fullDescription:
      "From design and fabrication to installation, we handle every stage with precision and compliance to RTA standards. Whether for directional, regulatory, or warning purposes, our ground-mounted signs enhance safety and navigation. Choose us for reliable and long-lasting signage that stands firm across Dubai's landscape.",
    features: [
      "Durable ground-mounted solutions",
      "High-visibility reflective materials",
      "Day and night visibility",
      "RTA standards compliance",
      "Directional and regulatory signs",
      "Professional installation",
    ],
  },
  {
    id: "destination-signs",
    title: "Destination Signs Dubai Service",
    image: "/service_1.webp",
    description:
      "Our Destination Signs Dubai service provides clear and reliable signage solutions to guide travelers, drivers, and pedestrians effortlessly to their destinations. Designed with precision and built using high-quality reflective materials, these signs ensure maximum visibility during both day and night conditions.",
    fullDescription:
      "Whether installed on highways, urban roads, or public areas, our destination signs meet RTA standards for accuracy and durability. We specialize in custom designs that enhance navigation, reduce confusion, and promote road safety across Dubai's fast-moving transport network.",
    features: [
      "Clear navigation guidance",
      "High-quality reflective materials",
      "24/7 visibility",
      "RTA standards compliance",
      "Custom design options",
      "Highway and urban installations",
    ],
  },
  {
    id: "height-warning",
    title: "Height Warning Gantry Dubai Service",
    image: "/service_4.webp",
    description:
      "Our Height Warning Gantry Dubai service provides essential safety solutions for roads, tunnels, and bridges by alerting drivers of height restrictions ahead. These gantries are built with durable materials and high-visibility reflective panels to ensure maximum awareness both day and night.",
    fullDescription:
      "Designed in compliance with RTA standards, our gantries help prevent accidents and protect infrastructure from damage caused by oversized vehicles. We offer customized designs, precise installation, and long-lasting performance for every road safety project in Dubai.",
    features: [
      "Height restriction alerts",
      "Durable construction materials",
      "High-visibility reflective panels",
      "RTA compliance",
      "Accident prevention",
      "Custom design and installation",
    ],
  },
  {
    id: "project-signs",
    title: "Project Signs Dubai Service",
    image: "/service_8.webp",
    description:
      "Our Project Signs Dubai service offers high-quality, professional signage solutions tailored for construction and development projects. These signs are designed to display essential project information, safety guidelines, and branding in a clear and visually appealing format.",
    fullDescription:
      "We use durable, weather-resistant materials to ensure longevity in outdoor environments, maintaining clarity and color even under harsh conditions. From design to installation, our team ensures your project signage meets Dubai Municipality standards and enhances your site's professional image.",
    features: [
      "Construction project signage",
      "Weather-resistant materials",
      "Professional branding display",
      "Safety guideline boards",
      "Dubai Municipality compliance",
      "Custom design services",
    ],
  },
]

export function SignsBoardsDetail() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F59E0B]">
              Signs Boards
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional signage solutions for roads, highways, and construction
              projects across Dubai. RTA-compliant and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {signServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-20 last:mb-0 ${
                index % 2 === 0 ? "" : "bg-gray-50"
              } rounded-2xl p-8 md:p-12`}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div
                  className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
                  >
                    <Link href="/contact" className="inline-flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F59E0B]">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for professional signage solutions that meet Dubai's
            highest standards.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
