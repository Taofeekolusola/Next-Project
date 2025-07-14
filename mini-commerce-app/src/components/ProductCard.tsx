"use client"

import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/lib/zustandStore"
import toast from "react-hot-toast"

type Product = {
  id: string
  name: string
  slug: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 })
    toast.success(`Added ${product.name} to cart`)
  }

  return (
    <div className="group border rounded-2xl shadow hover:shadow-xl transition overflow-hidden bg-white w-full max-w-md mx-auto">
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full h-56 sm:h-64 md:h-72">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{product.name}</h3>
        
        <p className="text-base sm:text-lg text-gray-600 font-medium transition-colors group-hover:text-indigo-600">
          ${product.price.toFixed(2)}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg text-base hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}