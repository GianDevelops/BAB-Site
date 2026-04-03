import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us — Free ABA Therapy Consultation in Kendall & Miami",
  description:
    "Request a free ABA therapy consultation for your child in Kendall, Miami, and Miami-Dade County. Call (305) 741-2218 or fill out our form. We accept most major insurance.",
  alternates: { canonical: "https://buildablocktherapy.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      {children}
    </>
  );
}
