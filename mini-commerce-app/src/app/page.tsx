"use client"

import ProductCard from "@/components/ProductCard"
import { useProducts } from "@/hooks/useProducts"

export default function HomePage() {
  const { products, isLoading } = useProducts()

  if (isLoading) return <p className="text-center py-10">Loading products...</p>

  return (
    <main className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700">Featured Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}