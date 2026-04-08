import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance Accepted for ABA Therapy in Kendall & Miami",
  description:
    "Build-A-Block Therapy accepts Cigna, Aetna, Anthem BCBS, United Healthcare, Humana, Oscar Health, AvMed, Florida Blue, Florida VPK, and Step Up for Students for ABA therapy in Miami-Dade County.",
  robots: { index: false, follow: true },
};

const insuranceProviders = [
  { name: "Cigna", logo: "/images/insurance/cigna.png" },
  { name: "Aetna", logo: "/images/insurance/aetna.png" },
  { name: "Florida Blue", logo: "/images/insurance/floridablue.png" },
  { name: "Anthem BCBS", logo: "/images/insurance/anthem.png" },
  { name: "AvMed", logo: "/images/insurance/avmed.png" },
  { name: "Oscar Health", logo: "/images/insurance/oscar.png" },
  { name: "Humana", logo: "/images/insurance/humana.png" },
  { name: "United Healthcare", logo: "/images/insurance/uhc.png" },
  { name: "Florida VPK", logo: "/images/insurance/vpk.png" },
  { name: "Step Up for Students", logo: "/images/insurance/stepup.svg" },
];

export default function InsurancePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Insurance Accepted</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            We Accept Your <span className="text-blue">Insurance</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Most insurance plans cover ABA therapy in Florida. We handle the verification
            so you can focus on what matters — your child.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            {insuranceProviders.map((provider) => (
              <div key={provider.name} className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-sm border border-blue-light/20 card-hover min-h-[100px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  className="h-8 w-auto object-contain max-w-[120px]"
                  loading="lazy"
                />
                <span className="text-[11px] font-semibold text-gray text-center leading-tight">{provider.name}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue rounded-3xl p-8 md:p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">We Verify Your Insurance for Free</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Not sure if your plan covers ABA therapy? Call us or fill out our form and we&apos;ll
              check your benefits within 24 hours. No cost, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary !bg-orange">
                Request Verification
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a href="tel:+13057412218" className="text-white/90 font-semibold flex items-center justify-center gap-2 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (305) 741-2218
              </a>
            </div>
          </div>

          <p className="text-center text-gray text-sm mt-8">
            Don&apos;t see your insurance? <Link href="/contact" className="text-blue font-semibold hover:text-orange transition-colors">Contact us</Link>, we may still be able to help.
            We also assist with Medicaid, scholarships through Step Up for Students, and grants from Autism Care Today.
          </p>
        </div>
      </section>
    </>
  );
}
