'use client'

import { useSearchParams } from "next/navigation"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-green-600">🎉 Order Successful!</h1>
      <p>Your order ID is:</p>
      <code className="bg-gray-100 p-2 rounded">{orderId}</code>
    </div>
  )
}