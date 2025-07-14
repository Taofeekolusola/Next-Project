'use client'

import { useProducts } from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"

export default function HomePage() {
  const { products, isLoading } = useProducts()

  if (isLoading) return <p className="p-4">Loading products...</p>
  if (!products || products.length === 0) return <p className="p-4">Error loading products.</p>

  return (
    <main className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  )
}