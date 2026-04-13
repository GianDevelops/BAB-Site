"use client";

import { useState, FormEvent } from "react";

const insuranceOptions = [
  "Cigna", "Aetna", "Florida Blue", "Anthem BCBS", "AvMed",
  "Oscar Health", "Humana", "United Healthcare", "Florida VPK",
  "Step Up for Students", "Other", "No Insurance / Self-Pay",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "conversion", { send_to: "AW-18074058844/TEv8CMe_spscENyAsapD", event_category: "lead", event_label: "contact_form" });
          window.gtag("event", "generate_lead", { event_category: "form", event_label: "contact_form" });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-20 h-20 bg-orange/6 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-[15%] left-[8%] w-16 h-16 bg-blue/6 rounded-xl -rotate-6 animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Take the First Step for Your Child
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re here to answer your questions and help you get started. Fill out the form below
            or reach out directly, there&apos;s no obligation, just a conversation about how we can help.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20">
                <h2 className="text-2xl font-bold text-dark mb-2">Request a Free Consultation</h2>
                <p className="text-gray text-sm mb-8">We&apos;ll respond within 24 hours. All information is kept confidential.</p>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      We&apos;ve received your message and will reach out within 24 hours.
                      If you need immediate assistance, call us at{" "}
                      <a href="tel:+13057412218" className="font-bold underline">(305) 741-2218</a>.
                    </p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-semibold text-dark mb-2">
                          Parent/Guardian Name *
                        </label>
                        <input
                          id="parentName"
                          name="parentName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 transition-all"
                          placeholder="(305) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="childAge" className="block text-sm font-semibold text-dark mb-2">
                          Child&apos;s Age
                        </label>
                        <input
                          id="childAge"
                          name="childAge"
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 transition-all"
                          placeholder="e.g., 4 years old"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-semibold text-dark mb-2">
                          Insurance Provider
                        </label>
                        <select
                          id="insurance"
                          name="insurance"
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark transition-all"
                        >
                          <option value="">Select your insurance</option>
                          {insuranceOptions.map((ins) => (
                            <option key={ins} value={ins}>{ins}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="In-Home ABA Therapy">In-Home ABA Therapy</option>
                          <option value="Social Skills Groups">Social Skills Groups</option>
                          <option value="Parent Training">Parent Training</option>
                          <option value="School Consultation">School Consultation</option>
                          <option value="Tutoring">Tutoring</option>
                          <option value="Telehealth">Telehealth Services</option>
                          <option value="Not Sure">Not Sure — Help Me Decide</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                        Tell Us About Your Child
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 transition-all resize-none"
                        placeholder="Share anything you'd like us to know, diagnosis, current challenges, goals, or questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full justify-center text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-600 text-sm text-center">
                        Something went wrong. Please try again or call us at (305) 741-2218.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Get in Touch Directly</h3>
                <div className="space-y-5">
                  <a href="tel:+13057412218" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">(305) 741-2218</p>
                      <p className="text-white/60 text-sm">Call or text us anytime</p>
                    </div>
                  </a>
                  <a href="mailto:info@buildablocktherapy.com" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">info@buildablocktherapy.com</p>
                      <p className="text-white/60 text-sm">We reply within 24 hours</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Mon – Sat, 9 AM – 8 PM</p>
                      <p className="text-white/60 text-sm">Extended hours for your convenience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">7990 SW 117th Ave, Suite 134</p>
                      <p className="text-white/60 text-sm">Kendall, FL 33183</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange/10 rounded-3xl p-8 border border-orange/20">
                <h3 className="text-lg font-bold text-dark mb-3">Referring a Child?</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  We welcome referrals from physicians, neurologists, psychologists, and other healthcare providers.
                  Contact us directly for streamlined intake.
                </p>
                <a href="mailto:info@buildablocktherapy.com" className="text-orange font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Send a Referral
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20">
                <h3 className="text-lg font-bold text-dark mb-3">Scholarships &amp; Grants</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  Financial help is available. We can guide you through options like Step Up for Students,
                  Autism Care Today grants, and more.
                </p>
                <p className="text-blue font-semibold text-sm">Ask us during your consultation.</p>
              </div>

              {/* Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-blue-light/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2!2d-80.3736!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQxJzEyLjAiTiA4MMKwMjInMjUuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Build-A-Block Therapy location in Kendall, FL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
