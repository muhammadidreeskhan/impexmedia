import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message, budget } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send an email to your team
    // 2. Save to a database
    // 3. Send a confirmation email to the user
    // For now, we'll just log it and return success

    console.log("Quote Request Received:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      budget,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Save to database (Supabase, etc.)

    return NextResponse.json({ success: true, message: "Quote request received successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
