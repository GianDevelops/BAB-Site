import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABA Parent Training in Kendall & Miami — Empower Your Family",
  description:
    "Build-A-Block Therapy offers ABA parent training for families of children with autism in Kendall and Miami-Dade County. Learn evidence-based strategies to support your child's progress at home. Call (305) 741-2218.",
  robots: { index: false, follow: true },
};

export default function ParentTrainingPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Parent Training</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            ABA Parent Training — <span className="text-blue">Empowering Your Family</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            You are your child&apos;s greatest advocate. Our parent training program equips you with
            proven ABA strategies so you can reinforce your child&apos;s progress every day, not just during therapy sessions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Because You Spend More Time With Your Child Than Anyone
              </h2>
              <p className="text-gray leading-relaxed mb-4">
                Your child&apos;s therapist sees them for a few hours a week. You see them every day.
                That&apos;s why parent training is one of the most impactful parts of any ABA therapy
                program. When you understand the same strategies your child&apos;s therapist uses, you
                can reinforce progress during meals, bedtime, outings, and everyday routines.
              </p>
              <p className="text-gray leading-relaxed mb-6">
                Our BCBAs work directly with you in hands-on coaching sessions. This isn&apos;t a lecture
                or a handout — it&apos;s practical, real-time training where you practice techniques with
                your child while your BCBA provides feedback and guidance. We meet you where you are and
                build your confidence step by step.
              </p>

              <h3 className="text-lg font-bold text-dark mb-4">What You&apos;ll Learn</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "How to use positive reinforcement effectively at home",
                  "Strategies for improving your child's communication",
                  "Techniques for reducing challenging behaviors",
                  "How to teach daily living skills (dressing, eating, toileting)",
                  "Creating structured routines and visual schedules",
                  "Managing transitions and preventing meltdowns",
                  "Promoting independence and self-help skills",
                  "How to generalize therapy gains across all settings",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/stock/service-parent.jpg"
                  alt="Parent training session at Build-A-Block Therapy"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Get Started With Parent Training</h3>
                <p className="text-white/70 text-sm mb-6">
                  Parent training is included as part of your child&apos;s ABA therapy program.
                  Contact us to learn how we can support your whole family.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center !bg-orange">
                  Request a Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:+13057412218" className="flex items-center justify-center gap-2 text-white/80 text-sm mt-4 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (305) 741-2218
                </a>
              </div>

              <div className="bg-cream rounded-3xl p-8">
                <h3 className="text-lg font-bold text-dark mb-3">Covered by Insurance</h3>
                <p className="text-gray text-sm leading-relaxed">
                  Parent training is a covered component of ABA therapy under most insurance plans.
                  We verify your benefits for free. Available in-person throughout Miami-Dade County
                  and via telehealth statewide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
