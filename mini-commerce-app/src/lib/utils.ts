// src/lib/utils.ts
import { readFile } from "fs/promises"
import path from "path"

type Product = {
  id: string
  name: string
  slug: string
  price: number
  image: string
  description: string
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "public", "data", "products.json")
  const file = await readFile(filePath, "utf-8")
  return JSON.parse(file)
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts()
  return products.find((p: Product) => p.slug === slug)
}
