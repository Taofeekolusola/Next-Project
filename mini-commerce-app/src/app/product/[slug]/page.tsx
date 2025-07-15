// src/app/product/[slug]/page.tsx

import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductDetail from "../../../components/ProductDetail"
import { readFile } from "fs/promises"
import path from "path"

type Product = {
  id: string
  slug: string
  name: string
  price: number
  image: string
  description: string
}

async function getProduct(slug: string): Promise<Product | undefined> {
  const filePath = path.join(process.cwd(), "public", "data", "products.json")
  const file = await readFile(filePath, "utf-8")
  const products: Product[] = JSON.parse(file)
  return products.find((p) => p.slug === slug)
}

// ✅ This generates dynamic metadata
export async function generateMetadata(
  props: { params: { slug: string } }
): Promise<Metadata> {
  const { params } = props
  const product = await getProduct(params.slug)
  if (!product) return {}

  return {
    title: `${product.name} – Mini-Commerce`,
    description: `Buy ${product.name} at the best price!`,
    openGraph: {
      title: product.name,
      images: [product.image],
    },
  }
}

// ✅ This is the main page component
export default async function ProductPage(
  props: { params: { slug: string } }
) {
  const { params } = props
  const product = await getProduct(params.slug)
  if (!product) return notFound()

  return <ProductDetail product={product} />
}