import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dryfto - Where Stories Begin to Drift",
  description: "Discover the extraordinary in the ordinary. Uncover paths less traveled, moments less captured. Join our exclusive waitlist for early access to curated travel experiences.",
  keywords: ["travel", "hidden gems", "authentic experiences", "curated journeys", "travel stories"],
  authors: [{ name: "Dryfto" }],
  creator: "Dryfto",
  publisher: "Dryfto",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dryfto - Where Stories Begin to Drift",
    description: "Discover the extraordinary in the ordinary. Uncover paths less traveled, moments less captured.",
    siteName: "Dryfto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dryfto - Where Stories Begin to Drift",
    description: "Discover the extraordinary in the ordinary. Uncover paths less traveled, moments less captured.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#374151" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
