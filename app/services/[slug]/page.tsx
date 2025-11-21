import { Metadata } from 'next'
import ServiceDetail from '@/components/service-detail'
import { UnifiedHeader } from '@/components/unified-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Service Details | Impex Capital',
  description: 'Detailed information about our bulk printing and branding services',
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      <UnifiedHeader />
      <ServiceDetail serviceSlug={params.slug} />
      <Footer />
    </div>
  )
}
