import { Metadata } from 'next'
import ProductsMarketplaceFull from '@/components/products-marketplace-full'
import { UnifiedHeader } from '@/components/unified-header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Products Marketplace | Impex Capital - Bulk Printing & Branding Solutions',
  description: 'Browse our extensive catalog of bulk printing, branding, and promotional products. Get instant quotes for business cards, banners, packaging, and more.',
  keywords: 'bulk printing products, promotional items Dubai, corporate branding materials, wholesale printing',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedHeader />
      <ProductsMarketplaceFull />
      <Footer />
    </div>
  )
}
