"use client"
import { notFound } from "next/navigation"
// ==== Nested Dynamic routes
type Reviews = {
    productId: string,
    reviewId: string
}

const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count)
}
export default function ReviewDetail({ params }: {
    params: Reviews
}) {
    // const random = getRandomInt(2)
    // if (random === 1) {
    //     throw new Error("Error loading review")
    // }
    if(parseInt(params.reviewId) > 1000) {
        notFound()
    }
  return (
    <div>
        Review {params.reviewId} for product {params.productId}
    </div>
  )
}
