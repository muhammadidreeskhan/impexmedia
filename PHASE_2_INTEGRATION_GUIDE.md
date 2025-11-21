# Phase 2 Integration Guide

## Quick Start

Phase 2 is now complete! Here's how to use the new features:

## 🔄 Optional: Enable Mega Menu Header

To use the new header with mega menus, update your page files:

### Option 1: Update Individual Pages

Replace the header import in any page:

```tsx
// Old
import { Header } from '@/components/header'

// New
import { HeaderWithMegaMenu } from '@/components/header-with-mega-menu'

// Then use it
<HeaderWithMegaMenu />
```

### Option 2: Create a Shared Layout Component

Create `components/page-layout.tsx`:

```tsx
import { HeaderWithMegaMenu } from '@/components/header-with-mega-menu'
import { Footer } from '@/components/footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderWithMegaMenu />
      {children}
      <Footer />
    </>
  )
}
```

Then use it in pages:

```tsx
import PageLayout from '@/components/page-layout'

export default function MyPage() {
  return (
    <PageLayout>
      {/* Your page content */}
    </PageLayout>
  )
}
```

## 🛒 RFQ Cart

The RFQ cart is already integrated globally in `app/layout.tsx` and will appear on all pages as a floating button in the bottom-right corner.

### How It Works

1. **Floating Button**: Always visible, shows item count badge
2. **Add Items**: Click "Add to RFQ Cart" on any product detail page
3. **View Cart**: Click the floating button to open the sidebar
4. **Manage Items**: Adjust quantities or remove items
5. **Request Quote**: Click "Request Quote" and fill out the form

### Customizing the Cart

Edit `components/rfq-cart.tsx` to:
- Change button position
- Modify styling
- Add/remove form fields
- Integrate with your backend API

## 📦 New Routes

### Product Marketplace
- **URL**: `/products`
- **Component**: `ProductsMarketplaceFull`
- **Features**: Search, filter, sort, grid/list views

### Product Details
- **URL**: `/products/[id]`
- **Example**: `/products/1`
- **Component**: `ProductDetail`
- **Features**: Pricing calculator, volume discounts, specifications

### Service Details
- **URL**: `/services/[slug]`
- **Example**: `/services/bulk-printing`
- **Component**: `ServiceDetail`
- **Features**: Process timeline, quote calculator, material options

## 🎨 Adding More Products

Edit `components/products-marketplace-full.tsx`:

```tsx
const products = [
  // Add new products here
  {
    id: 13,
    name: 'Your Product Name',
    category: 'Category Name',
    image: '/products/your-image.jpg',
    rating: 4.8,
    reviews: 1234,
    priceFrom: 99,
    moq: 100,
    leadTime: '3-5 days',
    featured: false
  },
  // ... existing products
]
```

## 🔧 Adding More Services

Edit `components/service-detail.tsx`:

```tsx
const serviceData: Record<string, any> = {
  'your-service-slug': {
    title: 'Your Service Name',
    subtitle: 'Brief description',
    description: 'Detailed description',
    features: [
      'Feature 1',
      'Feature 2',
      // ...
    ],
    process: [
      { step: 1, title: 'Step 1', description: 'Description' },
      // ...
    ],
    materials: [
      { name: 'Material 1', price: 'From AED X' },
      // ...
    ],
    applications: ['App 1', 'App 2'],
    leadTime: '3-5 days',
    moq: '100 units'
  },
  // ... existing services
}
```

## 🎯 Mega Menu Customization

Edit `components/header-with-mega-menu.tsx`:

### Add Service Categories

```tsx
const servicesMenu = [
  {
    title: 'Your Category',
    icon: YourIcon, // Import from lucide-react
    items: [
      { name: 'Service 1', href: '/services/service-1' },
      // ...
    ]
  },
  // ... existing categories
]
```

### Add Product Categories

```tsx
const productsMenu = [
  {
    title: 'Your Category',
    items: [
      { name: 'Product 1', href: '/products/product-1', popular: true },
      // ...
    ]
  },
  // ... existing categories
]
```

### Add Industries

```tsx
const industriesMenu = [
  { 
    name: 'Your Industry', 
    icon: YourIcon, 
    href: '/industries/your-industry' 
  },
  // ... existing industries
]
```

## 🔌 Backend Integration Points

### 1. Product Data
Replace static data in `products-marketplace-full.tsx` with API calls:

```tsx
const [products, setProducts] = useState([])

useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
```

### 2. Quote Submissions
In `rfq-cart.tsx`, add form submission:

```tsx
const handleSubmit = async (formData) => {
  const response = await fetch('/api/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: items,
      contact: formData
    })
  })
  // Handle response
}
```

### 3. Product Details
In `product-detail.tsx`, fetch product data:

```tsx
useEffect(() => {
  fetch(`/api/products/${productId}`)
    .then(res => res.json())
    .then(data => setProduct(data))
}, [productId])
```

## 📱 Testing Checklist

- [ ] Products page loads with all filters working
- [ ] Search functionality works
- [ ] Category filtering works
- [ ] Sort options work correctly
- [ ] Grid/List view toggle works
- [ ] Product detail pages load
- [ ] Pricing calculator updates correctly
- [ ] RFQ cart button appears
- [ ] Can add items to cart
- [ ] Cart sidebar opens/closes
- [ ] Quantity adjustments work
- [ ] Quote form opens and validates
- [ ] Mega menus appear on hover (desktop)
- [ ] Mobile menu works
- [ ] Service detail pages load
- [ ] All links navigate correctly

## 🎨 Styling Notes

All components use:
- Tailwind CSS classes
- Navy blue backgrounds (`navy-900`, `navy-800`)
- Gold accents (`gold-500`)
- Consistent spacing and borders
- Responsive breakpoints (md, lg, xl)

## 🚀 Performance Tips

1. **Image Optimization**: Replace placeholder images with Next.js Image component
2. **Code Splitting**: Components are already split by route
3. **Lazy Loading**: Consider lazy loading the RFQ cart
4. **API Caching**: Implement SWR or React Query for data fetching

## 📞 Support

If you need help:
1. Check the component files for inline comments
2. Review the Phase 2 completion document
3. Test in development mode first
4. Check browser console for errors

---

**Phase 2 is ready to use!** Start by visiting `/products` to see the new marketplace in action.
