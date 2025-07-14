'use client'

import { useCartStore } from "@/lib/zustandStore"
 import Image from "next/image"
type Product = {
  id: string
  slug: string
  name: string
  price: number
  image: string
  description: string
}

export default function ProductDetail({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 })
  }

  return (
    <main className="p-4 max-w-3xl mx-auto flex flex-col md:flex-row gap-6">  

        <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={400}
        className="w-full md:w-1/2 h-64 object-cover rounded"
        />
      <section className="flex-1">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
        <p className="mt-4 text-sm text-gray-600">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add to Cart
        </button>
      </section>
    </main>
  )
}