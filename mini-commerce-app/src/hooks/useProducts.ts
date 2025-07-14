import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  description: string
  image: string
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () =>
      new Promise<Product[]>((resolve) => {
        const raw = localStorage.getItem("products")
        const parsed = raw ? (JSON.parse(raw) as Product[]) : []
        resolve(parsed)
      }),
  })

  useEffect(() => {
    if (data) setProducts(data)
  }, [data])

  return { products, isLoading }
}