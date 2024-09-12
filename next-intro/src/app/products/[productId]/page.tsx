import { Metadata } from "next"

type Props = {
  params: {
    productId: string
  }
}
export const generateMetadata = async (
  { params }: Props
): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}


// === Dynamic routes

export default function ProductDetails({ params }: Props) {
  return (
    <div>Details about product {params.productId}</div>
  )
}
