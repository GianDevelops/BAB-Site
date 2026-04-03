import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";

interface AreaPageProps {
  city: string;
  slug: string;
  intro: string;
  description: string;
  nearby: string[];
  mapQuery: string;
}

const services = [
  { title: "In-Home ABA Therapy", href: "/services#in-home", desc: "One-on-one therapy sessions in your home, tailored to your child's unique needs and goals." },
  { title: "Social Skills Groups", href: "/services#social-skills", desc: "Structured group sessions where children practice communication, friendship-building, and emotional regulation." },
  { title: "Parent Training", href: "/services#parent-training", desc: "Hands-on coaching in ABA strategies so you can support your child's progress every day." },
  { title: "School Consultation", href: "/services#school-consultation", desc: "We collaborate with your child's school on IEP goals, behavior plans, and staff training." },
  { title: "ABA-Based Tutoring", href: "/services#tutoring", desc: "Academic support using positive reinforcement to build confidence and close learning gaps." },
  { title: "Telehealth Services", href: "/services#telehealth", desc: "Virtual ABA therapy and parent training sessions from the comfort of your home." },
];

const insuranceProviders = [
  { name: "Cigna", logo: "/images/insurance/cigna.png" },
  { name: "Aetna", logo: "/images/insurance/aetna.png" },
  { name: "Magellan Health", logo: "/images/insurance/magellan.png" },
  { name: "Anthem BCBS", logo: "/images/insurance/anthem.png" },
  { name: "AvMed", logo: "/images/insurance/avmed.png" },
  { name: "TRICARE", logo: "/images/insurance/tricare.svg" },
  { name: "Humana", logo: "/images/insurance/humana.png" },
  { name: "United Healthcare", logo: "/images/insurance/uhc.png" },
  { name: "Florida VPK", logo: "/images/insurance/vpk.png" },
  { name: "Step Up for Students", logo: "/images/insurance/stepup.svg" },
];

export default function AreaPage({ city, slug, intro, description, nearby, mapQuery }: AreaPageProps) {
  const faqs = [
    {
      q: `Do you provide in-home ABA therapy in ${city}?`,
      a: `Yes! Build-A-Block Therapy provides in-home ABA therapy throughout ${city} and surrounding areas of Miami-Dade County. Our BCBAs and RBTs travel directly to your home so your child can learn in a comfortable, familiar environment.`,
    },
    {
      q: `What insurance do you accept for ABA therapy in ${city}?`,
      a: `We accept most major insurance plans including Cigna, Aetna, Anthem BCBS, United Healthcare, Humana, TRICARE, AvMed, Magellan Health, Florida VPK, and Step Up for Students. Our team handles insurance verification for ${city} families to make the process easy.`,
    },
    {
      q: `How do I get started with ABA therapy in ${city}?`,
      a: `Getting started is simple. Call us at (305) 741-2218 or fill out our contact form for a free consultation. We'll discuss your child's needs, verify your insurance, and create a personalized treatment plan. Most ${city} families begin therapy within 2-4 weeks.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Areas We Serve", href: "/areas/kendall" },
        { name: city, href: `/areas/${slug}` },
      ]} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `ABA Therapy in ${city}`,
            description: `Build-A-Block Therapy provides in-home Applied Behavior Analysis (ABA) therapy for children with autism in ${city}, FL and surrounding areas of Miami-Dade County.`,
            provider: {
              "@type": "MedicalBusiness",
              name: "Build-A-Block Children Therapy Solutions Inc",
              url: "https://buildablocktherapy.com",
              telephone: "+1-305-741-2218",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7990 SW 117th Ave, Suite 134",
                addressLocality: "Kendall",
                addressRegion: "FL",
                postalCode: "33183",
                addressCountry: "US",
              },
            },
            areaServed: { "@type": "City", name: `${city}, FL` },
            serviceType: "Applied Behavior Analysis Therapy",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-lightest via-warm-white to-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">ABA Therapy in {city}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            ABA Therapy for Children with Autism in <span className="text-blue">{city}, FL</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Compassionate ABA Therapy Serving {city} Families
              </h2>
              <div className="text-gray leading-relaxed space-y-4 mb-10">
                <p>{description}</p>
                <p>
                  Our office is conveniently located at <strong>7990 SW 117th Ave, Suite 134, Kendall, FL 33183</strong>,
                  and our therapists travel directly to your home in {city} for in-home sessions. We believe children
                  learn best in the environment where they feel most comfortable.
                </p>
                <p>
                  Every treatment plan at Build-A-Block is individualized. We start with a comprehensive behavioral
                  assessment, then design a program built around your child&apos;s specific strengths, challenges, and
                  goals. Our board-certified behavior analysts (BCBAs) oversee all programs and maintain small caseloads
                  so your family always receives personalized attention.
                </p>
              </div>

              {/* Services grid */}
              <h3 className="text-xl font-bold text-dark mb-5">Our Services Available in {city}</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-blue-light/20 card-hover block"
                  >
                    <h4 className="font-bold text-dark mb-2 text-sm">{service.title}</h4>
                    <p className="text-gray text-xs leading-relaxed">{service.desc}</p>
                  </Link>
                ))}
              </div>

              {/* Insurance */}
              <h3 className="text-xl font-bold text-dark mb-5">Insurance We Accept in {city}</h3>
              <p className="text-gray text-sm mb-4">
                We accept most major insurance plans for ABA therapy in {city}. Our team handles insurance verification
                so you can focus on your child.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
                {insuranceProviders.map((provider) => (
                  <div key={provider.name} className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm border border-blue-light/20 min-h-[80px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={provider.logo}
                      alt={`${provider.name} logo - accepted insurance for ABA therapy in ${city}`}
                      className="h-7 w-auto object-contain max-w-[100px]"
                      loading="lazy"
                    />
                    <span className="text-[10px] font-semibold text-gray text-center leading-tight">{provider.name}</span>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 className="text-xl font-bold text-dark mb-5">Frequently Asked Questions About ABA Therapy in {city}</h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white rounded-2xl shadow-sm border border-blue-light/20 overflow-hidden">
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-bold text-dark hover:text-blue transition-colors text-sm">
                      <span className="text-left">{faq.q}</span>
                      <svg className="w-4 h-4 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-gray text-sm leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA card */}
              <div className="bg-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
                <p className="text-white/70 text-sm mb-6">
                  Ready to get started with ABA therapy in {city}? We&apos;ll discuss your child&apos;s needs and
                  verify your insurance at no cost.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center !bg-orange">
                  Request Consultation
                </Link>
                <a href="tel:+13057412218" className="flex items-center justify-center gap-2 text-white/80 text-sm mt-4 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (305) 741-2218
                </a>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-blue-light/20">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(mapQuery)}&zoom=13`}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Map of ${city}, FL - Build-A-Block Therapy service area`}
                />
              </div>

              {/* Nearby areas */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20">
                <h3 className="text-lg font-bold text-dark mb-4">Nearby Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((area) => (
                    <Link
                      key={area.toLowerCase().replace(/\s+/g, "-")}
                      href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-blue/5 text-blue text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-blue/10 transition-colors"
                    >
                      {area}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Get Started with ABA Therapy in ${city}`}
        subtitle="Every child deserves a chance to thrive. Schedule a free consultation and let's create a plan for your child."
      />
    </>
  );
}
