import Link from 'next/link'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bkg1.jpg')` }}>
      <div className="absolute inset-0 bg-black/50" /> {/* optional dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hello Real Estate</h1>
        <Link href="/.." className="text-lg underline hover:text-gray-300">
          Return Home
        </Link>
      </div>
    </main>
  )
}
