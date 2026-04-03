import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Analistas de Comportamiento Certificados en Kendall, FL",
  description:
    "Conozca al equipo de Build-A-Block Therapy en Kendall, FL. Co-fundada por Kristel Arauz, BCBA, y Ana Jacome, BS, con más de 17 años combinados de experiencia en terapia ABA para familias en Miami-Dade.",
  alternates: { canonical: "https://buildablocktherapy.com/es/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Inicio", href: "/es" }, { name: "Sobre Nosotros", href: "/es/nosotros" }]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-lightest via-warm-white to-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Donde el <span className="text-blue">Potencial</span> de Cada Niño es Cultivado
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Build-A-Block fue fundada con una creencia simple: cada niño merece ser tratado con amor,
            comprensión y un plan tan único como ellos.
          </p>
        </div>
      </section>

      {/* Misión */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">Nuestra Misión</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-6">
                Más Que Terapia — Una Alianza Con Su Familia
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                En Build-A-Block, no creemos en soluciones genéricas. Cada niño que ingresa a nuestro programa
                recibe un plan de tratamiento diseñado específicamente para él, construido alrededor de sus fortalezas,
                sus desafíos y las metas que más importan a su familia.
              </p>
              <p className="text-gray leading-relaxed mb-6">
                Nuestro equipo combina experiencia clínica con compasión genuina. No somos solo terapeutas —
                nos convertimos en parte del sistema de apoyo de su hijo, guiándolo a través de logros grandes y pequeños.
              </p>
              <p className="text-gray leading-relaxed">
                Desde el momento en que nos contacta, sentirá la diferencia. Nos encargamos de la verificación del seguro,
                coordinamos con la escuela de su hijo y lo mantenemos informado en cada paso del camino. Porque cuando
                su familia se siente apoyada, su hijo prospera.
              </p>
              <Link href="/es/servicios" className="text-blue font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-4">
                Explore nuestros servicios
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "bg-blue", text: "Compasión", desc: "Cada interacción está enraizada en cuidado y comprensión genuinos." },
                { color: "bg-orange", text: "Excelencia", desc: "Métodos basados en evidencia proporcionados por profesionales certificados." },
                { color: "bg-yellow", text: "Individualidad", desc: "No hay dos niños iguales — no hay dos planes de tratamiento que deban serlo." },
                { color: "bg-blue-light", text: "Familia", desc: "Empoderamos a toda la familia, no solo al niño bajo nuestro cuidado." },
              ].map((v, i) => (
                <div key={i} className={`${v.color} rounded-3xl p-6 text-white shadow-lg card-hover ${i % 2 === 1 ? "mt-8" : ""}`}>
                  <h3 className={`text-lg font-bold mb-2 ${v.color === "bg-yellow" || v.color === "bg-blue-light" ? "text-dark" : ""}`}>{v.text}</h3>
                  <p className={`text-sm leading-relaxed ${v.color === "bg-yellow" || v.color === "bg-blue-light" ? "text-dark/70" : "text-white/80"}`}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Nuestros Fundadores</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Liderados por Pasión, Guiados por Experiencia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20 card-hover">
              <img src="/images/kristel-arauz.jpg" alt="Kristel Arauz, MS, BCBA — Co-Fundadora de Build-A-Block Therapy en Kendall, FL" className="w-28 h-28 rounded-2xl object-cover mb-6 shadow-md" />
              <h3 className="text-2xl font-bold text-dark mb-1">Kristel Arauz, MS, BCBA</h3>
              <p className="text-blue font-semibold mb-4">Co-Fundadora</p>
              <p className="text-gray leading-relaxed mb-4">
                Con más de 10 años de experiencia trabajando con niños y adultos con discapacidades del desarrollo,
                Kristel aporta una profundidad de conocimiento clínico igualada solo por su calidez. Posee una maestría
                en Análisis de Comportamiento Aplicado de la Universidad Western New England y una licenciatura en
                Psicología de la Universidad de Florida.
              </p>
              <p className="text-gray leading-relaxed mb-4">
                Antes de fundar Build-A-Block, Kristel trabajó en el reconocido New England Center for Children (NECC)
                y pasó tiempo en Abu Dhabi capacitando educadores en principios ABA, aportando una perspectiva internacional
                a su práctica.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Certificada (BCBA)", "10+ Años de Experiencia", "Bilingüe", "Especialista en IEP", "Intervención Temprana"].map((tag) => (
                  <span key={tag} className="bg-blue/10 text-blue text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-blue-light/20 card-hover">
              <img src="/images/ana-jacome.jpg" alt="Ana Jacome, BS — Co-Fundadora de Build-A-Block Therapy en Kendall, FL" className="w-28 h-28 rounded-2xl object-cover mb-6 shadow-md" />
              <h3 className="text-2xl font-bold text-dark mb-1">Ana Jacome, BS</h3>
              <p className="text-orange font-semibold mb-4">Co-Fundadora</p>
              <p className="text-gray leading-relaxed mb-4">
                Ana aporta más de 10 años de experiencia práctica trabajando con niños y adolescentes en el espectro autista.
                Posee una licenciatura en Biología de Florida International University y ha dedicado su carrera a profundizar
                su experiencia en Análisis de Comportamiento Aplicado en entornos clínicos, en el hogar, comunitarios y escolares.
              </p>
              <p className="text-gray leading-relaxed mb-4">
                Como co-fundadora, Ana supervisa las operaciones diarias, el desarrollo del personal y el aseguramiento de calidad,
                garantizando que cada familia reciba la atención personalizada y el cuidado excepcional que merece.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Licenciatura en Ciencias", "10+ Años de Experiencia", "Operaciones y Calidad", "Desarrollo de Personal", "Experta Multi-Entorno"].map((tag) => (
                  <span key={tag} className="bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Áreas Que Servimos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-10">
            Llevando Terapia ABA de Calidad a Todo el Sur de Florida
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Kendall", "South Miami", "Coral Gables", "Doral", "Homestead", "Miami Beach", "Hialeah", "Miami Lakes", "Cutler Bay", "Pinecrest"].map((area) => (
              <span key={area} className="bg-white px-5 py-3 rounded-full text-sm font-semibold text-dark shadow-sm border border-blue-light/20">
                {area}
              </span>
            ))}
          </div>
          <p className="text-gray mt-8 text-sm">
            También ofrecemos servicios de telesalud en todo Florida.{" "}
            <Link href="/es/contacto" className="text-blue font-semibold hover:text-orange transition-colors">
              Verifique si servimos su área →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        title="¿Listo Para Dar el Primer Paso?"
        subtitle="Cada niño merece la oportunidad de prosperar. Permítanos crear un plan personalizado para su hijo."
        buttonText="Solicite una Consulta Gratuita"
        buttonHref="/es/contacto"
        variant="orange"
      />
    </>
  );
}
