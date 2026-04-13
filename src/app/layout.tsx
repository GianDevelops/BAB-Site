import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildablocktherapy.com"),
  title: {
    default: "ABA Therapy in Kendall & Miami, FL | Build-A-Block Therapy",
    template: "%s | Build-A-Block Therapy",
  },
  description:
    "Build-A-Block Therapy provides ABA therapy for children with autism in Kendall, Miami, and Miami-Dade County. In-home therapy, social skills groups, parent training & more. Call (305) 741-2218.",
  keywords: [
    "ABA therapy Miami",
    "ABA therapy Kendall",
    "ABA near me",
    "ABA South Miami",
    "ABA Miami-Dade",
    "autism therapy Miami",
    "behavioral therapy children Miami",
    "BCBA Miami",
    "applied behavior analysis Miami",
    "autism treatment South Florida",
    "pediatric ABA therapy",
    "early intervention autism Miami",
    "in-home ABA therapy Miami",
    "bilingual ABA therapy Miami",
    "ABA therapy Coral Gables",
    "ABA therapy Doral",
    "ABA therapy Homestead",
    "ABA therapy for toddlers Miami",
    "social skills therapy Miami",
    "parent training ABA Miami",
    "behavior analyst Miami",
    "autism services Miami-Dade",
  ],
  openGraph: {
    title: "ABA Therapy in Kendall & Miami, FL | Build-A-Block Therapy",
    description:
      "Where every child's potential is nurtured. Compassionate, individualized ABA therapy for children with autism in Kendall, Miami, and Miami-Dade County.",
    url: "https://buildablocktherapy.com",
    siteName: "Build-A-Block Children Therapy Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://buildablocktherapy.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Build-A-Block Therapy - ABA Therapy in Kendall & Miami, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABA Therapy in Kendall & Miami, FL | Build-A-Block Therapy",
    description:
      "ABA therapy for children with autism in Kendall & Miami. In-home therapy, social skills, parent training & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://buildablocktherapy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics 4 + Google Ads tag */}
        <link rel="alternate" hrefLang="en" href="https://buildablocktherapy.com" />
        <link rel="alternate" hrefLang="es" href="https://buildablocktherapy.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://buildablocktherapy.com" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness"],
              name: "Build-A-Block Children Therapy Solutions Inc",
              alternateName: "BAB Therapy",
              description:
                "Build-A-Block Therapy provides Applied Behavior Analysis (ABA) therapy for children with autism spectrum disorder in Kendall, Miami, and Miami-Dade County, Florida. Our board-certified behavior analysts (BCBAs) deliver individualized, evidence-based treatment in home, school, and community settings. We accept most major insurance plans and provide bilingual services in English and Spanish.",
              url: "https://buildablocktherapy.com",
              telephone: "+1-305-741-2218",
              email: "info@buildablocktherapy.com",
              logo: "https://buildablocktherapy.com/logo.svg",
              image: "https://buildablocktherapy.com/logo.svg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7990 SW 117th Ave, Suite 134",
                addressLocality: "Kendall",
                addressRegion: "FL",
                postalCode: "33183",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
                { "@type": "City", name: "Kendall, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "South Miami, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Coral Gables, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Doral, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Homestead, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Miami Beach, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Hialeah, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Cutler Bay, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Pinecrest, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
                { "@type": "City", name: "Miami Lakes, FL", containedInPlace: { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" } },
              ],
              serviceArea: [
                { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
                { "@type": "City", name: "Kendall, FL" },
                { "@type": "City", name: "South Miami, FL" },
                { "@type": "City", name: "Coral Gables, FL" },
                { "@type": "City", name: "Doral, FL" },
                { "@type": "City", name: "Homestead, FL" },
                { "@type": "City", name: "Miami Beach, FL" },
                { "@type": "City", name: "Hialeah, FL" },
                { "@type": "City", name: "Cutler Bay, FL" },
                { "@type": "City", name: "Pinecrest, FL" },
                { "@type": "City", name: "Miami Lakes, FL" },
              ],
              geo: { "@type": "GeoCoordinates", latitude: 25.6866, longitude: -80.3736 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              priceRange: "Varies by insurance",
              currenciesAccepted: "USD",
              medicalSpecialty: "Applied Behavior Analysis",
              availableService: [
                { "@type": "MedicalTherapy", name: "In-Home ABA Therapy" },
                { "@type": "MedicalTherapy", name: "Social Skills Groups" },
                { "@type": "MedicalTherapy", name: "Parent Training" },
                { "@type": "MedicalTherapy", name: "School Consultation" },
                { "@type": "MedicalTherapy", name: "ABA Tutoring" },
                { "@type": "MedicalTherapy", name: "Telehealth ABA Therapy" },
              ],
              paymentAccepted: "Insurance, Credit Card",
              insuranceAccepted: [
                "Cigna",
                "Aetna",
                "Florida Blue",
                "Anthem Blue Cross Blue Shield",
                "AvMed",
                "Oscar Health",
                "Humana",
                "United Healthcare",
                "Florida VPK",
                "Step Up for Students",
              ],
              sameAs: [
                "https://facebook.com/buildablocktherapy/",
                "https://instagram.com/buildablocktherapy/",
                "https://linkedin.com/company/build-a-block-children-therapy-solutions-inc/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LayoutShell>{children}</LayoutShell>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E4R081ZJ5V"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E4R081ZJ5V');
          gtag('config', 'AW-18074058844');
        `}
      </Script>
    </html>
  );
}
