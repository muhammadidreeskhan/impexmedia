import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignsBoardsDetail } from "@/components/signs-boards-detail"

export const metadata: Metadata = {
    title: "Signs Boards Dubai | Traffic & Road Signage Solutions - Impex Media",
    description:
        "Professional signs and boards services in Dubai. Traffic signs, gantry signs, destination signs, and more. RTA-compliant signage solutions.",
}

export default function SignsBoardsPage() {
    return (
        <main className="overflow-x-hidden">
            <Header />
            <SignsBoardsDetail />
            <Footer />
        </main>
    )
}
