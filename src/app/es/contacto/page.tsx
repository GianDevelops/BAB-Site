"use client";

import { useState, FormEvent } from "react";

const opcionesSeguros = [
  "Cigna", "Aetna", "Magellan Health", "Anthem BCBS", "AvMed",
  "TRICARE", "Humana", "United Healthcare", "Florida VPK",
  "Step Up for Students", "Otro", "Sin Seguro / Pago Privado",
];

export default function ContactoPage() {
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
          window.gtag("event", "conversion", { send_to: "AW-18074058844/form_submit", event_category: "lead", event_label: "contacto_es_form" });
          window.gtag("event", "generate_lead", { event_category: "form", event_label: "contacto_es_form" });
        }
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Contáctenos</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Dé el Primer Paso por Su Hijo
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para responder sus preguntas y ayudarle a comenzar. Complete el formulario
            o comuníquese directamente, sin compromiso, solo una conversación sobre cómo podemos ayudar.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20">
                <h2 className="text-2xl font-bold text-dark mb-2">Solicite una Consulta Gratuita</h2>
                <p className="text-gray text-sm mb-8">Responderemos dentro de 24 horas. Toda la información es confidencial.</p>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">¡Gracias!</h3>
                    <p className="text-green-700">
                      Hemos recibido su mensaje y nos comunicaremos dentro de 24 horas.
                      Si necesita ayuda inmediata, llámenos al{" "}
                      <a href="tel:+13057412218" className="font-bold underline">(305) 741-2218</a>.
                    </p>
                  </div>
                ) : (
                  <form name="contacto-es" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="form-name" value="contacto-es" />
                    <p className="hidden"><label>No llene esto: <input name="bot-field" /></label></p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="parentName" className="block text-sm font-semibold text-dark mb-2">Nombre del Padre/Tutor *</label>
                        <input id="parentName" name="parentName" type="text" required className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50" placeholder="Su nombre completo" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Correo Electrónico *</label>
                        <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50" placeholder="correo@ejemplo.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">Teléfono *</label>
                        <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50" placeholder="(305) 000-0000" />
                      </div>
                      <div>
                        <label htmlFor="childAge" className="block text-sm font-semibold text-dark mb-2">Edad del Niño</label>
                        <input id="childAge" name="childAge" type="text" className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50" placeholder="ej., 4 años" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-semibold text-dark mb-2">Proveedor de Seguro</label>
                        <select id="insurance" name="insurance" className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark">
                          <option value="">Seleccione su seguro</option>
                          {opcionesSeguros.map((ins) => (<option key={ins} value={ins}>{ins}</option>))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">Servicio de Interés</label>
                        <select id="service" name="service" className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark">
                          <option value="">Seleccione un servicio</option>
                          <option value="Terapia ABA en el Hogar">Terapia ABA en el Hogar</option>
                          <option value="Grupos de Habilidades Sociales">Grupos de Habilidades Sociales</option>
                          <option value="Entrenamiento para Padres">Entrenamiento para Padres</option>
                          <option value="Consulta Escolar">Consulta Escolar</option>
                          <option value="Tutoría">Tutoría</option>
                          <option value="Telesalud">Servicios de Telesalud</option>
                          <option value="No Estoy Seguro">No Estoy Seguro — Ayúdenme a Decidir</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">Cuéntenos Sobre Su Hijo</label>
                      <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-blue-light/40 bg-warm-white text-dark placeholder:text-gray/50 resize-none" placeholder="Comparta lo que desee: diagnóstico, desafíos actuales, metas o preguntas..." />
                    </div>

                    <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center text-lg disabled:opacity-60">
                      {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
                    </button>

                    {status === "error" && (
                      <p className="text-red-600 text-sm text-center">Algo salió mal. Intente de nuevo o llámenos al (305) 741-2218.</p>
                    )}
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-blue rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Comuníquese Directamente</h3>
                <div className="space-y-5">
                  <a href="tel:+13057412218" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">(305) 741-2218</p>
                      <p className="text-white/60 text-sm">Llame o envíe un mensaje</p>
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
                      <p className="text-white/60 text-sm">Respondemos en 24 horas</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Lun – Sáb, 9 AM – 8 PM</p>
                      <p className="text-white/60 text-sm">Horario extendido para su conveniencia</p>
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
                <h3 className="text-lg font-bold text-dark mb-3">¿Refiriendo a un Niño?</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  Recibimos referidos de médicos, neurólogos, psicólogos y otros proveedores de salud.
                  Contáctenos directamente para un proceso de admisión simplificado.
                </p>
                <a href="mailto:info@buildablocktherapy.com" className="text-orange font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Enviar un Referido
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20">
                <h3 className="text-lg font-bold text-dark mb-3">Becas y Subvenciones</h3>
                <p className="text-gray text-sm leading-relaxed mb-4">
                  Hay ayuda financiera disponible. Podemos guiarle a través de opciones como Step Up for Students,
                  becas de Autism Care Today y más.
                </p>
                <p className="text-blue font-semibold text-sm">Pregunte durante su consulta.</p>
              </div>

              {/* Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-sm border border-blue-light/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2!2d-80.3736!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQxJzEyLjAiTiA4MMKwMjInMjUuMCJX!5e0!3m2!1ses!2sus!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Build-A-Block Therapy en Kendall, FL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
