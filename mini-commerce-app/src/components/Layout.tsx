"use client"

import Link from "next/link"
import { useCartStore } from "../lib/zustandStore"

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Header/Nav */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Mini-Commerce
          </Link>
          <nav className="space-x-4 text-sm sm:text-base font-medium">
            <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link href="/cart" className="relative hover:text-indigo-600 transition">
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/checkout" className="hover:text-indigo-600 transition">Checkout</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Mini-Commerce. All rights reserved.
      </footer>
    </div>
  )
}