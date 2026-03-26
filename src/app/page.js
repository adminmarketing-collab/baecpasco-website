import HomePageClient from "@/components/HomePageClient";

export const metadata = {
  title: "Accounting Services in North Cotabato",
  description:
    "We provide comprehensive accounting services throughout Mindanao, serving businesses in Kidapawan City, Midsayap, Koronadal City, Bukidnon, Davao, and Samal with solutions designed for sustainable growth and operational stability.",
  alternates: {
    canonical: "https://www.baecpasco.com/",
  },
  openGraph: {
    title: "Accounting Services in North Cotabato",
    description:
      "We provide comprehensive accounting services throughout Mindanao, serving businesses in Kidapawan City, Midsayap, Koronadal City, Bukidnon, Davao, and Samal with solutions designed for sustainable growth and operational stability.",
    url: "https://www.baecpasco.com/",
    siteName: "BAECPASCO",
    type: "website",
  },
};

export default function Page() {
  return <HomePageClient />;
}
