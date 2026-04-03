import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers — BCBA & RBT Jobs in Kendall & Miami, FL",
  description:
    "Join Build-A-Block Therapy in Kendall, FL. We're hiring BCBAs and RBTs to provide ABA therapy for children with autism in Miami-Dade County. Competitive pay, monthly training, flexible schedule.",
  alternates: { canonical: "https://buildablocktherapy.com/careers" },
};

const positions = [
  {
    title: "Board Certified Behavior Analyst (BCBA)",
    type: "Full-Time",
    description:
      "Lead individualized ABA programs, supervise RBTs, conduct assessments, and collaborate with families. You'll maintain a manageable caseload so you can give each family the attention they deserve.",
    requirements: [
      "Active BCBA certification in good standing",
      "Master's degree in ABA, Psychology, or related field",
      "Experience working with children with autism spectrum disorder",
      "Strong communication skills and a compassionate approach",
      "Bilingual (English/Spanish) preferred but not required",
    ],
  },
  {
    title: "Registered Behavior Technician (RBT)",
    type: "Full-Time / Part-Time",
    description:
      "Deliver one-on-one ABA therapy sessions under BCBA supervision. You'll work directly with children in their homes and communities, implementing individualized behavior plans and celebrating every milestone.",
    requirements: [
      "Active RBT certification (or willingness to obtain within 30 days)",
      "High school diploma required; Bachelor's degree preferred",
      "Experience with children, especially those with developmental disabilities",
      "Reliable transportation for in-home sessions across Miami-Dade County",
      "Patience, creativity, and genuine love for working with kids",
    ],
  },
];

const perks = [
  {
    title: "Monthly Training",
    desc: "Ongoing CEU opportunities and professional development to keep your skills sharp.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 27V7a2 2 0 012-2h14a2 2 0 012 2v20" />
        <path d="M5 27h18" />
        <path d="M9 11h8M9 15h6M9 19h4" />
        <path d="M25 10c1.5 0 3 1 3 3v11c0 2-1.5 3-3 3H5" />
      </svg>
    ),
    bg: "bg-blue/10", color: "text-blue",
  },
  {
    title: "Family Culture",
    desc: "We're not just coworkers — we're a supportive family that celebrates each other's wins.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="8" r="3.5" />
        <circle cx="7" cy="12" r="2.5" />
        <circle cx="25" cy="12" r="2.5" />
        <path d="M10 28v-6a6 6 0 0112 0v6" />
        <path d="M4 28v-4a3.5 3.5 0 015-3" />
        <path d="M28 28v-4a3.5 3.5 0 00-5-3" />
      </svg>
    ),
    bg: "bg-orange/10", color: "text-orange",
  },
  {
    title: "Career Growth",
    desc: "Clear pathways for advancement, mentorship from experienced BCBAs, and monthly training.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26l7-7 5 4 8-10 4-4" />
        <path d="M22 9h6v6" />
      </svg>
    ),
    bg: "bg-yellow/15", color: "text-dark",
  },
  {
    title: "Flexible Schedule",
    desc: "Work-life balance matters. We offer flexible hours that work with your lifestyle.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="3" />
        <path d="M4 13h24" />
        <path d="M10 3v5M22 3v5" />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="22" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
    bg: "bg-blue-light/30", color: "text-blue-dark",
  },
  {
    title: "Competitive Pay & Benefits",
    desc: "Compensation that reflects your expertise, with regular performance-based increases.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M19 12c-.5-1.5-2-2-3.5-2-2 0-3.5 1.2-3.5 3s1.5 2.5 3.5 3c2 .5 3.5 1.5 3.5 3s-1.5 3-3.5 3c-1.5 0-3-.5-3.5-2" />
        <path d="M16 8v2M16 22v2" />
      </svg>
    ),
    bg: "bg-orange/10", color: "text-orange",
  },
  {
    title: "Meaningful Work",
    desc: "Every day, you'll see the direct impact of your work on a child's life. That's priceless.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28s-11-6.5-11-14.5C5 8.5 8 5 12 5c2.2 0 3.7 1.2 4 1.5C16.3 6.2 17.8 5 20 5c4 0 7 3.5 7 8.5C27 21.5 16 28 16 28z" />
        <path d="M12 15l3 3 5-6" />
      </svg>
    ),
    bg: "bg-blue/10", color: "text-blue",
  },
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-blue-lightest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[18%] left-[8%] w-20 h-20 bg-yellow/8 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-blue/6 rounded-xl -rotate-6 animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Careers</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Make a <span className="text-blue">Difference</span> Every Day
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join a team where your work directly changes children&apos;s lives. At Build-A-Block,
            we invest in our people because we know that great therapists create great outcomes.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              A Workplace That Feels Like Family
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 shadow-sm border border-blue-light/20 card-hover">
                <div className={`w-14 h-14 ${perk.bg} rounded-full flex items-center justify-center mb-4 ${perk.color}`}>
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{perk.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl text-white/20 font-serif mb-4">&ldquo;</div>
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-6 font-medium">
            Working at Build-A-Block is unlike any other company. The supervisors are passionate,
            the training is exceptional, and I genuinely feel like part of a family. Every day I get
            to see children make progress — that&apos;s what keeps me going.
          </p>
          <p className="text-white/60 font-semibold">— BAB Team Member</p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Current Opportunities
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              We&apos;re always looking for dedicated professionals who share our passion for helping children thrive.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((pos, i) => (
              <details key={i} className="group bg-white rounded-3xl shadow-sm border border-blue-light/20 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 md:p-8 cursor-pointer list-none">
                  <div>
                    <h3 className="text-xl font-bold text-dark group-hover:text-blue transition-colors">{pos.title}</h3>
                    <span className="text-sm text-orange font-semibold">{pos.type}</span>
                  </div>
                  <svg className="w-6 h-6 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-8">
                  <p className="text-gray leading-relaxed mb-5">{pos.description}</p>
                  <h4 className="font-bold text-dark mb-3">What We&apos;re Looking For:</h4>
                  <ul className="space-y-2 mb-6">
                    {pos.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-gray text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:info@buildablocktherapy.com?subject=Application: {{pos.title}}"
                    className="btn-primary"
                  >
                    Apply Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-3xl p-10 shadow-sm border border-blue-light/20">
            <h3 className="text-2xl font-bold text-dark mb-3">Don&apos;t See Your Role?</h3>
            <p className="text-gray mb-6 max-w-lg mx-auto">
              We&apos;re always open to hearing from passionate professionals. Send us your resume and
              tell us how you&apos;d like to make an impact.
            </p>
            <a href="mailto:info@buildablocktherapy.com?subject=General Application" className="btn-secondary">
              Send Your Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
