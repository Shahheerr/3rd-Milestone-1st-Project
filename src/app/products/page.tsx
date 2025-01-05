import { Suspense, use } from 'react'
import ProductCard from '@/components/ProductCard'
import { Loader2 } from 'lucide-react'

async function getProducts() {
    const res = await fetch('https://dummyjson.com/products?limit=20', { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating a slow network
    return res.json()
}

function ProductList() {
    const { products } = use(getProducts())

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <Suspense fallback={<ProductsLoading />}>
                <ProductList />
            </Suspense>
        </div>
    )
}

function ProductsLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
            <h2 className="text-2xl font-semibold mt-4">Loading Products...</h2>
            <p className="text-muted-foreground mt-2">Please wait while we fetch our latest products.</p>
        </div>
    )
}

