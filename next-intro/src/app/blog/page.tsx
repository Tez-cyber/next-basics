import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  }
}
// === Blog route
export default function Blog() {
  return (
    <>
      <div>Blog</div>
      <Link href="/">Home</Link>
    </>
  )
}
