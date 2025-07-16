"use client"

import { useCartStore } from "../lib/zustandStore"
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
    <main className="p-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-2xl border border-gray-100">
      <div className="w-full md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={450}
          className="w-full h-[400px] object-cover rounded-xl shadow-sm"
        />
      </div>

      <section className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-base text-gray-700 leading-relaxed tracking-wide">
            {product.description}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 w-fit bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add to Cart
        </button>
      </section>
    </main>
  )
}