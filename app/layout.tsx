import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sistema de Estacionamento Rotativo",
  description: "Sistema de gerenciamento de estacionamento rotativo",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-white text-black dark:bg-[#0f172a] dark:text-white" suppressHydrationWarning>
      <head>
        {/* Script para manter tema entre reloads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
        <style>{`
          body {
            background-color: white;
            color: black;
          }

          .dark body {
            background-color: #0d1524;
            color: white;
          }


          .dark .bg-\[\#0093FF\] {
            background-color: #0f172a !important;
          }
            
          /* Troca fundo da barra de "Dados de Hoje" no modo escuro */
          .dark [class*="from-\\[\\#33ACFF\\]"][class*="via-\\[\\#0093FF\\]"][class*="to-\\[\\#0070CC\\]"] {
            background: #0f172a !important;
          }

        `}</style>
      </head>

      <body className={`${inter.className} bg-light text-black dark:bg-[#0f172a] dark:text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
