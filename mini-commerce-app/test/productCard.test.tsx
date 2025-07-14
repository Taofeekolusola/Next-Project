import { render, screen } from "@testing-library/react"
import ProductCard from "@/components/ProductCard"

test("renders product name and price", () => {
  render(
    <ProductCard
      product={{
        id: "1",
        name: "Red Shirt",
        price: 25.99,
        image: "/images/red-shirt.jpg",
        slug: "red-shirt"
      }}
    />
  )
  expect(screen.getByText(/Red Shirt/i)).toBeInTheDocument()
  expect(screen.getByText(/\$25\.99/)).toBeInTheDocument()
})