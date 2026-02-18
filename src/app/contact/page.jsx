import ContactPageClient from "@/components/ContactPageClient";

export const metadata = {
  title: "Contact BAE CPAS CO | CPA Firm in North Cotabato",
  description:
    "Contact BAE CPAS CO for accounting, tax, payroll, and advisory services in North Cotabato. Reach out today to schedule a consultation.",
  alternates: {
    canonical: "https://www.baecpasco.com/contact",
  },
  openGraph: {
    title: "Contact BAE CPAS CO | CPA Firm in North Cotabato",
    description:
      "Contact BAE CPAS CO for accounting, tax, payroll, and advisory services in North Cotabato. Reach out today to schedule a consultation.",
    url: "https://www.baecpasco.com/contact",
    siteName: "BAE CPAS CO",
    type: "website",
  },
};


export default function Page() {
  return <ContactPageClient />;
}
