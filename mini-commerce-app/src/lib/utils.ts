// lib/utils.ts or a data loader
import { readFile } from "fs/promises"
import path from "path"

export async function getProducts() {
  const filePath = path.join(process.cwd(), "public", "data", "products.json")
  const file = await readFile(filePath, "utf-8")
  return JSON.parse(file)
}

export async function getProduct(slug: string) {
  const products = await getProducts()
  return products.find((p: any) => p.slug === slug)
}