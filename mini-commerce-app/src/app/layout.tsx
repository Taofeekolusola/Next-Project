import "./globals.css"
import type { Metadata } from "next"
import { Providers } from "./providers"
import Layout from "../components/Layout"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Mini-Commerce",
  description: "A small e-commerce demo app.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 2000,
            }}
          />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}