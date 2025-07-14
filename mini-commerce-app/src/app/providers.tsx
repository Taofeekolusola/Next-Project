'use client'

import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem("products")
    if (!stored) {
      fetch("/data/products.json")
        .then(res => res.json())
        .then(data => localStorage.setItem("products", JSON.stringify(data)))
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}