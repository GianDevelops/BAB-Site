import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Terapia ABA en Kendall y Miami, FL | Build-A-Block Therapy",
    template: "%s | Build-A-Block Therapy",
  },
  description:
    "Build-A-Block Therapy ofrece terapia ABA para niños con autismo en Kendall, Miami y el condado de Miami-Dade. Terapia en el hogar, grupos de habilidades sociales, entrenamiento para padres y más. Llame al (305) 741-2218.",
  keywords: [
    "terapia ABA Miami",
    "terapia ABA Kendall",
    "terapia conductual Miami",
    "terapia para autismo Miami",
    "análisis de comportamiento aplicado Miami",
    "terapia ABA en el hogar Miami",
    "terapia ABA bilingüe Miami",
    "BCBA Miami",
    "terapia para niños con autismo Kendall",
    "terapia conductual niños Miami",
    "intervención temprana autismo Miami",
  ],
  alternates: {
    canonical: "https://buildablocktherapy.com/es",
    languages: { "en": "https://buildablocktherapy.com", "es": "https://buildablocktherapy.com/es" },
  },
  openGraph: {
    title: "Terapia ABA en Kendall y Miami, FL | Build-A-Block Therapy",
    description: "Terapia ABA compasiva e individualizada para niños con autismo en Kendall, Miami y el condado de Miami-Dade.",
    locale: "es_US",
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="alternate" hrefLang="en" href="https://buildablocktherapy.com" />
      <link rel="alternate" hrefLang="es" href="https://buildablocktherapy.com/es" />
      {children}
    </>
  );
}
