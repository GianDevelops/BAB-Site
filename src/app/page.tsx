import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    id: "in-home",
    img: "/images/services/in-home.jpg",
    title: "In-Home ABA Therapy",
    description: "One-on-one therapy in the comfort of your home. We meet your child where they feel safest, creating a natural learning environment that produces lasting results.",
  },
  {
    id: "social-skills",
    img: "/images/services/social-skills.jpg",
    title: "Social Skills Groups",
    description: "Fun, structured group sessions where children practice communication, friendship-building, and emotional regulation with peers in a supportive setting.",
  },
  {
    id: "parent-training",
    img: "/images/services/parent-training.jpg",
    title: "Parent Training",
    description: "We empower you with proven ABA strategies so you can reinforce your child's progress at home. Because you are your child's greatest advocate.",
  },
  {
    id: "school-consultation",
    img: "/images/services/school-consultation.jpg",
    title: "School Consultation",
    description: "We collaborate with teachers and schools to ensure your child thrives in the classroom, from IEP support to behavior plans and staff training.",
  },
  {
    id: "tutoring",
    img: "/images/services/tutoring.jpg",
    title: "Tutoring",
    description: "ABA-based academic support that builds confidence and knowledge. Our one-on-one sessions use positive reinforcement to help your child succeed in school.",
  },
  {
    id: "telehealth",
    img: "/images/services/telehealth.jpg",
    title: "Telehealth Services",
    description: "Quality ABA therapy from anywhere. Our virtual sessions bring the same expert care to your screen, perfect for parent training and ongoing support.",
  },
];

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
    quote: "Como familia bilingüe, encontrar un proveedor que entienda nuestra cultura era esencial. El enfoque de BAB es cálido, profesional y muy individualizado. Los recomiendo a todos los padres que conozco.",
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
    a: "Children can begin ABA therapy as early as 14 months old. Research shows that early intervention leads to the best outcomes. The sooner your child begins therapy, the greater the impact on their development. We work with toddlers through teenagers across Miami-Dade County.",
  },
  {
    q: "Does insurance cover ABA therapy in Florida?",
    a: "Yes! Florida law mandates that most insurance plans cover ABA therapy for children diagnosed with autism. We accept Cigna, Aetna, Anthem BCBS, United Healthcare, Humana, Oscar Health, AvMed, Florida Blue, Florida VPK, and Step Up for Students. Our team handles insurance verification to make the process easy for you.",
  },
  {
    q: "What areas in Miami do you serve?",
    a: "We provide in-home ABA therapy throughout Miami-Dade County, including Kendall, South Miami, Coral Gables, Doral, Homestead, Miami Beach, Hialeah, and surrounding communities. We also offer telehealth services statewide.",
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left content — 7 columns */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                Serving Miami-Dade County
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
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
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

      {/* ===== OUR SPACE ===== */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Visit Our Clinic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
                A Warm, Safe Space for Your Child
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                Our Kendall clinic was designed with your child in mind. Bright colors, organized play areas,
                and a welcoming atmosphere where children feel comfortable from the moment they walk in.
              </p>
              <div className="flex items-start gap-3 text-sm text-gray">
                <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>7990 SW 117th Ave, Suite 134, Kendall, FL 33183</span>
              </div>
            </div>

            {/* Right — photos */}
            <div className="grid grid-cols-3 gap-3 items-end max-w-md lg:max-w-none lg:scale-110 origin-center">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500 ring-4 ring-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bab-lobby.png" alt="Build-A-Block Therapy lobby in Kendall, FL" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl -translate-y-3 ring-4 ring-white z-10 hover:scale-105 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bab-front-desk.png" alt="Build-A-Block Therapy front desk in Kendall, FL" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 ring-4 ring-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/therapy-room.jpg" alt="Build-A-Block ABA therapy room in Kendall, FL" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Why Families Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              ABA Therapy Built on Love, Backed by Science
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              We know choosing a therapy provider is one of the biggest decisions you&apos;ll make
              for your child. Here&apos;s why families across Miami trust Build-A-Block.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "100% Individualized", desc: "No cookie-cutter programs here. Every treatment plan is designed specifically for your child's unique strengths and needs." },
              { title: "Flexible Settings", desc: "We offer therapy in our Kendall clinic, in your home, at school, or via telehealth — wherever your child learns best." },
              { title: "Bilingual Team", desc: "Fluent in English and Spanish. We ensure nothing is lost in translation when it comes to your child's care." },
              { title: "Family First", desc: "We don't just work with your child — we empower your entire family with the tools to support their growth." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-blue-light/20">
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW ABA WORKS ===== */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              What ABA Therapy Looks Like for Your Child
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Applied Behavior Analysis is the gold standard treatment for children with autism,
              endorsed by the American Academy of Pediatrics and backed by over 50 years of research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Your BCBA conducts a comprehensive evaluation of your child's communication, social skills, daily living abilities, and any challenging behaviors.",
              },
              {
                step: "02",
                title: "Personalized Plan",
                desc: "Based on the assessment, we design a treatment plan with specific, measurable goals chosen because they matter to your family.",
              },
              {
                step: "03",
                title: "ABA Therapy",
                desc: "Sessions use ABA teaching, natural environment learning, and positive reinforcement to make learning engaging and fun.",
              },
              {
                step: "04",
                title: "Data-Driven Progress",
                desc: "We track progress on every goal, every session. You receive regular reports so you always know where things stand.",
              },
              {
                step: "05",
                title: "Family Involvement",
                desc: "We train and support you in the same strategies our therapists use so you can reinforce skills between sessions at home.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 shadow-sm border border-blue-light/20 card-hover">
                <div className="w-10 h-10 bg-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-blue">{item.step}</span>
                </div>
                <h3 className="text-base font-bold text-dark mb-3 whitespace-nowrap">{item.title}</h3>
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
              ABA Therapy Services Tailored to Your Child
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              From in-home therapy to telehealth, we offer a complete range of ABA services
              designed to meet your family where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm border border-blue-light/20 card-hover group overflow-hidden">
                <div className="h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.img}
                    alt={`${service.title} - ABA therapy service in Kendall, FL`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-5">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="text-blue font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
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

      {/* ===== WHO WE HELP ===== */}
      <section className="py-20 bg-warm-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Who We Help</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
                Is ABA Therapy Right for Your Child?
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                Build-A-Block Therapy works with children from 14 months through their teenage years
                who have been diagnosed with or are being evaluated for autism and related developmental challenges.
                If you&apos;re unsure whether your child qualifies, call us for a free consultation — we&apos;ll help you figure it out.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Autism Spectrum Disorder", desc: "Individualized therapy addressing communication, social skills, and behavior." },
                { title: "Speech & Language Delays", desc: "Building functional communication through evidence-based ABA techniques." },
                { title: "Social Difficulties", desc: "Teaching friendship, empathy, turn-taking, and emotional regulation." },
                { title: "Challenging Behaviors", desc: "Replacing aggression, self-injury, or elopement with positive alternatives." },
                { title: "Daily Living Skills", desc: "Building independence in dressing, eating, toileting, and routines." },
                { title: "School Readiness", desc: "Preparing children to succeed in classroom settings with attention and focus skills." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-light/20">
                  <h3 className="font-bold text-dark text-sm mb-2">{item.title}</h3>
                  <p className="text-gray text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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
              What Miami Families Say About Our ABA Therapy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20 card-hover relative flex flex-col">
                <div className="absolute top-6 right-8 text-6xl text-blue/10 font-serif leading-none">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray text-sm leading-relaxed relative z-10 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-bold text-dark">{t.name}</p>
                  <p className="text-sm text-blue">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ===== */}
      <section id="insurance" className="py-20 bg-gradient-to-b from-warm-white to-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Insurance Accepted</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Insurance Accepted for ABA Therapy
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Most insurance plans cover ABA therapy in Florida. We handle the verification
              so you can focus on what matters — your child.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {insuranceProviders.map((provider) => (
              <div key={provider.name} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-blue-light/20 card-hover min-h-[100px]">
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

          {/* Crawlable text for SEO — visually hidden but readable by search engines */}
          <p className="sr-only">
            Build-A-Block Children Therapy Solutions accepts the following insurance providers for ABA therapy in Miami:
            Cigna, Aetna, Florida Blue, Anthem Blue Cross Blue Shield, AvMed, Oscar Health, Humana,
            United Healthcare, Florida VPK, and Step Up for Students.
          </p>

          <p className="text-center text-gray text-sm mt-8">
            Don&apos;t see your insurance? <Link href="/contact" className="text-blue font-semibold hover:text-orange transition-colors">Contact us</Link>, we may still be able to help.
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
