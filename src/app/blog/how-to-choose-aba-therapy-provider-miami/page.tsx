import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "How to Choose the Right ABA Therapy Provider in Miami",
  description:
    "A parent's guide to choosing an ABA therapy provider in Miami-Dade County. What to look for, questions to ask, insurance tips, and red flags. From Build-A-Block Therapy in Kendall, FL.",
  alternates: { canonical: "https://buildablocktherapy.com/blog/how-to-choose-aba-therapy-provider-miami" },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "How to Choose an ABA Provider", href: "/blog/how-to-choose-aba-therapy-provider-miami" },
      ]} />

      <article>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-blue/10 text-blue text-xs font-bold px-3 py-1 rounded-full">Parent Guide</span>
              <span className="text-gray text-sm">April 4, 2026</span>
              <span className="text-gray text-sm">8 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight mb-6">
              How to Choose the Right ABA Therapy Provider in Miami
            </h1>
            <p className="text-gray text-lg leading-relaxed">
              Finding the right ABA therapy provider for your child is one of the most important decisions
              you&apos;ll make as a parent. With dozens of options across Miami-Dade County, it can feel
              overwhelming. This guide will help you ask the right questions and know what to look for.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-warm-white">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose-custom space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Look for Board Certified Behavior Analysts (BCBAs)</h2>
                <p className="text-gray leading-relaxed mb-4">
                  The quality of your child&apos;s therapy depends heavily on who designs and oversees the treatment plan.
                  A Board Certified Behavior Analyst (BCBA) holds a master&apos;s degree and has passed a national certification
                  exam. They are trained to assess your child&apos;s needs, create an individualized plan, and supervise the
                  therapists working directly with your child.
                </p>
                <p className="text-gray leading-relaxed">
                  When evaluating a provider, ask: How many BCBAs are on staff? What is their average caseload? A BCBA
                  managing too many cases may not give your child the personalized attention they need. At Build-A-Block
                  Therapy in Kendall, our BCBAs maintain small caseloads specifically so every family gets the time and
                  focus they deserve.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Ask About Their Approach to Individualization</h2>
                <p className="text-gray leading-relaxed mb-4">
                  No two children with autism are the same, so no two treatment plans should be either. Be cautious of
                  any provider that describes a one-size-fits-all program. Quality ABA therapy starts with a comprehensive
                  assessment of your child&apos;s strengths, challenges, communication level, and family goals.
                </p>
                <p className="text-gray leading-relaxed">
                  Ask the provider: How do you assess my child before starting therapy? How often do you update the
                  treatment plan? Can you show me what data collection looks like? A strong provider will be transparent
                  about their clinical process and eager to include you in goal-setting.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Consider the Setting That Works for Your Family</h2>
                <p className="text-gray leading-relaxed mb-4">
                  ABA therapy can be delivered in several settings: in-home, center-based, in school, or via telehealth.
                  Each has advantages depending on your child&apos;s age, needs, and your family&apos;s schedule.
                </p>
                <p className="text-gray leading-relaxed">
                  In-home therapy allows your child to learn in their natural environment, surrounded by familiar routines
                  and people. This is especially effective for young children and for teaching daily living skills.
                  Center-based therapy offers a structured environment with more peer interaction opportunities. Many
                  families in Miami benefit from a combination of settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Verify Insurance Coverage Before You Commit</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Florida law mandates that most insurance plans cover ABA therapy for children diagnosed with autism
                  spectrum disorder. However, coverage details vary significantly between plans. Before choosing a
                  provider, make sure they accept your insurance and will handle the verification process for you.
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  Reputable providers will verify your benefits before your child&apos;s first session. They should be able
                  to tell you your copay or coinsurance, how many authorized hours your plan covers, and whether prior
                  authorization is required. If a provider asks you to figure all of this out on your own, that&apos;s a red flag.
                </p>
                <p className="text-gray leading-relaxed">
                  Common insurance plans that cover ABA therapy in Miami include Cigna, Aetna, Anthem Blue Cross Blue Shield,
                  United Healthcare, Humana, TRICARE, AvMed, and Magellan Health.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Evaluate Communication and Parent Involvement</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Your child spends more time with you than with any therapist. A quality ABA provider recognizes this
                  and actively involves you in the process. They should offer parent training sessions, provide regular
                  progress updates, and be available to answer your questions between sessions.
                </p>
                <p className="text-gray leading-relaxed">
                  Ask: How often will I receive progress reports? Do you offer parent training? Can I observe sessions?
                  The best providers view the parent-therapist relationship as a partnership, not a one-way service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Check Reviews and Ask for References</h2>
                <p className="text-gray leading-relaxed mb-4">
                  Google reviews from other Miami families can give you real insight into what it&apos;s like to work with
                  a provider. Look for patterns in the reviews, both positive and negative. Pay attention to comments
                  about communication, flexibility, staff turnover, and actual progress their children have made.
                </p>
                <p className="text-gray leading-relaxed">
                  Don&apos;t hesitate to ask the provider for references from current families. Any confident provider
                  will be happy to connect you with parents who can share their experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark mb-4">Trust Your Instincts</h2>
                <p className="text-gray leading-relaxed mb-4">
                  After you&apos;ve done your research, schedule a consultation. Pay attention to how the team makes you
                  feel. Do they listen to your concerns? Do they ask thoughtful questions about your child? Do they
                  explain things in a way you understand?
                </p>
                <p className="text-gray leading-relaxed">
                  You are entrusting someone with your child&apos;s development. The right provider will make you feel
                  informed, supported, and hopeful from the very first conversation.
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-blue-light/30 pt-10 mt-10">
                <div className="flex items-start gap-5">
                  <img src="/images/kristel-arauz.jpg" alt="Kristel Arauz, BCBA" className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                  <div>
                    <p className="font-bold text-dark">Written by Kristel Arauz, MS, BCBA</p>
                    <p className="text-gray text-sm">Co-Founder of Build-A-Block Therapy. Board Certified Behavior Analyst with 10+ years of experience serving families in Miami-Dade County.</p>
                  </div>
                </div>
              </div>

              {/* Related */}
              <div className="border-t border-blue-light/30 pt-10">
                <h3 className="text-lg font-bold text-dark mb-4">Related Resources</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/services" className="text-blue font-semibold text-sm hover:text-orange transition-colors flex items-center gap-2">
                    Our ABA Therapy Services →
                  </Link>
                  <Link href="/about" className="text-blue font-semibold text-sm hover:text-orange transition-colors flex items-center gap-2">
                    Meet Our Team →
                  </Link>
                  <Link href="/contact" className="text-blue font-semibold text-sm hover:text-orange transition-colors flex items-center gap-2">
                    Schedule a Free Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <CTABanner
        title="Ready to Take the Next Step?"
        subtitle="Schedule a free consultation and let's talk about your child's unique needs. No commitment, just a conversation."
      />
    </>
  );
}
