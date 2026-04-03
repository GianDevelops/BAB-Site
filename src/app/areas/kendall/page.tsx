import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";

export const metadata: Metadata = {
  title: "ABA Therapy in Kendall, FL — In-Home Autism Therapy",
  description: "Build-A-Block Therapy provides in-home ABA therapy for children with autism in Kendall, FL. Board-certified behavior analysts, individualized treatment plans, most insurance accepted. Call (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/areas/kendall" },
};

export default function KendallPage() {
  return (
    <AreaPage
      city="Kendall"
      slug="kendall"
      intro="Build-A-Block Therapy is proudly based in Kendall, providing compassionate, individualized ABA therapy for children with autism right here in the heart of our community."
      description="As a Kendall-based practice, Build-A-Block Therapy is deeply rooted in this community. Our office at 7990 SW 117th Ave is centrally located to serve families throughout Kendall, from The Hammocks to Dadeland, Sunset, and the areas surrounding Kendall Regional Medical Center. We understand the unique needs of Kendall families and many of our team members live right here in the community. Whether your child attends schools in the Kendall area or participates in local programs, our BCBAs work closely with educators and caregivers to ensure consistency across every setting."
      nearby={["South Miami", "Pinecrest", "Cutler Bay", "Coral Gables", "Homestead"]}
      mapQuery="Kendall, FL"
    />
  );
}
