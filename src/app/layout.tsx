import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TidioChat from "@/components/ui/TidioChat";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Homes for Sale Philippines | Ayala Land Premier",
  description:
    "Ayala Land Premier offers the most prestigious residential lots and luxury homes in prime locations across the Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <TidioChat />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KMMCBDB361"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMMCBDB361');
          `}
        </Script>
      </body>
    </html>
  );
}
