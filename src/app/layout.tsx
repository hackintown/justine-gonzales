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
        <meta name="google-site-verification" content="N7UFS0ZOBiVXK0Zv_DA5ccdhZpzyKvPzhEb8WIi9a-w" />
        <Script id="structured-data" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Ayala Land Premier Luxury Homes",
            "url": "https://www.ayalalandpremierluxuryhomesph.com",
            "logo": "https://www.ayalalandpremierluxuryhomesph.com/logo.png",
            "image": "https://www.ayalalandpremierluxuryhomesph.com/main-image.jpg",
            "description": "Ayala Land Premier offers luxury homes and exclusive properties in prime locations across the Philippines.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ayala Land Offices, Makati City",
              "addressLocality": "Makati",
              "addressRegion": "Metro Manila",
              "postalCode": "1200",
              "addressCountry": "PH"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+63-123-456-7890",
              "contactType": "Customer Service",
              "areaServed": "PH",
              "availableLanguage": "English"
            },
            "priceRange": "$$$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Available Properties",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "House",
                    "name": "Luxury Home in Makati",
                    "description": "A beautiful luxury home located in the heart of Makati.",
                    "url": "https://www.ayalalandpremierluxuryhomesph.com/makati-luxury-home",
                    "image": "https://www.ayalalandpremierluxuryhomesph.com/images/makati-luxury-home.jpg",
                    "numberOfRooms": 5,
                    "floorSize": "500 sqm",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "123 Makati Avenue",
                      "addressLocality": "Makati",
                      "addressRegion": "Metro Manila",
                      "postalCode": "1200",
                      "addressCountry": "PH"
                    },
                    "price": {
                      "@type": "PriceSpecification",
                      "priceCurrency": "PHP",
                      "price": "100000000"
                    }
                  }
                }
              ]
            }
          }
          `}
        </Script>

        <link rel="canonical" href="https://www.ayalalandpremierluxuryhomesph.com/" />
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
