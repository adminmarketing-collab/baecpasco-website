import AboutPageClient from "@/components/AboutPageClient";

export const metadata = {
  title: "About BAECPASCO | Trusted CPA Firm in North Cotabato",
  description:
    "Learn about BAECPASCO, a CPA firm in North Cotabato providing reliable accounting, tax, payroll, and advisory services to local businesses.",
  alternates: {
    canonical: "https://www.baecpasco.com/about",
  },
  openGraph: {
    title: "About BAECPASCO | Trusted CPA Firm in North Cotabato",
    description:
      "Learn about BAECPASCO, a CPA firm in North Cotabato providing reliable accounting, tax, payroll, and advisory services to local businesses.",
    url: "https://www.baecpasco.com/about",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <AboutPageClient />;
}
