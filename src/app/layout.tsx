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
  title: "Shy UI",
  description: "Fast, Pretty And simple Tailwind UI ",
    openGraph: {
      title: "Shy UI",
      description: "Fast, Pretty And simple Tailwind UI ",
      url: "https://shy-ui.vercel.app",
      siteName: "Shy UI",
      images: [
        {
          url: "https://shy-ui.vercel.app/favicon.ico",
          width: 800,
          height: 600,
      }]
    }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
