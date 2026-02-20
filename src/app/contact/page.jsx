import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "Contact BAECPASCO | CPA Firm in North Cotabato",
  description:
    "Contact BAE CPAS CO for accounting, tax, payroll, and advisory services in North Cotabato. Reach out today to schedule a consultation.",
  alternates: {
    canonical: "https://www.baecpasco.com/contact",
  },
  openGraph: {
    title: "Contact BAECPASCO | CPA Firm in North Cotabato",
    description:
      "Contact BAECPASCO for accounting, tax, payroll, and advisory services in North Cotabato. Reach out today to schedule a consultation.",
    url: "https://www.baecpasco.com/contact",
    siteName: "BAECPASCO",
    type: "website",
  },
};


export default function Page() {
  return <ContactPageClient />;
}
