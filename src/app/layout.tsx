import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigationbar";
import { FooterVariantProvider } from "@/context/FooterContext";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
//import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // optional CSS variable
  weight: ["400", "500", "600", "700"], // pick the weights you need
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anyspacemedia.com"),
  title: "Any Space Media | Professional Photography & Drone Services",
  description:
    "High-quality photo and drone media for architecture, design, automotive, commercial spaces, real estate, RVs, and marine. Modern, luxurious visuals tailored to every space.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Any Space Media | Professional Photography & Drone Services",
    description:
      "High-quality photo and drone media for architecture, design, automotive, commercial spaces, real estate, RVs, and marine. Modern, luxurious visuals tailored to every space.",
    url: "https://strategicfinds.com/",
    siteName: "Any Space Media",
    type: "website",
    images: [
      {
        url: "/bkg.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Any Space Media | Professional Photography & Drone Services",
    description:
      "High-quality photo and drone media for architecture, design, automotive, commercial spaces, real estate, RVs, and marine. Modern, luxurious visuals tailored to every space.",
    images: ["/bkg.jpg"],
  },
  authors: [{ name: "Any Space Media Team", url: "https://anyspacemedia.com" }],
  keywords: [
    "architecture photography",
    "design photography",
    "automotive photography",
    "commercial photography",
    "real estate photography",
    "RV photography",
    "marine photography",
    "drone photography",
    "luxury photography",
    "Any Space Media",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`bg-black ${manrope.className} antialiased`}>
        <Navbar />
        <FooterVariantProvider>
          {children}
          <Footer />
        </FooterVariantProvider>
        <Analytics />
        {/*<SpeedInsights />*/}
      </body>
    </html>
  );
}
