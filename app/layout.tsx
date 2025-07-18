import type React from "react"
import type { Metadata } from "next"
import { Alexandria } from "next/font/google" // Import Alexandria correctly
import "./globals.css"

// Configure Alexandria font with specific weights
const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800"], // Specify valid weights
  display: "swap",
  variable: "--font-alexandria",
})

export const metadata: Metadata = {
  title: "Taraji Store - Boutique du Parc | Maintenance | متجر الترجي - صيانة",
  description:
    "La Boutique du Parc Taraji Store est temporairement fermée pour maintenance. Découvrez nos autres boutiques ouvertes à Tunis. | متجر الحديقة مغلق مؤقtaً للصيانة. اكتشف متاجرنا الأخرى المفتوحة في تونس.",
  keywords: "Moblaisir, Taraji, Espérance, Tunis, boutique, maintenance, sport, EST, متجر, الترجي, صيانة",
  authors: [{ name: "Taraji Store" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: "index, follow",
  themeColor: "#DC2626",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Taraji Store",
  },
  openGraph: {
    title: "Taraji Store - Boutique du Parc | Maintenance",
    description: "Boutique temporairement fermée. Trouvez nos autres points de vente ouverts !",
    type: "website",
    locale: "fr_TN",
    siteName: "Taraji Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taraji Store - Maintenance",
    description: "Boutique temporairement fermée. Autres boutiques ouvertes !",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={alexandria.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${alexandria.className} antialiased`}>{children}</body>
    </html>
  )
}
