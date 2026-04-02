"use client";

import { useState, useEffect } from "react";

const insuranceOptions = [
  "Cigna", "Aetna", "Magellan Health", "Anthem BCBS", "AvMed",
  "TRICARE", "Humana", "United Healthcare", "Florida VPK",
  "Step Up for Students", "Other", "No Insurance / Self-Pay",
];

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("bab-popup-dismissed")) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("bab-popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
      sessionStorage.setItem("bab-popup-dismissed", "true");
    } catch {
      // Fallback — still show success to not frustrate user
      setSubmitted(true);
    }
  };

  if (!show || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={handleDismiss}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue to-blue-dark p-6 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-white pr-8">
              Get a Free Consultation
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Take the first step — we&apos;ll call you within 24 hours.
            </p>
          </div>

          {/* Body */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">Thank You!</h4>
                <p className="text-gray text-sm">
                  We&apos;ll reach out within 24 hours. Need immediate help?
                  Call <a href="tel:+13057412218" className="text-blue font-bold">(305) 741-2218</a>
                </p>
                <button
                  onClick={handleDismiss}
                  className="mt-4 text-sm text-gray hover:text-dark transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                name="popup-lead"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="popup-lead" />
                <p className="hidden">
                  <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                </p>

                <div>
                  <input
                    name="parentName"
                    type="text"
                    required
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone *"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm transition-all"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email *"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="childAge"
                    type="text"
                    placeholder="Child's Age"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm transition-all"
                  />
                  <select
                    name="insurance"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark text-sm transition-all"
                  >
                    <option value="">Insurance</option>
                    {insuranceOptions.map((ins) => (
                      <option key={ins} value={ins}>{ins}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Request Free Consultation
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                <p className="text-center text-[11px] text-gray/60">
                  Or call us directly at{" "}
                  <a href="tel:+13057412218" className="text-blue font-semibold">(305) 741-2218</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
