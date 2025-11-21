import { Metadata } from 'next'
import ProductDetailLight from '@/components/product-detail-light'
import { UnifiedHeader } from '@/components/unified-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Product Details | Impex Capital',
  description: 'View detailed product information, pricing tiers, and customization options',
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedHeader />
      <ProductDetailLight productId={params.id} />
      <Footer />
    </div>
  )
}
