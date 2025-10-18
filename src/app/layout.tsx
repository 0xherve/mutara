import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mutara Grocery - Fresh Delivery",
  description: "Browse fresh groceries and order for home delivery.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/Mutara.ico",
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
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <footer className="w-full border-t flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mutara Grocery. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
