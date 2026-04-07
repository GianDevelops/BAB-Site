import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Skills Groups for Children with Autism in Kendall & Miami",
  description:
    "Build-A-Block Therapy offers social skills groups for children with autism in Kendall and Miami-Dade County. Structured group sessions focused on communication, friendship-building, and emotional regulation. Call (305) 741-2218.",
  robots: { index: false, follow: true },
};

export default function SocialSkillsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Social Skills Groups</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Social Skills Groups for Children with <span className="text-blue">Autism</span>
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Fun, structured group sessions where children practice communication, friendship-building,
            and emotional regulation with peers in a supportive, BCBA-supervised setting.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                Building Friendships, One Step at a Time
              </h2>
              <p className="text-gray leading-relaxed mb-4">
                Social skills don&apos;t come naturally for every child. For children with autism, reading social
                cues, starting conversations, sharing, taking turns, and managing emotions in group settings can
                be especially challenging. Our social skills groups give your child a safe, guided space to practice
                these critical life skills.
              </p>
              <p className="text-gray leading-relaxed mb-6">
                Each group is led by a Board Certified Behavior Analyst (BCBA) and tailored to the participants&apos;
                ages and developmental levels. We use evidence-based ABA techniques to teach skills in a way that
                feels like play, not work. Children practice with real peers in real situations, building confidence
                that carries over into school, home, and community settings.
              </p>

              <h3 className="text-lg font-bold text-dark mb-4">What Your Child Will Practice</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Starting and maintaining conversations with peers",
                  "Taking turns, sharing, and cooperative play",
                  "Reading facial expressions and body language",
                  "Managing frustration and regulating emotions",
                  "Problem-solving and conflict resolution",
                  "Perspective-taking and empathy",
                  "Making and keeping friends",
                  "Community outings to generalize skills in real-world settings",
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
                  src="/images/stock/service-social.jpg"
                  alt="Children in a social skills group session at Build-A-Block Therapy"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="bg-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Enroll Your Child Today</h3>
                <p className="text-white/70 text-sm mb-6">
                  Groups are organized by age and skill level. Contact us to learn about upcoming
                  sessions and availability.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center !bg-orange">
                  Request Information
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
                <h3 className="text-lg font-bold text-dark mb-3">Insurance Covers Social Skills Groups</h3>
                <p className="text-gray text-sm leading-relaxed">
                  Most insurance plans cover social skills groups as part of ABA therapy. We verify
                  your benefits for free. Serving families in Kendall, South Miami, Coral Gables,
                  Doral, and throughout Miami-Dade County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
