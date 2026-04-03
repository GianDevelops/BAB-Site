import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Cutler Bay, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Cutler Bay, FL. Individualized treatment by board-certified behavior analysts. Most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/cutler-bay" },
};

export default function CutlerBayPage() {
  return (
    <AreaPage
      city="Cutler Bay"
      slug="cutler-bay"
      intro="Build-A-Block Therapy delivers personalized, in-home ABA therapy for children with autism in Cutler Bay, helping families in South Miami-Dade access expert care close to home."
      description="Cutler Bay is a growing family-oriented community, and Build-A-Block is proud to serve its youngest residents. Our BCBAs and behavior technicians provide in-home ABA therapy throughout Cutler Bay, from the neighborhoods near Southland Mall to the communities along Old Cutler Road and US-1. We work with families whose children attend local schools and coordinate with teachers to ensure consistent support. Being based in nearby Kendall means our team is never far away, and we maintain flexible scheduling to fit your family's life."
      nearby={["Kendall", "Pinecrest", "Homestead", "South Miami"]}
      mapQuery="Cutler Bay, FL"
    />
  );
}
