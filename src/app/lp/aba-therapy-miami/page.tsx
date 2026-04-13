"use client";

import { useState, FormEvent } from "react";

const insuranceLogos = [
  { name: "Cigna", logo: "/images/insurance/cigna.png" },
  { name: "Aetna", logo: "/images/insurance/aetna.png" },
  { name: "Anthem BCBS", logo: "/images/insurance/anthem.png" },
  { name: "United Healthcare", logo: "/images/insurance/uhc.png" },
  { name: "Humana", logo: "/images/insurance/humana.png" },
  { name: "Oscar Health", logo: "/images/insurance/oscar.png" },
  { name: "AvMed", logo: "/images/insurance/avmed.png" },
  { name: "Florida Blue", logo: "/images/insurance/floridablue.png" },
];

const insuranceOptions = [
  "Cigna", "Aetna", "Florida Blue", "Anthem BCBS", "AvMed",
  "Oscar Health", "Humana", "United Healthcare", "Florida VPK",
  "Step Up for Students", "Other", "No Insurance / Self-Pay",
];

export default function ABATherapyMiamiLP() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
    } catch {
      // still show success
    }
    setStatus("success");
    form.reset();
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "AW-18074058844/TEv8CMe_spscENyAsapD", event_category: "lead", event_label: "lp_form" });
      window.gtag("event", "generate_lead", { event_category: "form", event_label: "lp_form" });
    }
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Sticky top bar */}
      <div className="bg-blue text-white py-3 px-4 text-center text-sm font-semibold sticky top-0 z-50">
        <a href="tel:+13057412218" className="hover:underline">
          Call Now for a Free Consultation: (305) 741-2218
        </a>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-white via-blue-lightest to-cream py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — Copy */}
            <div>
              <img src="/logo.svg" alt="Build-A-Block Therapy" className="h-14 mb-8" />

              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse" />
                Now Accepting New Clients
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-dark leading-[1.15] mb-5">
                Your Child Deserves ABA Therapy That&apos;s Built Around <span className="text-blue">Them</span>
              </h1>

              <p className="text-gray text-lg leading-relaxed mb-6">
                Individualized, in-home ABA therapy for children with autism in Kendall, Miami,
                and Miami-Dade County. Board-certified therapists. Most insurance accepted.
                Bilingual services available.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { label: "10+ Years Experience", icon: "🏆" },
                  { label: "Board Certified (BCBA)", icon: "✓" },
                  { label: "Bilingual Team", icon: "🌎" },
                  { label: "Most Insurance Accepted", icon: "🛡️" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-blue-light/20">
                    <span className="text-sm">{badge.icon}</span>
                    <span className="text-xs font-semibold text-dark">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray font-medium">5-Star Rated by Miami Families</span>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-light/20 relative">
                <div className="absolute top-4 right-6 text-4xl text-blue/10 font-serif">&ldquo;</div>
                <p className="text-gray text-sm leading-relaxed mb-3 relative z-10">
                  &ldquo;Build-A-Block changed our family&apos;s life. Within months, our son was communicating
                  in ways we never thought possible. They don&apos;t just treat our child — they treat our whole family.&rdquo;
                </p>
                <p className="text-dark font-bold text-sm">Maria G.</p>
                <p className="text-blue text-xs">Parent of a 5-year-old</p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:sticky lg:top-20">
              <div className="bg-white rounded-3xl shadow-xl border border-blue-light/20 overflow-hidden">
                <div className="bg-gradient-to-r from-blue to-blue-dark p-6 text-center">
                  <h2 className="text-xl font-bold text-white">Get Your Free Consultation</h2>
                  <p className="text-white/70 text-sm mt-1">We respond within 24 hours</p>
                </div>

                <div className="p-6">
                  {status === "success" ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2">Thank You!</h3>
                      <p className="text-gray text-sm mb-4">
                        We&apos;ll reach out within 24 hours to discuss your child&apos;s needs.
                      </p>
                      <a href="tel:+13057412218" className="btn-primary justify-center w-full">
                        Call Now: (305) 741-2218
                      </a>
                    </div>
                  ) : (
                    <form
                      name="lp-lead"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="lp-lead" />
                      <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

                      <input
                        name="parentName"
                        type="text"
                        required
                        placeholder="Your Name *"
                        className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone *"
                          className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                        />
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Email *"
                          className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          name="childAge"
                          type="text"
                          placeholder="Child's Age"
                          className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                        />
                        <select
                          name="insurance"
                          className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark text-sm"
                        >
                          <option value="">Insurance</option>
                          {insuranceOptions.map((ins) => (
                            <option key={ins} value={ins}>{ins}</option>
                          ))}
                        </select>
                      </div>

                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about your child (optional)"
                        className="w-full px-4 py-3.5 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm resize-none"
                      />

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary w-full justify-center text-lg !py-4 disabled:opacity-60"
                      >
                        {status === "sending" ? "Sending..." : "Get My Free Consultation"}
                      </button>

                      <p className="text-center text-[11px] text-gray/50">
                        No obligation. We&apos;ll verify your insurance for free.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-14 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-10">
            How We Help Your Child
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Communication & Language", desc: "Helping your child express needs, engage in conversation, and build vocabulary through evidence-based techniques." },
              { title: "Social Skills", desc: "Teaching friendship-building, turn-taking, empathy, and play skills in structured and natural settings." },
              { title: "Daily Living Skills", desc: "Building independence in routines like dressing, eating, toileting, and personal hygiene." },
              { title: "Behavior Reduction", desc: "Replacing challenging behaviors with positive alternatives through compassionate, functional interventions." },
              { title: "School Readiness", desc: "Preparing your child for classroom success with attention, following directions, and academic foundations." },
              { title: "Parent & Family Support", desc: "Empowering you with ABA strategies so you can reinforce your child's progress at home every day." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-light/20">
                <div className="w-10 h-10 bg-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-14 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">We Accept Your Insurance</h2>
          <p className="text-gray mb-8">Most families pay $0 out of pocket. We verify your benefits for free.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {insuranceLogos.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-blue-light/20 min-h-[80px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} className="h-7 w-auto object-contain max-w-[100px]" loading="lazy" />
                <span className="text-[10px] font-semibold text-gray">{p.name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray text-sm">+ Florida VPK, Step Up for Students, and more</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-10">
            What Miami Families Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Within months, our son was communicating in ways we never thought possible. They don't just treat our child — they treat our whole family.", name: "Maria G.", detail: "Parent of a 5-year-old" },
              { quote: "Our daughter looks forward to her sessions, and the progress she's made with social skills has been incredible. We finally feel hopeful.", name: "David R.", detail: "Parent of a 7-year-old" },
              { quote: "Como familia bilingüe, encontrar un proveedor que entienda nuestra cultura era esencial. El enfoque de BAB es cálido, profesional y muy individualizado.", name: "Carmen L.", detail: "Parent of a 4-year-old" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-light/20">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-dark text-sm">{t.name}</p>
                <p className="text-blue text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue to-blue-dark py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Child&apos;s Brighter Future Starts Today
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Call now for a free, no-obligation consultation. We&apos;ll discuss your child&apos;s
            needs and verify your insurance benefits at no cost.
          </p>
          <a href="tel:+13057412218" className="btn-primary text-xl !py-5 !px-10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (305) 741-2218
          </a>
          <p className="text-white/50 text-sm mt-4">
            7990 SW 117th Ave, Suite 134, Kendall, FL 33183 &bull; Mon–Sat 9AM–8PM
          </p>
        </div>
      </section>

      {/* Minimal footer */}
      <div className="bg-dark py-6 px-6 text-center">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} Build-A-Block Children Therapy Solutions Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
