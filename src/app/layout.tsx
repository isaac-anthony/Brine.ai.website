import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brine.ai | The Autonomous Sales Engine",
  description: "AI Automation Agency for Small Business. We build recursive learning engines that scale your pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#fbfbfd] min-h-screen relative text-[#1d1d1f]`}>
        <SmoothScroll />
        {/* Grain Overlay */}
        <div className="fixed inset-0 grain z-50 pointer-events-none" />
        {children}
      </body>
    </html>
  );
}

