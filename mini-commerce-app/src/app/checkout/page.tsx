"use client"

import { useCartStore } from "@/lib/zustandStore"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { FaShoppingCart } from "react-icons/fa"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore()
  const router = useRouter()

  const placeOrder = () => {
    if (items.length === 0) {
      toast.error("Cart is empty")
      return
    }

    const orderId = Date.now().toString()
    clearCart()
    toast.success("Order placed successfully!")
    router.push(`/success?orderId=${orderId}`)
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Checkout
        </h1>

        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <FaShoppingCart className="text-5xl mx-auto mb-4 text-gray-300" />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 divide-y divide-gray-200">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center pt-2"
                >
                  <div>
                    <p className="text-gray-800 font-medium">
                      {item.name} <span className="text-sm text-gray-500">x {item.quantity}</span>
                    </p>
                  </div>
                  <p className="text-gray-700 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold text-gray-800">
              <span>Total</span>
              <span>${total().toFixed(2)}</span>
            </div>

            <button
              onClick={placeOrder}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition text-lg font-medium"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </main>
  )
}