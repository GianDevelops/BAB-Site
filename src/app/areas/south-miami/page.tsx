import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in South Miami, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in South Miami, FL. Build-A-Block Therapy offers individualized treatment plans with board-certified behavior analysts. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/south-miami" },
};

export default function SouthMiamiPage() {
  return (
    <AreaPage
      city="South Miami"
      slug="south-miami"
      intro="Build-A-Block Therapy brings expert ABA therapy to families in South Miami, delivering personalized, in-home treatment that helps children with autism reach their full potential."
      description="South Miami families deserve access to top-quality ABA therapy without a long commute. Our team of BCBAs and registered behavior technicians travels directly to your South Miami home, working with your child in the environment where they feel safest. Located just minutes away in Kendall, we serve families throughout South Miami, including areas near South Miami Hospital, the University of Miami campus, and Sunset Drive. Our bilingual team is especially well-equipped to serve South Miami's diverse community, offering services in both English and Spanish."
      nearby={["Kendall", "Coral Gables", "Pinecrest", "Cutler Bay"]}
      mapQuery="South Miami, FL"
    />
  );
}
