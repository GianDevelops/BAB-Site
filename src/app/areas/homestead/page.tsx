import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Homestead, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Homestead, FL. Individualized treatment plans, bilingual team, most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/homestead" },
};

export default function HomesteadPage() {
  return (
    <AreaPage
      city="Homestead"
      slug="homestead"
      intro="Build-A-Block Therapy brings quality ABA therapy to families in Homestead, ensuring that distance from urban centers doesn't mean distance from exceptional care."
      description="Families in Homestead and the surrounding agricultural communities of South Miami-Dade deserve the same quality ABA therapy available closer to the city. Build-A-Block's therapists travel to your Homestead home, providing one-on-one sessions in the environment where your child is most comfortable. We serve families throughout Homestead, Florida City, and the Redland area. We also coordinate with local schools and early intervention programs to ensure your child receives consistent support across every setting."
      nearby={["Cutler Bay", "Kendall", "Pinecrest"]}
      mapQuery="Homestead, FL"
    />
  );
}
