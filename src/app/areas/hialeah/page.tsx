import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Hialeah, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Hialeah, FL. Bilingual BCBAs, individualized treatment plans, most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/hialeah" },
};

export default function HialeahPage() {
  return (
    <AreaPage
      city="Hialeah"
      slug="hialeah"
      intro="Build-A-Block Therapy proudly serves Hialeah families with bilingual, in-home ABA therapy designed to help every child with autism thrive."
      description="As one of the largest and most vibrant Hispanic communities in Miami-Dade, Hialeah deserves ABA therapy providers who truly understand its families. Build-A-Block's bilingual team delivers services fluently in Spanish and English, ensuring every parent fully understands their child's treatment plan and progress. We serve families throughout Hialeah, Hialeah Gardens, and Miami Springs, including areas near Palmetto General Hospital and the Westland Mall corridor. Our therapists work in your home, helping your child develop communication, social skills, and independence in the setting where they feel safest."
      nearby={["Miami Lakes", "Doral", "Miami Beach", "Coral Gables"]}
      mapQuery="Hialeah, FL"
    />
  );
}
