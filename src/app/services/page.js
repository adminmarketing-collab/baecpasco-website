import ServicesPageClient from "@/components/ServicesPageClient";

export const metadata = {
  title: "Accounting Services in North Cotabato | BAECPASCO",
  description:
    "Comprehensive accounting services in North Cotabato including bookkeeping, payroll, tax compliance, audit, and business advisory support.",
  alternates: {
    canonical: "https://www.baecpasco.com/services",
  },
  openGraph: {
    title: "Accounting Services in North Cotabato | BAECPASCO",
    description:
      "Comprehensive accounting services in North Cotabato including bookkeeping, payroll, tax compliance, audit, and business advisory support.",
    url: "https://www.baecpasco.com/services",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPageClient />;
}
