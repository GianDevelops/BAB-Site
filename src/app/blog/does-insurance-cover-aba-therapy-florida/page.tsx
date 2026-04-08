import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Does Insurance Cover ABA Therapy in Florida? A Parent's Guide",
  description:
    "Learn how insurance covers ABA therapy in Florida. What plans are accepted, how verification works, copays, deductibles, and financial assistance options for Miami-Dade families.",
  alternates: { canonical: "https://buildablocktherapy.com/blog/does-insurance-cover-aba-therapy-florida" },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "Insurance & ABA Therapy in Florida", href: "/blog/does-insurance-cover-aba-therapy-florida" },
      ]} />

      <article>
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-blue/10 text-blue text-xs font-bold px-3 py-1 rounded-full">Insurance &amp; Finance</span>
              <span className="text-gray text-sm">March 30, 2026</span>
              <span className="text-gray text-sm">7 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-6">
              Does Insurance Cover ABA Therapy in Florida? A Parent&apos;s Guide
            </h1>
            <p className="text-gray text-lg leading-relaxed">
              One of the first questions parents ask when exploring ABA therapy for their child is whether
              insurance will cover the cost. The short answer is yes, most insurance plans in Florida are
              required to cover ABA therapy. But the details matter, and understanding your coverage can
              save you time, stress, and unexpected bills.
            </p>
          </div>
        </section>

        <section className="py-16 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Florida Law Requires ABA Coverage</h2>
                <p className="text-gray leading-relaxed mb-4">
                  In 2008, Florida passed Steven&apos;s Law, which requires most health insurance plans to cover the
                  diagnosis and treatment of autism spectrum disorder, including Applied Behavior Analysis. This means
                  that if your child has a diagnosis of autism, your insurance company is legally obligated to cover
                  ABA therapy as a medically necessary treatment.
                </p>
                <p className="text-gray leading-relaxed">
                  This applies to most employer-sponsored plans, individual marketplace plans, and Medicaid managed care
                  plans. However, there are exceptions. Self-funded employer plans (often used by large corporations) are
                  regulated by federal law, not state law, and may have different coverage requirements. Your provider can
                  help you determine which category your plan falls into.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">What &ldquo;Covered&rdquo; Actually Means</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Coverage doesn&apos;t always mean free. Here&apos;s what you need to understand about your specific plan:
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  Your <strong>deductible</strong> is the amount you pay out of pocket before insurance starts covering costs.
                  If your deductible is $2,000, you&apos;ll pay the first $2,000 of ABA therapy costs before insurance kicks in.
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  Your <strong>copay or coinsurance</strong> is what you pay per session after your deductible is met. This
                  might be a flat fee (like $30 per session) or a percentage (like 20% of the session cost).
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  Your plan may have an <strong>annual or lifetime cap</strong> on ABA therapy hours, although many Florida
                  plans have removed these caps in recent years.
                </p>
                <p className="text-gray leading-relaxed">
                  <strong>Prior authorization</strong> is a requirement from many insurance companies that your child&apos;s
                  therapy be pre-approved before it begins. Your provider typically handles this by submitting clinical
                  documentation to the insurance company.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Which Insurance Plans Cover ABA in Miami?</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Most major insurance providers in Florida cover ABA therapy. At Build-A-Block Therapy, we work with
                  Cigna, Aetna, Florida Blue, Anthem Blue Cross Blue Shield, AvMed, Oscar Health, Humana, United Healthcare,
                  Florida VPK, and Step Up for Students.
                </p>
                <p className="text-gray leading-relaxed">
                  If your insurance isn&apos;t on this list, that doesn&apos;t necessarily mean you&apos;re out of options.
                  Many other plans provide ABA coverage, and our team can verify your specific benefits to give you a clear
                  picture before you commit to anything.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">How the Insurance Verification Process Works</h2>
                <p className="text-gray leading-relaxed mb-4">
                  A quality ABA provider handles insurance verification for you. Here&apos;s what that process typically looks like:
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  You provide your insurance card and your child&apos;s autism diagnosis documentation. The provider&apos;s
                  billing team contacts your insurance company to verify your benefits, including deductible status, copay
                  amounts, authorized hours, and any prior authorization requirements. The provider then explains your
                  coverage to you in plain language so you know exactly what to expect financially.
                </p>
                <p className="text-gray leading-relaxed">
                  This entire process usually takes 3-7 business days. At Build-A-Block, we complete insurance verification
                  before your child&apos;s first session so there are no surprises.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">What If You Don&apos;t Have Insurance?</h2>
                <p className="text-gray leading-relaxed mb-4">
                  If your child doesn&apos;t have insurance or your plan doesn&apos;t cover ABA therapy, there are still
                  options available to Florida families.
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  <strong>Medicaid</strong> covers ABA therapy for eligible children in Florida. If your child qualifies
                  for Medicaid, ABA services are covered at no cost to you.
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  <strong>Florida VPK</strong> (Voluntary Prekindergarten) can help cover costs for eligible children.
                  <strong> Step Up for Students</strong> offers scholarships for children with special needs that can
                  be applied toward therapy costs.
                </p>
                <p className="text-gray leading-relaxed">
                  Grants from organizations like <strong>Autism Care Today</strong> and the <strong>United Healthcare
                  Children&apos;s Foundation</strong> provide funding specifically for autism-related therapies. Our team
                  at Build-A-Block can help you explore these options and find the right financial pathway for your family.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Questions to Ask Your Insurance Company</h2>
                <p className="text-gray leading-relaxed mb-4">
                  If you want to call your insurance company directly, here are the key questions to ask. Use the number
                  on the back of your insurance card and ask to speak with the behavioral health department.
                </p>
                <ul className="space-y-3">
                  {[
                    "Is Applied Behavior Analysis covered under my plan for a child diagnosed with autism?",
                    "Is prior authorization required, and if so, what documentation is needed?",
                    "What is my deductible, and how much has been met this year?",
                    "What is my copay or coinsurance for outpatient behavioral health services?",
                    "Is there a limit on the number of ABA therapy hours covered per week or per year?",
                    "Do I need a referral from my pediatrician?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray text-sm leading-relaxed">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Getting Started Is Easier Than You Think</h2>
                <p className="text-gray leading-relaxed">
                  Many parents delay starting ABA therapy because they assume the insurance process will be complicated.
                  In our experience, most Miami families are pleasantly surprised by how straightforward it is when your
                  provider handles the legwork. If you&apos;re ready to explore ABA therapy for your child in Kendall,
                  Miami, or anywhere in Miami-Dade County, call Build-A-Block Therapy at (305) 741-2218 for a free
                  consultation. We&apos;ll verify your insurance benefits at no cost and walk you through every step.
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-blue-light/30 pt-10 mt-10">
                <div className="flex items-start gap-5">
                  <img src="/images/ana-jacome.jpg" alt="Ana Jacome, BS" className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                  <div>
                    <p className="font-bold text-dark">Written by Ana Jacome, BS</p>
                    <p className="text-gray text-sm">Co-Founder of Build-A-Block Therapy. With 10+ years of experience working with children on the autism spectrum across Miami-Dade County.</p>
                  </div>
                </div>
              </div>

              {/* Related */}
              <div className="border-t border-blue-light/30 pt-10">
                <h3 className="text-lg font-bold text-dark mb-4">Related Resources</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/blog/how-to-choose-aba-therapy-provider-miami" className="text-blue font-semibold text-sm hover:text-orange transition-colors">
                    How to Choose the Right ABA Therapy Provider in Miami →
                  </Link>
                  <Link href="/services" className="text-blue font-semibold text-sm hover:text-orange transition-colors">
                    Our ABA Therapy Services →
                  </Link>
                  <Link href="/contact" className="text-blue font-semibold text-sm hover:text-orange transition-colors">
                    Schedule a Free Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTABanner
        title="Let Us Verify Your Insurance for Free"
        subtitle="Call us or fill out our form and we'll check your benefits within 24 hours. No cost, no obligation."
      />
    </>
  );
}
