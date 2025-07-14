import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Mini-Commerce
      </Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>
    </header>
  )
}