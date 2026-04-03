import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Pinecrest, FL — In-Home Autism Therapy",
  description: "In-home ABA therapy for children with autism in Pinecrest, FL. Build-A-Block Therapy provides individualized treatment with board-certified behavior analysts. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/pinecrest" },
};

export default function PinecrestPage() {
  return (
    <AreaPage
      city="Pinecrest"
      slug="pinecrest"
      intro="Build-A-Block Therapy serves Pinecrest families with personalized, in-home ABA therapy that combines clinical excellence with genuine compassion for your child."
      description="Pinecrest families expect the best for their children, and Build-A-Block delivers exactly that. Our board-certified behavior analysts provide individualized ABA therapy in the comfort of your Pinecrest home, working with your child in the environment where they learn best. We serve families throughout Pinecrest, including the areas near Pinecrest Gardens, Palmetto Bay, and the top-rated schools that make this community so attractive to families. Our team coordinates closely with local educators and specialists to ensure your child's therapy goals align across every setting."
      nearby={["Kendall", "South Miami", "Cutler Bay", "Coral Gables"]}
      mapQuery="Pinecrest, FL"
    />
  );
}
