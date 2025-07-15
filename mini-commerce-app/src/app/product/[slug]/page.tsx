import { Metadata } from "next"
import { getProduct } from "@/lib/utils"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product?.name || "Product Not Found",
  }
}

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="p-4 max-w-3xl mx-auto flex flex-col md:flex-row gap-6">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={400}
        className="w-full md:w-1/2 h-64 object-cover rounded"
      />
      <section className="flex-1">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
        <p className="mt-4 text-sm text-gray-600">{product.description}</p>
      </section>
    </main>
  )
}