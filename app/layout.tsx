import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindBloom - Your AI-Powered Mental Wellness Companion",
  description: "Discover personalized insights, connect with licensed professionals, and build lasting wellness habits with our comprehensive mental health platform.",
  keywords: ["mental health", "wellness", "therapy", "AI", "mindfulness", "self-care"],
  authors: [{ name: "MindBloom Team" }],
  openGraph: {
    title: "MindBloom - Your AI-Powered Mental Wellness Companion",
    description: "Discover personalized insights, connect with licensed professionals, and build lasting wellness habits with our comprehensive mental health platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindBloom - Your AI-Powered Mental Wellness Companion",
    description: "Discover personalized insights, connect with licensed professionals, and build lasting wellness habits with our comprehensive mental health platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
