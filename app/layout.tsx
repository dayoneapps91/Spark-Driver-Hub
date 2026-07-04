import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkdriverhub.com"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  title: {
    default: "Spark Driver Hub | Mileage, Taxes, Updates & Tools",
    template: "%s | Spark Driver Hub",
  },
  description:
    "Spark Driver Hub helps Walmart Spark drivers with mileage tracking, tax records, expenses, earnings, updates, and driver guides. Powered by GigMiles.",
  keywords: [
    "Spark Driver Hub",
    "Walmart Spark drivers",
    "Spark mileage tracker",
    "Spark driver taxes",
    "Spark driver expenses",
    "Spark driver earnings",
    "GigMiles",
    "gig driver mileage tracker",
  ],
  openGraph: {
    title: "Spark Driver Hub | Mileage, Taxes, Updates & Tools",
    description:
      "Guides, tax tips, mileage tracking resources, updates, and tools for Walmart Spark drivers. Powered by GigMiles.",
    url: "https://sparkdriverhub.com",
    siteName: "Spark Driver Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Driver Hub | Mileage, Taxes, Updates & Tools",
    description:
      "Mileage tracking, taxes, expenses, earnings tools, and updates for Walmart Spark drivers.",
  },
  alternates: {
    canonical: "https://sparkdriverhub.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4736976027179082"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>

      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CN2RDZCXD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CN2RDZCXD');
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
