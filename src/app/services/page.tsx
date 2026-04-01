import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "ABA Therapy Services in Miami — In-Home, Telehealth & More",
  description:
    "Explore our full range of ABA therapy services: in-home therapy, social skills groups, parent training, school consultation, tutoring, and telehealth. Serving Miami-Dade & Broward County.",
  alternates: { canonical: "https://buildablocktherapy.com/services" },
};

const services = [
  {
    id: "in-home",
    img: "/images/stock/service-inhome.jpg",
    title: "In-Home ABA Therapy",
    tagline: "Where comfort meets clinical excellence",
    description:
      "Our flagship service brings certified therapists directly to your home. Your child learns in the environment where they feel safest, surrounded by the routines and people that matter most to them.",
    details: [
      "One-on-one sessions with a dedicated therapist, starting as early as 14 months",
      "Comprehensive adaptive and behavioral assessments to build a tailored treatment plan",
      "Blend of tabletop academic work, natural environment teaching, and play-based instruction",
      "Focus on communication, daily living skills, social interactions, and behavior reduction",
      "Regular progress reports and plan adjustments as your child grows",
    ],
    color: "blue",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    id: "social-skills",
    img: "/images/stock/service-social.jpg",
    title: "Social Skills Groups",
    tagline: "Building friendships, one step at a time",
    description:
      "Our structured group sessions give children a safe space to practice the social skills that will serve them for a lifetime. Guided by our BCBAs, each group is tailored to the participants' ages and developmental levels.",
    details: [
      "Small groups organized by age and skill level for targeted learning",
      "Practice with communication, turn-taking, empathy, and conflict resolution",
      "Friendship-building activities in a fun, supportive environment",
      "Community outings to generalize skills in real-world settings",
      "Emotional regulation and perspective-taking exercises",
    ],
    color: "orange",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: "parent-training",
    img: "/images/stock/service-parent.jpg",
    title: "Parent Training",
    tagline: "Empowering you to be your child's greatest advocate",
    description:
      "You spend more time with your child than anyone. Our parent training program equips you with the ABA strategies and confidence to support your child's progress every day — not just during therapy sessions.",
    details: [
      "Hands-on coaching in evidence-based ABA techniques you can use at home",
      "Strategies for improving communication and reducing challenging behaviors",
      "Guidance on promoting independence in daily routines",
      "Tools for creating structured, supportive home environments",
      "Ongoing support and check-ins to adapt strategies as your child grows",
    ],
    color: "yellow",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: "school-consultation",
    img: "/images/stock/service-school.jpg",
    title: "School Consultation",
    tagline: "Bridging therapy and education",
    description:
      "We work directly with your child's school to ensure consistency between therapeutic goals and classroom expectations. Our BCBAs collaborate with teachers, aides, and administrators to set your child up for academic and social success.",
    details: [
      "Comprehensive behavioral assessments within the school setting",
      "Teacher and staff training on ABA strategies and behavior management",
      "IEP goal development, implementation support, and progress monitoring",
      "Curriculum modifications tailored to your child's learning style",
      "Social facilitation and peer interaction support during school hours",
    ],
    color: "blue",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: "tutoring",
    img: "/images/stock/service-tutoring.jpg",
    title: "ABA-Based Tutoring",
    tagline: "Learning that builds confidence",
    description:
      "Our tutoring sessions go beyond homework help. Using ABA principles and positive reinforcement, we address the root of academic challenges, building both skills and self-esteem in a supportive one-on-one setting.",
    details: [
      "Individualized sessions targeting specific academic goals",
      "ABA-based teaching methods with positive reinforcement",
      "Focus on building foundational skills and filling learning gaps",
      "Confidence-building approach that celebrates every achievement",
      "Coordination with classroom teachers for consistent support",
    ],
    color: "orange",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "telehealth",
    img: "/images/stock/service-telehealth.jpg",
    title: "Telehealth Services",
    tagline: "Expert care, wherever you are",
    description:
      "Our telehealth platform brings the same quality ABA therapy to your screen. Whether your family needs remote parent training, direct therapy sessions, or virtual social skills groups, we maintain continuity of care no matter the circumstances.",
    details: [
      "Live ABA therapy sessions via secure video conferencing",
      "Virtual parent training with real-time coaching and feedback",
      "Online social skills groups connecting children across the state",
      "Flexible scheduling that fits your family's lifestyle",
      "Available throughout the state of Florida",
    ],
    color: "blue",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

const approaches = [
  { name: "Discrete Trial Training (DTT)", desc: "Structured, systematic teaching that breaks skills into small, manageable steps." },
  { name: "Natural Environment Teaching", desc: "Learning through everyday activities and play for real-world skill application." },
  { name: "Joint Attention Training", desc: "Building foundational social-communication skills like shared focus and gaze-following." },
  { name: "Token Economy Systems", desc: "Motivating positive behaviors through reward-based reinforcement programs." },
  { name: "Picture Activity Schedules", desc: "Visual supports that help children independently navigate routines and transitions." },
  { name: "Functional Behavior Assessment", desc: "Identifying the root causes of challenging behaviors to develop effective interventions." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-blue-lightest overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[8%] w-20 h-20 bg-orange/6 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-blue/6 rounded-xl -rotate-6 animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Comprehensive <span className="text-blue">ABA Therapy</span> Services
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every service we offer is designed around one goal: helping your child reach their fullest potential
            through evidence-based, compassionate care.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-6 text-${service.color}`}>
                  {service.icon}
                </div>
                <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">{service.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-5">{service.title}</h2>
                <p className="text-gray leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Service image */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Evidence-Based Treatment Methods
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Our BCBAs draw from a toolkit of proven ABA methodologies, selecting the right combination
              for each child&apos;s unique learning profile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-light/20 card-hover">
                <div className="w-10 h-10 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-blue font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{approach.name}</h3>
                <p className="text-gray text-sm leading-relaxed">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service is Right for Your Child?"
        subtitle="Our team will help you find the perfect fit. Schedule a free consultation and let's talk about your child's unique needs."
      />
    </>
  );
}
