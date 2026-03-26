import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata = {
  title: "Accounting Services in Mindanao",
  description:
    "Professional accounting services in Mindanao offering bookkeeping, payroll, tax compliance, and business advisory for local businesses.",
  alternates: {
    canonical: "https://www.baecpasco.com/services",
  },
  openGraph: {
    title: "Accounting Services in Mindanao",
    description:
      "Professional accounting services in Mindanao offering bookkeeping, payroll, tax compliance, and business advisory for local businesses.",
    url: "https://www.baecpasco.com/services",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPageClient />;
}
