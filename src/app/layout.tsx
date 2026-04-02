import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildablocktherapy.com"),
  title: {
    default: "Build-A-Block Children Therapy Solutions | ABA Therapy Miami",
    template: "%s | Build-A-Block Therapy",
  },
  description:
    "Compassionate ABA therapy for children with autism in Miami-Dade & Broward County. Individualized in-home therapy, social skills groups, parent training & more. Call (305) 741-2218.",
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
    "autism therapy Broward",
    "ABA therapy for toddlers Miami",
    "social skills therapy Miami",
    "parent training ABA Miami",
    "behavior analyst Miami",
    "autism services Miami-Dade",
  ],
  openGraph: {
    title: "Build-A-Block Children Therapy Solutions | ABA Therapy Miami",
    description:
      "Where every child's potential is nurtured. Compassionate, individualized ABA therapy for children with autism across Miami-Dade & Broward County.",
    url: "https://buildablocktherapy.com",
    siteName: "Build-A-Block Children Therapy Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build-A-Block Children Therapy Solutions | ABA Therapy Miami",
    description:
      "Compassionate ABA therapy for children with autism in Miami. In-home therapy, social skills, parent training & more.",
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
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness"],
              name: "Build-A-Block Children Therapy Solutions Inc",
              description:
                "Compassionate ABA therapy for children with autism in Miami-Dade & Broward County. Individualized in-home therapy, social skills groups, parent training & telehealth services.",
              url: "https://buildablocktherapy.com",
              telephone: "+1-305-741-2218",
              email: "info@buildablocktherapy.com",
              areaServed: [
                { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
                { "@type": "AdministrativeArea", name: "Broward County, FL" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: { "@type": "GeoCoordinates", latitude: 25.7617, longitude: -80.1918 },
                geoRadius: "50000",
              },
              geo: { "@type": "GeoCoordinates", latitude: 25.7617, longitude: -80.1918 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              priceRange: "$$",
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
                "Magellan Health",
                "Anthem Blue Cross Blue Shield",
                "Wellcare",
                "AvMed",
                "TRICARE",
                "Humana",
                "United Healthcare",
                "ComPsych",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadPopup />
      </body>
    </html>
  );
}
