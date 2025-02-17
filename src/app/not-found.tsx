import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
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

