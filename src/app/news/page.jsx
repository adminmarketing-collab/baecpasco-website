import NewsPageClient from "@/components/NewsPageClient";

export const metadata = {
  title: "Accounting News and Updates | BAECPASCO",
  description:
    "Stay updated with accounting news, tax updates, and compliance advisories relevant to businesses in North Cotabato and nearby areas.",
  alternates: {
    canonical: "https://www.baecpasco.com/news",
  },
  openGraph: {
    title: "Accounting News and Updates | BAECPASCO",
    description:
      "Stay updated with accounting news, tax updates, and compliance advisories relevant to businesses in North Cotabato and nearby areas.",
    url: "https://www.baecpasco.com/news",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <NewsPageClient />;
}