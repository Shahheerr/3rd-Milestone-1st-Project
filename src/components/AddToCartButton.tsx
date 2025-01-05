'use client'

import { useState } from 'react'
import { useCart } from '@/components/context/CartContext'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

export default function AddToCartButton({ product }: { product: any }) {
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart()
    const { toast } = useToast()

    const handleAddToCart = () => {
        addToCart({ ...product, quantity })
        toast({
            title: "Added to cart",
            description: `${quantity} ${quantity > 1 ? 'items' : 'item'} of ${product.title} added to your cart.`,
        })
    }

    return (
        <div className="flex items-center space-x-2">
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-16 px-2 py-1 border rounded"
            />
            <Button onClick={handleAddToCart} className="flex-grow">Add to Cart</Button>
        </div>
    )
}

