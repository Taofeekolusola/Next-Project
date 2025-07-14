'use client'

import { useCartStore } from "@/lib/zustandStore"
import Image from "next/image"

type CartItemType = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartItem({ item }: { item: CartItemType }) {
  const updateQty = useCartStore((s) => s.updateQty)
  const removeItem = useCartStore((s) => s.removeItem)

  const increase = () => updateQty(item.id, item.quantity + 1)
  const decrease = () => {
    if (item.quantity > 1) {
      updateQty(item.id, item.quantity - 1)
    }
  }

  return (
    <article className="flex items-center gap-4 border-b pb-4">
      <Image
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded"
        />
      <div className="flex-1">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={decrease}
            className="bg-gray-200 px-2 py-1 rounded focus:outline-none focus:ring"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            onClick={increase}
            className="bg-gray-200 px-2 py-1 rounded focus:outline-none focus:ring"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 hover:underline focus:outline-none focus:ring"
        aria-label={`Remove ${item.name}`}
      >
        Remove
      </button>
    </article>
  )
}