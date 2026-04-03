import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Carreras — Empleos de BCBA y RBT en Kendall y Miami, FL",
  description:
    "Únase a Build-A-Block Therapy en Kendall, FL. Estamos contratando BCBAs y RBTs para brindar terapia ABA a niños con autismo en Miami-Dade. Pago competitivo, capacitación mensual, horario flexible.",
  alternates: { canonical: "https://buildablocktherapy.com/es/carreras" },
};

const posiciones = [
  {
    title: "Analista de Comportamiento Certificado (BCBA)",
    type: "Tiempo Completo",
    description:
      "Lidere programas ABA individualizados, supervise RBTs, realice evaluaciones y colabore con familias. Mantendrá un caseload manejable para poder brindar a cada familia la atención que merece.",
    requirements: [
      "Certificación BCBA activa y vigente",
      "Maestría en ABA, Psicología o campo relacionado",
      "Experiencia trabajando con niños con trastorno del espectro autista",
      "Fuertes habilidades de comunicación y enfoque compasivo",
      "Bilingüe (inglés/español) preferido pero no requerido",
    ],
  },
  {
    title: "Técnico de Comportamiento Registrado (RBT)",
    type: "Tiempo Completo / Medio Tiempo",
    description:
      "Brinde sesiones individuales de terapia ABA bajo la supervisión de un BCBA. Trabajará directamente con niños en sus hogares y comunidades, implementando planes de comportamiento individualizados y celebrando cada logro.",
    requirements: [
      "Certificación RBT activa (o disposición para obtenerla en 30 días)",
      "Diploma de secundaria requerido; licenciatura preferida",
      "Experiencia con niños, especialmente con discapacidades del desarrollo",
      "Transporte confiable para sesiones en el hogar en Miami-Dade",
      "Paciencia, creatividad y amor genuino por trabajar con niños",
    ],
  },
];

const beneficios = [
  {
    title: "Capacitación Mensual",
    desc: "Oportunidades continuas de CEU y desarrollo profesional para mantener sus habilidades actualizadas.",
    bg: "bg-blue/10", color: "text-blue",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 27V7a2 2 0 012-2h14a2 2 0 012 2v20" /><path d="M5 27h18" /><path d="M9 11h8M9 15h6M9 19h4" /><path d="M25 10c1.5 0 3 1 3 3v11c0 2-1.5 3-3 3H5" />
      </svg>
    ),
  },
  {
    title: "Cultura Familiar",
    desc: "No somos solo compañeros de trabajo — somos una familia que celebra los logros de cada uno.",
    bg: "bg-orange/10", color: "text-orange",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="8" r="3.5" /><circle cx="7" cy="12" r="2.5" /><circle cx="25" cy="12" r="2.5" /><path d="M10 28v-6a6 6 0 0112 0v6" /><path d="M4 28v-4a3.5 3.5 0 015-3" /><path d="M28 28v-4a3.5 3.5 0 00-5-3" />
      </svg>
    ),
  },
  {
    title: "Crecimiento Profesional",
    desc: "Caminos claros para el avance, mentoría de BCBAs experimentados y capacitación mensual.",
    bg: "bg-yellow/15", color: "text-dark",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26l7-7 5 4 8-10 4-4" /><path d="M22 9h6v6" />
      </svg>
    ),
  },
  {
    title: "Horario Flexible",
    desc: "El equilibrio entre trabajo y vida importa. Ofrecemos horas flexibles que se adaptan a su estilo de vida.",
    bg: "bg-blue-light/30", color: "text-blue-dark",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="3" /><path d="M4 13h24" /><path d="M10 3v5M22 3v5" /><circle cx="16" cy="20" r="1.5" fill="currentColor" /><circle cx="10" cy="20" r="1.5" fill="currentColor" /><circle cx="22" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Pago Competitivo y Beneficios",
    desc: "Compensación que refleja su experiencia, con aumentos regulares basados en rendimiento.",
    bg: "bg-orange/10", color: "text-orange",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" /><path d="M19 12c-.5-1.5-2-2-3.5-2-2 0-3.5 1.2-3.5 3s1.5 2.5 3.5 3c2 .5 3.5 1.5 3.5 3s-1.5 3-3.5 3c-1.5 0-3-.5-3.5-2" /><path d="M16 8v2M16 22v2" />
      </svg>
    ),
  },
  {
    title: "Trabajo Significativo",
    desc: "Cada día verá el impacto directo de su trabajo en la vida de un niño. Eso no tiene precio.",
    bg: "bg-blue/10", color: "text-blue",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28s-11-6.5-11-14.5C5 8.5 8 5 12 5c2.2 0 3.7 1.2 4 1.5C16.3 6.2 17.8 5 20 5c4 0 7 3.5 7 8.5C27 21.5 16 28 16 28z" /><path d="M12 15l3 3 5-6" />
      </svg>
    ),
  },
];

export default function CarrerasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Inicio", href: "/es" }, { name: "Carreras", href: "/es/carreras" }]} />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-blue-lightest overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Carreras</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Haga una <span className="text-blue">Diferencia</span> Cada Día
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Únase a un equipo donde su trabajo cambia directamente la vida de los niños. En Build-A-Block,
            invertimos en nuestra gente porque sabemos que grandes terapeutas crean grandes resultados.
          </p>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Por Qué Trabajar Con Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">Un Lugar de Trabajo Que Se Siente Como Familia</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 shadow-sm border border-blue-light/20 card-hover">
                <div className={`w-14 h-14 ${b.bg} rounded-full flex items-center justify-center mb-4 ${b.color}`}>{b.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{b.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posiciones */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Posiciones Abiertas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">Oportunidades Actuales</h2>
          </div>
          <div className="space-y-6">
            {posiciones.map((pos, i) => (
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
                  <h4 className="font-bold text-dark mb-3">Lo Que Buscamos:</h4>
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
                  <a href="mailto:info@buildablocktherapy.com?subject=Aplicación: {{pos.title}}" className="btn-primary">
                    Aplicar Ahora
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-3xl p-10 shadow-sm border border-blue-light/20">
            <h3 className="text-2xl font-bold text-dark mb-3">¿No Ve Su Puesto?</h3>
            <p className="text-gray mb-6 max-w-lg mx-auto">
              Siempre estamos abiertos a escuchar de profesionales apasionados. Envíenos su currículum
              y díganos cómo le gustaría hacer un impacto.
            </p>
            <a href="mailto:info@buildablocktherapy.com?subject=Aplicación General" className="btn-secondary">
              Enviar Su Currículum
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
