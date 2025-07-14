"use client"

import Link from "next/link"
import { useCartStore } from "../lib/zustandStore"

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header/Nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Mini-Commerce
          </Link>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/cart" className="hover:text-indigo-600 transition">
              Cart <span className="ml-1 text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">{cartCount}</span>
            </Link>
            <Link href="/checkout" className="hover:text-indigo-600 transition">Checkout</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mini-Commerce. All rights reserved.
      </footer>
    </div>
  )
}