import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — Meet the Team Behind Build-A-Block Therapy",
  description:
    "Meet the compassionate team at Build-A-Block Children Therapy Solutions. Co-founded by Kristel Arauz, BCBA, and Ana Jacome, RBT — bringing 17+ combined years of ABA experience to families in Miami.",
  alternates: { canonical: "https://buildablocktherapy.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-lightest via-warm-white to-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-24 h-24 bg-blue/6 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-[15%] left-[8%] w-20 h-20 bg-orange/6 rounded-xl -rotate-6 animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Where Every Child&apos;s{" "}
            <span className="text-blue">Potential</span> is Nurtured
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Build-A-Block was founded on a simple belief: every child deserves to be approached with love,
            understanding, and a plan that&apos;s as unique as they are.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
                More Than Therapy — A Partnership With Your Family
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                At Build-A-Block, we don&apos;t believe in one-size-fits-all solutions. Every child who walks through
                our program receives a treatment plan crafted specifically for them — built around their strengths,
                their challenges, and the goals your family cares about most.
              </p>
              <p className="text-gray leading-relaxed mb-6">
                Our team combines clinical expertise with genuine compassion. We&apos;re not just therapists —
                we become part of your child&apos;s support system, guiding them through milestones big and small.
              </p>
              <p className="text-gray leading-relaxed">
                From the moment you contact us, you&apos;ll feel the difference. We handle insurance verification,
                coordinate with your child&apos;s school, and keep you informed every step of the way. Because when
                your family feels supported, your child thrives.
              </p>
            </div>

            {/* Values blocks */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "bg-blue", text: "Compassion", icon: "💙", desc: "Every interaction is rooted in genuine care and understanding." },
                { color: "bg-orange", text: "Excellence", icon: "⭐", desc: "Evidence-based methods delivered by credentialed professionals." },
                { color: "bg-yellow", text: "Individuality", icon: "🧩", desc: "No two children are alike — no two treatment plans should be either." },
                { color: "bg-blue-light", text: "Family", icon: "🏡", desc: "We empower the whole family, not just the child in our care." },
              ].map((v, i) => (
                <div key={i} className={`${v.color} rounded-3xl p-6 text-white shadow-lg card-hover ${i % 2 === 1 ? "mt-8" : ""}`}>
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className={`text-lg font-bold mb-2 ${v.color === "bg-yellow" || v.color === "bg-blue-light" ? "text-dark" : ""}`}>{v.text}</h3>
                  <p className={`text-sm leading-relaxed ${v.color === "bg-yellow" || v.color === "bg-blue-light" ? "text-dark/70" : "text-white/80"}`}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Founders</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Led by Passion, Guided by Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kristel */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20 card-hover">
              <img
                src="/images/kristel-arauz.jpg"
                alt="Kristel Arauz, MS, BCBA — Co-Founder of Build-A-Block Children Therapy Solutions"
                className="w-28 h-28 rounded-2xl object-cover mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-dark mb-1">Kristel Arauz, MS, BCBA</h3>
              <p className="text-blue font-semibold mb-4">Co-Founder &amp; Clinical Director</p>
              <p className="text-gray leading-relaxed mb-4">
                With over 10 years of experience working with children and adults with developmental disabilities,
                Kristel brings a depth of clinical knowledge matched only by her warmth. She holds a Master&apos;s degree
                in Applied Behavior Analysis from Western New England University and a Bachelor&apos;s in Psychology from
                the University of Florida.
              </p>
              <p className="text-gray leading-relaxed mb-4">
                Before founding Build-A-Block, Kristel worked at the renowned New England Center for Children (NECC)
                and spent time in Abu Dhabi training educators in ABA principles — bringing an international perspective
                to her practice.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Board Certified (BCBA)", "10+ Years Experience", "Bilingual", "IEP Specialist", "Early Intervention"].map((tag) => (
                  <span key={tag} className="bg-blue/10 text-blue text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Ana */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20 card-hover">
              <img
                src="/images/ana-jacome.jpg"
                alt="Ana Jacome, BS — Co-Founder of Build-A-Block Children Therapy Solutions"
                className="w-28 h-28 rounded-2xl object-cover mb-6 shadow-md"
              />
              <h3 className="text-2xl font-bold text-dark mb-1">Ana Jacome, BS</h3>
              <p className="text-orange font-semibold mb-4">Co-Founder &amp; Operations Director</p>
              <p className="text-gray leading-relaxed mb-4">
                Ana brings over 10 years of hands-on experience working with children and teens on the autism spectrum.
                She holds a Bachelor&apos;s degree in Biology from Florida International University and has spent her
                career deepening her expertise in Applied Behavior Analysis across center-based, in-home, community,
                and school settings.
              </p>
              <p className="text-gray leading-relaxed mb-4">
                As co-founder, Ana oversees daily operations, staff development, and quality assurance, ensuring every
                family receives the personalized attention and exceptional care they deserve.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Bachelor of Science", "10+ Years Experience", "Operations & Quality Assurance", "Staff Development", "Multi-Setting Expert"].map((tag) => (
                  <span key={tag} className="bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Areas We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-10">
            Bringing Quality ABA Therapy Across South Florida
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Kendall", "South Miami", "Coral Gables", "Doral", "Homestead",
              "Miami Beach", "Hialeah", "Miami Lakes", "Cutler Bay", "Pinecrest",
              "Pembroke Pines", "Miramar", "Hollywood", "Fort Lauderdale", "Aventura",
            ].map((area) => (
              <span key={area} className="bg-white px-5 py-3 rounded-full text-sm font-semibold text-dark shadow-sm border border-blue-light/20">
                {area}
              </span>
            ))}
          </div>
          <p className="text-gray mt-8 text-sm">
            Plus telehealth services available throughout Florida.{" "}
            <Link href="/contact" className="text-blue font-semibold hover:text-orange transition-colors">
              Check if we serve your area →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner variant="orange" />
    </>
  );
}
