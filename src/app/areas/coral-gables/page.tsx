import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Coral Gables, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Coral Gables, FL. Individualized treatment by board-certified behavior analysts. Most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/coral-gables" },
};

export default function CoralGablesPage() {
  return (
    <AreaPage
      city="Coral Gables"
      slug="coral-gables"
      intro="Build-A-Block Therapy provides compassionate, evidence-based ABA therapy for children with autism in Coral Gables, delivered in the comfort of your own home."
      description="Coral Gables families value excellence, and that's exactly what Build-A-Block delivers. Our board-certified behavior analysts bring individualized ABA therapy directly to your Coral Gables home, creating a natural learning environment where your child can thrive. We serve families throughout the Gables, from the areas near Coral Gables Preparatory Academy to neighborhoods along Miracle Mile and beyond. Our approach blends clinical rigor with genuine warmth, and our bilingual team ensures clear communication with every family we serve."
      nearby={["South Miami", "Kendall", "Doral", "Miami Beach", "Pinecrest"]}
      mapQuery="Coral Gables, FL"
    />
  );
}
