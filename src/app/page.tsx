import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import BannerImage from '@/assets/photography-product-download.jpg';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=4', { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const { products } = await getProducts();

  return (
    <div>
      <section className="bg-gray-100 py-12 mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to LuxeMarket</h1>
              <p className="text-xl text-gray-600 mb-6">Discover our curated collection of premium products.</p>
              <Button asChild size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src={BannerImage.src} /* Use .src to get the URL */
                alt="Hero Image"
                width="600"
                height="400"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
