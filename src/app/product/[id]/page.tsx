import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'
import { Star } from 'lucide-react'

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, { next: { revalidate: 3600 } })
    if (!res.ok) {
        if (res.status === 404) {
            notFound()
        }
        throw new Error('Failed to fetch product')
    }
    return res.json()
}

// Correct type for params
export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    width="500"
                    height="500"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-4 grid grid-cols-5 gap-2">
                    {product.images.slice(0, 5).map((image: string, index: number) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${product.title} ${index + 1}`}
                            width="100"
                            height="100"
                            className="w-full h-20 object-cover rounded-md shadow"
                        />
                    ))}
                </div>
            </div>
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${
                                    i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-gray-600">({product.rating.toFixed(1)})</span>
                </div>
                <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
                <AddToCartButton product={product} />
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Product Details</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Brand: {product.brand}</li>
                        <li>Category: {product.category}</li>
                        <li>Stock: {product.stock}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
