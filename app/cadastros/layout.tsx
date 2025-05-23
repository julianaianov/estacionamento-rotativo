import { ReactNode } from "react"

export default function CadastrosLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto py-6">
        {children}
      </div>
    </div>
  )
} 