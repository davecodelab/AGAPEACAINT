import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileApplyBar from "@/components/MobileApplyBar";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agape Academy International | Ghana",
  description:
    "Christ-centered education for a brighter future. Agape Academy International prepares students in Ghana for academic excellence, Christian character and global purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${manrope.variable}`}>
      <body className="bg-[#FAF8F9] pb-16 font-sans text-[#19151C] antialiased lg:pb-0">
        <Navbar />
        {children}
        <Footer />
        <MobileApplyBar />
      </body>
    </html>
  );
}
