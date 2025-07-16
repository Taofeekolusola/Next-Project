'use client'

import { useSearchParams } from "next/navigation"

export default function SuccessClient() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-green-600">🎉 Order Successful!</h1>
      <p className="text-gray-700 mt-2">Your order ID is:</p>
      <code className="bg-gray-100 p-2 rounded inline-block mt-2">{orderId}</code>
    </div>
  )
}
