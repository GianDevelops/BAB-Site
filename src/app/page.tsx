import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "In-Home ABA Therapy",
    description: "One-on-one therapy in the comfort of your home. We meet your child where they feel safest — creating a natural learning environment that produces lasting results.",
    color: "bg-blue/10 text-blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Social Skills Groups",
    description: "Fun, structured group sessions where children practice communication, friendship-building, and emotional regulation with peers in a supportive setting.",
    color: "bg-orange/10 text-orange",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Parent Training",
    description: "We empower you with proven ABA strategies so you can reinforce your child's progress at home. Because you are your child's greatest advocate.",
    color: "bg-yellow/20 text-dark",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "School Consultation",
    description: "We collaborate with teachers and schools to ensure your child thrives in the classroom — from IEP support to behavior plans and staff training.",
    color: "bg-blue-light/40 text-blue-dark",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Tutoring",
    description: "ABA-based academic support that builds confidence and knowledge. Our one-on-one sessions use positive reinforcement to help your child succeed in school.",
    color: "bg-orange-light/20 text-orange",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Telehealth Services",
    description: "Quality ABA therapy from anywhere. Our virtual sessions bring the same expert care to your screen — perfect for parent training and ongoing support.",
    color: "bg-blue/10 text-blue",
  },
];

const insuranceProviders = [
  { name: "Cigna", color: "#146DA1" },
  { name: "Aetna", color: "#7D3F98" },
  { name: "Magellan Health", color: "#00599C" },
  { name: "Anthem BCBS", color: "#0072CE" },
  { name: "Wellcare", color: "#00843D" },
  { name: "AvMed", color: "#E31837" },
  { name: "TRICARE", color: "#003B71" },
  { name: "Humana", color: "#53B84A" },
  { name: "United Healthcare", color: "#002677" },
  { name: "ComPsych", color: "#005DAA" },
  { name: "Florida VPK", color: "#F7941D" },
  { name: "Step Up for Students", color: "#1B75BB" },
];

const testimonials = [
  {
    quote: "Build-A-Block changed our family's life. Within months, our son was communicating in ways we never thought possible. They don't just treat our child — they treat our whole family.",
    name: "Maria G.",
    role: "Parent of a 5-year-old",
    stars: 5,
  },
  {
    quote: "The team truly cares about every child. Our daughter looks forward to her sessions, and the progress she's made with social skills has been incredible. We finally feel hopeful.",
    name: "David R.",
    role: "Parent of a 7-year-old",
    stars: 5,
  },
  {
    quote: "As a bilingual family, finding a provider who understands our culture was essential. BAB's approach is warm, professional, and so individualized. I recommend them to every parent I know.",
    name: "Carmen L.",
    role: "Parent of a 4-year-old",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What is ABA therapy and how does it help children with autism?",
    a: "Applied Behavior Analysis (ABA) is the gold standard, evidence-based therapy for children with autism spectrum disorder. It uses positive reinforcement and systematic teaching to help children develop communication, social skills, daily living skills, and reduce challenging behaviors. ABA therapy is endorsed by the American Academy of Pediatrics and has decades of research supporting its effectiveness.",
  },
  {
    q: "How early can my child start ABA therapy?",
    a: "Children can begin ABA therapy as early as 14 months old. Research shows that early intervention leads to the best outcomes. The sooner your child begins therapy, the greater the impact on their development. We work with toddlers through teenagers across Miami-Dade and Broward County.",
  },
  {
    q: "Does insurance cover ABA therapy in Florida?",
    a: "Yes! Florida law mandates that most insurance plans cover ABA therapy for children diagnosed with autism. We accept Cigna, Aetna, Anthem BCBS, United Healthcare, Humana, TRICARE, Wellcare, AvMed, Magellan Health, ComPsych, Florida VPK, and Step Up for Students. Our team handles insurance verification to make the process easy for you.",
  },
  {
    q: "What areas in Miami do you serve?",
    a: "We provide in-home ABA therapy throughout Miami-Dade County and Broward County, including Kendall, South Miami, Coral Gables, Doral, Homestead, Miami Beach, Hialeah, Pembroke Pines, Fort Lauderdale, and surrounding communities. We also offer telehealth services statewide.",
  },
  {
    q: "What makes Build-A-Block different from other ABA providers?",
    a: "We believe every child is unique, which is why we never use cookie-cutter programs. Every treatment plan is individualized based on your child's specific strengths, needs, and goals. Our co-founders lead with love and clinical excellence, our BCBAs maintain small caseloads for personalized attention, and we offer bilingual services in English and Spanish.",
  },
  {
    q: "How do I get started with ABA therapy for my child?",
    a: "Getting started is simple: call us at (305) 741-2218 or fill out our contact form for a free consultation. We'll discuss your child's needs, verify your insurance benefits, and guide you through every step of the process. Most families begin therapy within 2-4 weeks of initial contact.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-white via-blue-lightest to-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left content — 7 columns */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                Serving Miami-Dade &amp; Broward County
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-dark leading-[1.1] mb-6">
                Your Child&apos;s{" "}
                <span className="text-blue relative inline-block">
                  Potential
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 C50 2, 150 2, 198 8" stroke="#F16624" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                is Our Promise
              </h1>
              <p className="text-lg sm:text-xl text-gray leading-relaxed mb-8 max-w-xl">
                Compassionate, individualized ABA therapy that helps children with autism thrive —
                in your home, on your schedule, with a team that treats your family like our own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary text-lg">
                  Get a Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:+13057412218" className="btn-outline text-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (305) 741-2218
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray font-medium">5-Star Rated</span>
                </div>
                <div className="w-px h-6 bg-blue-light hidden sm:block" />
                <span className="text-sm text-gray font-medium">10+ Years Experience</span>
                <div className="w-px h-6 bg-blue-light hidden sm:block" />
                <span className="text-sm text-gray font-medium">Bilingual Services</span>
              </div>
            </div>

            {/* Right visual — 5 columns, grid-based blocks (not absolute) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue rounded-3xl shadow-xl shadow-blue/20 p-8 flex items-center justify-center aspect-square animate-float">
                  <div className="text-white text-center">
                    <div className="text-5xl font-bold font-display">10+</div>
                    <div className="text-sm opacity-80 mt-2">Years of Experience</div>
                  </div>
                </div>
                <div className="bg-orange rounded-2xl shadow-lg shadow-orange/20 p-6 flex items-center justify-center aspect-square animate-float-slow mt-8" style={{ animationDelay: "1s" }}>
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold font-display">BCBA</div>
                    <div className="text-xs opacity-80 mt-2">Led Programs</div>
                  </div>
                </div>
                <div className="bg-yellow rounded-2xl shadow-lg shadow-yellow/20 p-6 flex items-center justify-center aspect-square animate-float -mt-4" style={{ animationDelay: "2s" }}>
                  <div className="text-dark text-center">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <div className="text-sm font-bold">Family-Centered</div>
                  </div>
                </div>
                <div className="bg-blue-light rounded-3xl shadow-lg p-6 flex items-center justify-center aspect-square animate-float-slow -mt-4" style={{ animationDelay: "0.5s" }}>
                  <div className="text-blue-dark text-center">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <div className="text-sm font-bold">In-Home Therapy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="w-full">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#FEFCF8" />
          </svg>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Families Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              Built on Love, Backed by Science
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              We know choosing a therapy provider is one of the biggest decisions you&apos;ll make
              for your child. Here&apos;s why families across Miami trust Build-A-Block.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                bg: "bg-blue/10", iconColor: "text-blue", title: "100% Individualized",
                desc: "No cookie-cutter programs here. Every treatment plan is designed specifically for your child's unique strengths and needs.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />,
              },
              {
                bg: "bg-orange/10", iconColor: "text-orange", title: "In Your Home",
                desc: "We come to you. Your child learns in the environment where they feel most comfortable — their own home.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
              },
              {
                bg: "bg-yellow/15", iconColor: "text-dark", title: "Bilingual Team",
                desc: "Fluent in English and Spanish. We ensure nothing is lost in translation when it comes to your child's care.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
              },
              {
                bg: "bg-blue-light/30", iconColor: "text-blue-dark", title: "Family First",
                desc: "We don't just work with your child — we empower your entire family with the tools to support their growth.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-blue-light/20">
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-5`}>
                  <svg className={`w-7 h-7 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-blue-lightest/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              Comprehensive Care, Tailored to Your Child
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              From in-home therapy to telehealth, we offer a complete range of ABA services
              designed to meet your family where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20 card-hover group">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-5">{service.description}</p>
                <Link href="/services" className="text-blue font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary text-lg">
              View All Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-warm-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange/5 rounded-[30px] rotate-12 animate-float" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue/5 rounded-2xl -rotate-6 animate-float-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Parent Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              Hear From Families Like Yours
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20 card-hover relative">
                <div className="absolute top-6 right-8 text-6xl text-blue/10 font-serif leading-none">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray text-sm leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-dark">{t.name}</p>
                  <p className="text-sm text-blue">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ===== */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Insurance Accepted</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              We Work With Your Insurance
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Most insurance plans cover ABA therapy in Florida. We handle the verification
              so you can focus on what matters — your child.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {insuranceProviders.map((provider) => (
              <div key={provider.name} className="bg-white rounded-2xl p-5 flex items-center justify-center shadow-sm border border-blue-light/20 card-hover min-h-[80px]">
                <span
                  className="text-sm font-bold text-center leading-tight"
                  style={{ color: provider.color }}
                >
                  {provider.name}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray text-sm mt-8">
            Don&apos;t see your insurance? <Link href="/contact" className="text-blue font-semibold hover:text-orange transition-colors">Contact us</Link> — we may still be able to help.
          </p>
        </div>
      </section>

      {/* ===== FAQ / AEO ===== */}
      <section className="py-20 bg-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Everything You Need to Know About ABA Therapy
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-blue-light/20 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-dark hover:text-blue transition-colors">
                  <span className="text-left">{faq.q}</span>
                  <svg className="w-5 h-5 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
      </section>

      {/* ===== CTA ===== */}
      <CTABanner />
    </>
  );
}
