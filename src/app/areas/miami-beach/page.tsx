import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Miami Beach, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Miami Beach, FL. Board-certified behavior analysts, personalized treatment. Most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/miami-beach" },
};

export default function MiamiBeachPage() {
  return (
    <AreaPage
      city="Miami Beach"
      slug="miami-beach"
      intro="Build-A-Block Therapy provides in-home ABA therapy for families in Miami Beach, bringing expert autism care directly to your doorstep on the Beach."
      description="Miami Beach families face unique challenges finding in-home therapy providers willing to cross the causeway. Build-A-Block is different. Our dedicated team serves families throughout Miami Beach, from South Beach to Mid-Beach, North Beach, and the neighborhoods near Mount Sinai Medical Center. We bring the same individualized, BCBA-supervised ABA therapy to your Beach home that families across Miami-Dade have come to trust. Our flexible scheduling works around your family's routine, and our bilingual team serves both English and Spanish-speaking families."
      nearby={["Coral Gables", "South Miami", "Hialeah", "Doral"]}
      mapQuery="Miami Beach, FL"
    />
  );
}
