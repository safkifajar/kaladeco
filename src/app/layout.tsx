import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kaladeco.id - Jasa Dekorasi Lamaran, Prewedding & Maternity Purwokerto",
    template: "%s | Kaladeco.id",
  },
  description:
    "Kaladeco.id — mendekor dengan hati, semoga sampai ke hati. Jasa dekorasi profesional untuk lamaran, prewedding, tasyakuran, maternity shoot, dan acara spesial lainnya di Purwokerto dan sekitarnya.",
  keywords: [
    "jasa dekorasi Purwokerto",
    "dekorasi lamaran Purwokerto",
    "dekorasi prewedding Purwokerto",
    "dekorasi tasyakuran",
    "maternity shoot Purwokerto",
    "dekorator interior Purwokerto",
    "kaladeco",
    "kaladeco.id",
    "dekorasi acara Banyumas",
    "dekorasi murah Purwokerto",
    "dekorasi elegan",
  ],
  authors: [{ name: "Kaladeco.id" }],
  openGraph: {
    title: "Kaladeco.id - Jasa Dekorasi Profesional Purwokerto",
    description:
      "Mendekor dengan hati, semoga sampai ke hati. Jasa dekorasi lamaran, prewedding, tasyakuran, dan maternity shoot di Purwokerto.",
    url: "https://kaladeco.vercel.app",
    siteName: "Kaladeco.id",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Qbt4Rx12Md47Ylhy3JjkBJ8C0GMeShnNojlaT87XjZ4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kaladeco.id",
              description:
                "Mendekor dengan hati, semoga sampai ke hati. Penyedia jasa dekorasi lamaran, prewedding, tasyakuran, dan maternity shoot untuk wilayah Purwokerto dan sekitarnya.",
              url: "https://kaladeco.vercel.app",
              telephone: "+6285283910033",
              email: "kaladeco.id@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Purwokerto",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },
              foundingDate: "2025-08-27",
              priceRange: "Rp 470.000 - Rp 850.000+",
              sameAs: ["https://instagram.com/kaladeco.id"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
