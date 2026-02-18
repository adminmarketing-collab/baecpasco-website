import ArticlesPageClient from "@/components/ArticlesPageClient";

export const metadata = {
  title: "Accounting Articles and Insights | BAE CPAS CO",
  description:
    "Read accounting articles, tax guides, and business insights written by CPAs to help North Cotabato businesses stay compliant and informed.",
  alternates: {
    canonical: "https://www.baecpasco.com/articles",
  },
  openGraph: {
    title: "Accounting Articles and Insights | BAE CPAS CO",
    description:
      "Read accounting articles, tax guides, and business insights written by CPAs to help North Cotabato businesses stay compliant and informed.",
    url: "https://www.baecpasco.com/articles",
    siteName: "BAE CPAS CO",
    type: "website",
  },
};

export default function Page() {
  return <ArticlesPageClient />;
}
