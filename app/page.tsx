import Dashboard from "@/components/dashboard"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
    </main>
  )
}

