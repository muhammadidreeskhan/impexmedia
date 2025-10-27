"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const signCategories = [
    {
        title: "Traffic Signs Dubai Service",
        description: "Our Traffic Signs Dubai service provides high-quality, durable, and government-compliant traffic and safety signs for roads, parking areas, and construction sites. We use premium materials and reflective coatings to ensure maximum visibility day and night. Each sign is designed to meet Dubai's road safety standards, ensuring clarity, durability, and reliability in all weather conditions.",
        image: "/service_5.webp",
        link: "/signs-boards#traffic-signs",
    },
    {
        title: "Gantry & Cantilever Signs Dubai Service",
        description: "Our Gantry & Cantilever Signs Dubai service provides top-quality overhead signage solutions for highways, main roads, and commercial areas. Designed for maximum visibility and durability, our signs ensure smooth traffic flow and clear navigation for all drivers. Each structure is engineered using premium materials to withstand Dubai's harsh weather conditions and meet RTA specifications.",
        image: "/service_3.webp",
        link: "/signs-boards#gantry-cantilever",
    },
    {
        title: "Ground Mounted Signs Dubai Service",
        description: "Our Ground Mounted Signs Dubai service provides durable and high-visibility signage solutions for roads, parking areas, and public spaces. These signs are designed to deliver clear guidance and important information to drivers and pedestrians alike. Built with premium reflective materials, they ensure visibility both day and night under all weather conditions.",
        image: "/service_2.webp",
        link: "/signs-boards#ground-mounted",
    },
    {
        title: "Destination Signs Dubai Service",
        description: "Our Destination Signs Dubai service provides clear and reliable signage solutions to guide travelers, drivers, and pedestrians effortlessly to their destinations. Designed with precision and built using high-quality reflective materials, these signs ensure maximum visibility during both day and night conditions.",
        image: "/service_1.webp",
        link: "/signs-boards#destination-signs",
    },
    {
        title: "Height Warning Gantry Dubai Service",
        description: "Our Height Warning Gantry Dubai service provides essential safety solutions for roads, tunnels, and bridges by alerting drivers of height restrictions ahead. These gantries are built with durable materials and high-visibility reflective panels to ensure maximum awareness both day and night.",
        image: "/service_4.webp",
        link: "/signs-boards#height-warning",
    },
    {
        title: "Project Signs Dubai Service",
        description: "Our Project Signs Dubai service offers high-quality, professional signage solutions tailored for construction and development projects. These signs are designed to display essential project information, safety guidelines, and branding in a clear and visually appealing format.",
        image: "/service_8.webp",
        link: "/signs-boards#project-signs",
    },
]

export function SignsBoards() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F59E0B] mb-4">
                        Signs Boards
                    </h2>
                </div>

                {/* Signs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {signCategories.map((category, index) => (
                        <Link
                            key={category.title}
                            href={category.link}
                            className="group relative overflow-hidden rounded-lg bg-gray-900 animate-in fade-in slide-in-from-bottom-8 duration-700 block"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.style.display = "none"
                                    }}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content - Hover State */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/95 to-black/60 pointer-events-none">
                                <h3 className="text-xl font-semibold mb-3 text-white">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                                    {category.description}
                                </p>
                                <div className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white px-4 py-2 rounded-md w-fit font-medium">
                                    More Details
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Default Title (visible when not hovering) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <h3 className="text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F59E0B] transition-colors duration-300 rounded-lg pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
