import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-600">LuxeMarket is your premier destination for high-quality products and exceptional service.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-600 hover:text-primary">Home</Link></li>
                            <li><Link href="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-gray-600 hover:text-primary">Shipping</Link></li>
                            <li><Link href="/returns" className="text-gray-600 hover:text-primary">Returns</Link></li>
                            <li><Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-600 mb-2">Stay updated with our latest offers</p>
                        <form className="flex">
                            <input type="email" placeholder="Your email" className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-gray-600">&copy; 2023 LuxeMarket. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

