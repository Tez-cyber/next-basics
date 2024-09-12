"use client"

type Error = {
    error: Error;
    reset: () => void;
}
export default function ErrorBoundary({ error, reset }: Error) {
    console.log(error)
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}
