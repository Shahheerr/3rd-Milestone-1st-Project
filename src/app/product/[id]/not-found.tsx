import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">We couldn't find the product you're looking for.</p>
            <div className="flex space-x-4">
                <Button asChild>
                    <Link href="/">
                        Go Home
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/products">
                        Browse Products
                    </Link>
                </Button>
            </div>
        </div>
    )
}

