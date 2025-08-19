import Link from 'next/link'

export default function Page() {
    return (
        <main>   
            <h1>Hello Commercial</h1>
            <Link href="/.." className="text-blue-600 underline">
                Return Home
            </Link>
        </main>
    )
}