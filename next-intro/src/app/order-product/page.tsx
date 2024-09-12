"use client"

import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placed order")
        router.push("/")
    }
    return (
        <>
            <div>Order products</div>
            <button onClick={() => handleClick()}>Place order</button>
        </>
    )
}
