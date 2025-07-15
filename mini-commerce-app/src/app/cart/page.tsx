"use client"
import { useCartStore } from "../../lib/zustandStore"
import { toast } from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCartStore()

  const handleRemove = (id: string) => {
    removeItem(id)
    toast.success("Item removed from cart")
  }

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 items-center bg-white shadow-md p-4 rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1 w-full">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQty(item.id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right text-lg font-bold">
            Total: ${total().toFixed(2)}
          </div>

          <Link
            href="/checkout"
            className="block text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </main>
  )
}