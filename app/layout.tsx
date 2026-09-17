import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
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

const siteUrl = "https://agapeacademyinternational.edu.gh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Agape Academy International | Christian School in Ghana",
    template: "%s | Agape Academy International",
  },

  description:
    "Agape Academy International is a Christ-centered international school in Ghana providing academically rigorous education, Christian character development, and preparation for global opportunities.",

  keywords: [
    "Agape Academy International",
    "Agape Academy Ghana",
    "international school Ghana",
    "international school in Ghana",
    "Christian school Ghana",
    "Christian international school Ghana",
    "private school Ghana",
    "school in Accra",
    "school in Greater Accra",
    "American curriculum Ghana",
    "Abeka curriculum Ghana",
    "Christian education Ghana",
    "secondary school Ghana",
    "high school Ghana",
    "primary school Ghana",
    "kindergarten Ghana",
  ],

  authors: [
    {
      name: "Agape Academy International",
      url: siteUrl,
    },
  ],

  creator: "Agape Academy International",
  publisher: "Agape Academy International",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "Agape Academy International",
    title: "Agape Academy International | Christian School in Ghana",
    description:
      "Christ-centered education in Ghana combining academic excellence, Christian character, and global preparation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agape Academy International — Christian education in Ghana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agape Academy International | Christian School in Ghana",
    description:
      "Christ-centered education in Ghana combining academic excellence, Christian character, and global preparation.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable}`}
    >
      <body className="bg-[#FAF8F9] pb-16 font-sans text-[#19151C] antialiased lg:pb-0">
        <Preloader logoSrc="/school_logo.png" />
        <Navbar />
        {children}
        <Footer />
        <MobileApplyBar />
      </body>
    </html>
  );
}