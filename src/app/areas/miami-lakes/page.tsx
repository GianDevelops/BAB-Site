import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Miami Lakes, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Miami Lakes, FL. Bilingual BCBAs, individualized treatment plans, most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/miami-lakes" },
};

export default function MiamiLakesPage() {
  return (
    <AreaPage
      city="Miami Lakes"
      slug="miami-lakes"
      intro="Build-A-Block Therapy brings expert ABA therapy to families in Miami Lakes, providing individualized, in-home treatment for children with autism."
      description="Miami Lakes is known for its family-friendly neighborhoods and excellent schools, and Build-A-Block is here to support families navigating autism. Our bilingual BCBAs and behavior technicians provide in-home ABA therapy throughout Miami Lakes, including the areas near Miami Lakes Educational Center, Main Street, and the lakefront communities. We understand the close-knit nature of Miami Lakes and take pride in becoming a trusted part of your child's care team. Our therapists work alongside your family, your child's school, and other providers to deliver cohesive, effective treatment."
      nearby={["Hialeah", "Doral", "Miami Beach", "Kendall"]}
      mapQuery="Miami Lakes, FL"
    />
  );
}
