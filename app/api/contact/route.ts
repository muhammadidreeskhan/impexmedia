import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message, budget, cartItems } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification (using SendGrid, Resend, etc.)
    // 2. Save to database
    // 3. Send to CRM
    
    // For now, we'll just log it and return success
    console.log('Quote Request Received:', {
      name,
      email,
      phone,
      company,
      service,
      budget,
      message,
      cartItems: cartItems?.length || 0,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending (replace with actual email service)
    const emailContent = `
      New Quote Request from Impex Capital Website
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || 'Not provided'}
      Service: ${service}
      Budget: ${budget || 'Not specified'}
      
      Message:
      ${message}
      
      ${cartItems && cartItems.length > 0 ? `
      Cart Items (${cartItems.length}):
      ${cartItems.map((item: any) => `
        - ${item.name} (${item.category})
          Quantity: ${item.quantity}
          MOQ: ${item.moq}
          ${item.notes ? `Notes: ${item.notes}` : ''}
      `).join('\n')}
      ` : ''}
      
      Submitted: ${new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })}
    `

    console.log('Email Content:', emailContent)

    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'quotes@impexcapital.ae',
    //   to: 'info@impexcapital.ae',
    //   subject: `New Quote Request from ${name}`,
    //   text: emailContent,
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request received successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
