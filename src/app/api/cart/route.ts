import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    // In a real application, you would add the item to the user's cart in a database
    console.log('Adding product to cart:', body.productId)

    return NextResponse.json({ success: true })
}

