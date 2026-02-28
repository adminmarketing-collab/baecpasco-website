import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Accounting Services in North Cotabato",
  description:
    "Professional accounting services in North Cotabato offering bookkeeping, payroll, tax compliance, and business advisory for local businesses.",
  alternates: {
    canonical: "https://www.baecpasco.com/",
  },
  openGraph: {
    title: "Accounting Services in North Cotabato",
    description:
      "Professional accounting services in North Cotabato offering bookkeeping, payroll, tax compliance, and business advisory for local businesses.",
    url: "https://www.baecpasco.com/",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <HomePageClient />;
}