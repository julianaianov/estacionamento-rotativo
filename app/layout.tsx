import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sistema de Estacionamento Rotativo",
  description: "Sistema de gerenciamento de estacionamento rotativo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  )
}



import './globals.css'