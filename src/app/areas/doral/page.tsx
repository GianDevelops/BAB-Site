import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Doral, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Doral, FL. Build-A-Block Therapy provides individualized treatment with bilingual BCBAs. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/doral" },
};

export default function DoralPage() {
  return (
    <AreaPage
      city="Doral"
      slug="doral"
      intro="Build-A-Block Therapy serves families in Doral with personalized, in-home ABA therapy that meets your child where they are and helps them reach where they're going."
      description="Doral is one of the fastest-growing family communities in Miami-Dade, and Build-A-Block is here to support its families. Our bilingual BCBAs and behavior technicians provide in-home ABA therapy throughout Doral, from the neighborhoods near Downtown Doral and CityPlace to the communities along NW 58th Street and beyond. We understand that many Doral families are bilingual or Spanish-speaking, and our team delivers services fluently in both English and Spanish so nothing is lost in translation when it comes to your child's care."
      nearby={["Hialeah", "Miami Lakes", "Coral Gables", "Kendall"]}
      mapQuery="Doral, FL"
    />
  );
}
