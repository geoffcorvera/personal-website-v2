import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Geoff Corvera - QA Engineer",
  description: "Geoffrey Corvera's personal website",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-32">
      <body className={inter.className + " bg-soil text-white scroll-smooth"}>
        {children}
      </body>
    </html>
  );
}
