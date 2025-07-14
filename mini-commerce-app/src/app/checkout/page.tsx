"use client"
import { useCartStore } from "@/lib/zustandStore"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

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
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="text-right font-bold mt-4">
        Total: ${total().toFixed(2)}
      </div>
      <button
        onClick={placeOrder}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Place Order
      </button>
    </main>
  )
}