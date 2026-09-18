import type { Metadata } from "next";
import NewsPageClient from "@/components/NewsPageClient";

export const metadata: Metadata = {
  title: "News & Stories | Agape Academy International",
  description:
    "Discover the latest academic, student life, faith, sports, arts, community and achievement stories from Agape Academy International.",
};

export default function NewsPage() {
  return <NewsPageClient />;
}