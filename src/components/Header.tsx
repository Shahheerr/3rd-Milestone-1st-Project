'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/context/CartContext'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { cart } = useCart()

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                    LuxeMarket
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
                            <li><Link href="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="relative">
                        <Input type="search" placeholder="Search products..." className="pl-10" />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <ShoppingCart size={20} />
                                {cart.length > 0 && (
                                    <span className="absolute mb-9 ml-9 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {cart.length}
                                    </span>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <CartContent />
                        </SheetContent>
                    </Sheet>
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4">
                    <nav className="container mx-auto px-4">
                        <ul className="space-y-2">
                            <li><Link href="/" className="block text-gray-600 hover:text-primary">Home</Link></li>
                            <li><Link href="/products" className="block text-gray-600 hover:text-primary">Products</Link></li>
                            <li><Link href="/about" className="block text-gray-600 hover:text-primary">About</Link></li>
                            <li><Link href="/contact" className="block text-gray-600 hover:text-primary">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="mt-4 container mx-auto px-4">
                        <Input type="search" placeholder="Search products..." className="w-full" />
                    </div>
                </div>
            )}
        </header>
    )
}

function CartContent() {
    const { cart, removeFromCart } = useCart()

    return (
        <div className="py-4">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                            <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                        </div>
                    ))}
                    <div className="mt-4 pt-4 border-t">
                        <p className="font-semibold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                        <Button className="w-full mt-4">Checkout</Button>
                    </div>
                </div>
            )}
        </div>
    )
}

