import { Suspense } from "react"
import SuccessClient from "./SuccessClient"

export default function Page() {
  return (
    <main className="p-4">
      <Suspense fallback={<p>Loading...</p>}>
        <SuccessClient />
      </Suspense>
    </main>
  )
}