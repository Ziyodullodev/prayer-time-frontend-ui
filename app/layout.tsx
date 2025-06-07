import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "../lib/theme-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Namoz Vaqtlari",
  description: "Islomiy namoz vaqtlari ilovasi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="prayer-time-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
