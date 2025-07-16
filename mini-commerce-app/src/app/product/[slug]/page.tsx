// import { Metadata } from "next";
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import path from "path";
// import { readFile } from "fs/promises";

// // ✅ Product type
// type Product = {
//   id: string;
//   name: string;
//   slug: string;
//   price: number;
//   image: string;
//   description: string;
// };

// // ✅ Helper function to read all products
// async function getProducts(): Promise<Product[]> {
//   const filePath = path.join(process.cwd(), "public", "data", "products.json");
//   const file = await readFile(filePath, "utf-8");
//   return JSON.parse(file);
// }

// // ✅ Helper function to find one product
// async function getProduct(slug: string): Promise<Product | undefined> {
//   const products = await getProducts();
//   return products.find((p) => p.slug === slug);
// }

// // ✅ FIX: Required to prevent Turbopack error!
// export async function generateStaticParams() {
//   const products = await getProducts();
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }

// // ✅ FIXED generateMetadata
// export async function generateMetadata(
//   { params }: { params: { slug: string } }
// ): Promise<Metadata> {
//   const product = await getProduct(params.slug);
//   return {
//     title: product?.name || "Product Not Found",
//   };
// }

// // ✅ FIXED Page component
// export default async function Page(
//   { params }: { params: { slug: string } }
// ) {
//   const product = await getProduct(params.slug);
//   if (!product) return notFound();

//   return (
//     <main className="p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={500}
//         height={400}
//         className="w-full md:w-1/2 h-64 object-cover rounded"
//       />
//       <section className="flex-1">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
//         <p className="mt-4 text-sm text-gray-600">{product.description}</p>
//       </section>
//     </main>
//   );
// }

'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import ProductDetail from "@/components/ProductDetail"

type Product = {
  id: string
  slug: string
  name: string
  price: number
  image: string
  description: string
}

export default function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem("products")
    const products: Product[] = raw ? JSON.parse(raw) : []
    const found = products.find((p) => p.slug === slug)
    setProduct(found || null)
  }, [slug])

  if (!product) return <p>Product not found</p>

  return <ProductDetail product={product} />
}
