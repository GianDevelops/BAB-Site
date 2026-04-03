import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free ABA Therapy Consultation in Miami",
  description:
    "Request a free ABA therapy consultation for your child. Serving Miami-Dade County. Call (305) 741-2218 or fill out our form. We accept most major insurance.",
  alternates: { canonical: "https://buildablocktherapy.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
