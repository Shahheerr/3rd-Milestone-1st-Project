import AboutImage from "@/assets/product-ideas-to-sell.webp"

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About LuxeMarket</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <img src={AboutImage.src} width="400" height="300" className="rounded-lg shadow-lg" />

                <div>
                    <p className="text-gray-600 mb-4">
                        LuxeMarket is your premier destination for high-quality products and exceptional service. Founded in 2023, we've quickly become a leader in the e-commerce space, offering a curated selection of premium items across various categories.
                    </p>
                    <p className="text-gray-600">
                        Our mission is to provide our customers with an unparalleled shopping experience, combining top-notch products with outstanding customer service. We believe that luxury should be accessible to all, and we strive to offer competitive prices without compromising on quality.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 mb-8">
                <li>Quality: We source only the best products from trusted suppliers.</li>
                <li>Customer Satisfaction: Your happiness is our top priority.</li>
                <li>Integrity: We believe in transparent and honest business practices.</li>
                <li>Innovation: We're always looking for ways to improve and evolve.</li>
            </ul>
            <p className="text-gray-600">
                Thank you for choosing LuxeMarket. We look forward to serving you and exceeding your expectations.
            </p>
        </div>
    )
}

