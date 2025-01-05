'use client'
import Link from 'next/link'
import { useCart } from '@/components/context/CartContext'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

export default function ProductCard({ product }: { product: any }) {
    const { addToCart } = useCart()
    const { toast } = useToast()

    const handleAddToCart = () => {
        addToCart(product)
        toast({
            title: "Added to cart",
            description: `${product.title} has been added to your cart.`,
        })
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/product/${product.id}`}>
                <img src={`${product.thumbnail}`} alt="{product.title}" width="300" height="200" className="w-full h-48 object-cover" />

            </Link>
            <div className="p-4">
                <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
            </div>
        </div>
    )
}

