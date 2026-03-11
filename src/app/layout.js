import "./globals.css";
import "swiper/css";
import "../../public/css/animate.min.css";
import "../../public/css/fontawesome-all.min.css";
import "../../node_modules/react-modal-video/css/modal-video.css";
import "../../node_modules/react-18-image-lightbox/src/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.baecpasco.com"),
  title: {
    default: "Balagot & Emperado CPA's Co.",
    template: "%s | BAECPASCO",
  },
  description:
    "Balagot & Emperado CPA's Co. provides accounting, audit, tax, and financial advisory services in the Philippines.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} bg-white`}>
        {children}
      </body>
    </html>
  );
}
