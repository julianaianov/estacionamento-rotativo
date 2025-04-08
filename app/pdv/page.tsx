"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

export default function PDVPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-6">
        <ShoppingCart className="h-6 w-6 mr-2" />
        <h1 className="text-2xl font-bold">PDV</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600">
            Selecione uma opção no menu para começar.
          </p>
        </CardContent>
      </Card>

      {/* Gradient line */}
      <div className="mt-4 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
    </div>
  )
}

