"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const insuranceOptions = [
  "Cigna", "Aetna", "Magellan Health", "Anthem BCBS", "AvMed",
  "TRICARE", "Humana", "United Healthcare", "Florida VPK",
  "Step Up for Students",
];

const text = {
  en: {
    title: "Get a Free Consultation",
    subtitle: "Take the first step — we\u2019ll call you within 24 hours.",
    thankYou: "Thank You!",
    thankYouMsg: "We\u2019ll reach out within 24 hours. Need immediate help?",
    close: "Close",
    name: "Your Name *",
    phone: "Phone *",
    email: "Email *",
    childAge: "Child\u2019s Age",
    insurance: "Insurance",
    otherIns: "Other",
    noIns: "No Insurance / Self-Pay",
    submit: "Request Free Consultation",
    callUs: "Or call us directly at",
  },
  es: {
    title: "Consulta Gratuita",
    subtitle: "D\u00e9 el primer paso — le llamaremos en 24 horas.",
    thankYou: "\u00a1Gracias!",
    thankYouMsg: "Nos comunicaremos en 24 horas. \u00bfNecesita ayuda inmediata?",
    close: "Cerrar",
    name: "Su Nombre *",
    phone: "Tel\u00e9fono *",
    email: "Correo *",
    childAge: "Edad del Ni\u00f1o",
    insurance: "Seguro",
    otherIns: "Otro",
    noIns: "Sin Seguro / Pago Privado",
    submit: "Solicitar Consulta Gratuita",
    callUs: "O ll\u00e1menos directamente al",
  },
};

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname.startsWith("/es");
  const t = isSpanish ? text.es : text.en;

  useEffect(() => {
    if (sessionStorage.getItem("bab-popup-dismissed")) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 30000);

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
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: "AW-18074058844/form_submit", event_category: "lead", event_label: "popup_form" });
        window.gtag("event", "generate_lead", { event_category: "form", event_label: "popup_form" });
      }
    } catch {
      setSubmitted(true);
    }
  };

  if (!show || dismissed) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60] transition-opacity"
        onClick={handleDismiss}
      />

      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto overflow-hidden animate-scale-in">
          <div className="bg-gradient-to-r from-blue to-blue-dark p-6 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              aria-label={t.close}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-white pr-8">{t.title}</h3>
            <p className="text-white/70 text-sm mt-1">{t.subtitle}</p>
          </div>

          <div className="p-6">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">{t.thankYou}</h4>
                <p className="text-gray text-sm">
                  {t.thankYouMsg}{" "}
                  <a href="tel:+13057412218" className="text-blue font-bold">(305) 741-2218</a>
                </p>
                <button onClick={handleDismiss} className="mt-4 text-sm text-gray hover:text-dark transition-colors">
                  {t.close}
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
                <p className="hidden"><label><input name="bot-field" /></label></p>

                <input
                  name="parentName"
                  type="text"
                  required
                  placeholder={t.name}
                  className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder={t.phone}
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t.email}
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    name="childAge"
                    type="text"
                    placeholder={t.childAge}
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 text-sm"
                  />
                  <select
                    name="insurance"
                    className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark text-sm"
                  >
                    <option value="">{t.insurance}</option>
                    {insuranceOptions.map((ins) => (
                      <option key={ins} value={ins}>{ins}</option>
                    ))}
                    <option value="Other">{t.otherIns}</option>
                    <option value="No Insurance">{t.noIns}</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  {t.submit}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                <p className="text-center text-[11px] text-gray/60">
                  {t.callUs}{" "}
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
