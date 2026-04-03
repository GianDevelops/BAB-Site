import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";

const servicios = [
  {
    id: "en-el-hogar",
    title: "Terapia ABA en el Hogar",
    description: "Terapia personalizada en la comodidad de su hogar. Nos reunimos con su hijo donde se siente más seguro, creando un ambiente de aprendizaje natural que produce resultados duraderos.",
  },
  {
    id: "habilidades-sociales",
    title: "Grupos de Habilidades Sociales",
    description: "Sesiones grupales estructuradas y divertidas donde los niños practican comunicación, construcción de amistades y regulación emocional con compañeros en un entorno de apoyo.",
  },
  {
    id: "entrenamiento-padres",
    title: "Entrenamiento para Padres",
    description: "Le empoderamos con estrategias ABA comprobadas para que pueda reforzar el progreso de su hijo en casa. Porque usted es el mayor defensor de su hijo.",
  },
  {
    id: "consulta-escolar",
    title: "Consulta Escolar",
    description: "Colaboramos con maestros y escuelas para asegurar que su hijo prospere en el aula, desde apoyo con IEP hasta planes de comportamiento y capacitación del personal.",
  },
  {
    id: "tutoria",
    title: "Tutoría Basada en ABA",
    description: "Apoyo académico que construye confianza y conocimiento. Nuestras sesiones individuales usan refuerzo positivo para ayudar a su hijo a tener éxito en la escuela.",
  },
  {
    id: "telesalud",
    title: "Servicios de Telesalud",
    description: "Terapia ABA de calidad desde cualquier lugar. Nuestras sesiones virtuales brindan la misma atención experta a su pantalla, perfectas para entrenamiento de padres y apoyo continuo.",
  },
];

const seguros = [
  { name: "Cigna", logo: "/images/insurance/cigna.png" },
  { name: "Aetna", logo: "/images/insurance/aetna.png" },
  { name: "Magellan Health", logo: "/images/insurance/magellan.png" },
  { name: "Anthem BCBS", logo: "/images/insurance/anthem.png" },
  { name: "AvMed", logo: "/images/insurance/avmed.png" },
  { name: "TRICARE", logo: "/images/insurance/tricare.svg" },
  { name: "Humana", logo: "/images/insurance/humana.png" },
  { name: "United Healthcare", logo: "/images/insurance/uhc.png" },
  { name: "Florida VPK", logo: "/images/insurance/vpk.png" },
  { name: "Step Up for Students", logo: "/images/insurance/stepup.svg" },
];

const testimonios = [
  {
    quote: "Build-A-Block cambió la vida de nuestra familia. En pocos meses, nuestro hijo se comunicaba de maneras que nunca pensamos posibles. No solo tratan a nuestro hijo, tratan a toda nuestra familia.",
    name: "Maria G.",
    role: "Madre de un niño de 5 años",
    stars: 5,
  },
  {
    quote: "El equipo realmente se preocupa por cada niño. Nuestra hija espera con ansias sus sesiones, y el progreso que ha logrado con las habilidades sociales ha sido increíble. Finalmente nos sentimos esperanzados.",
    name: "David R.",
    role: "Padre de una niña de 7 años",
    stars: 5,
  },
  {
    quote: "Como familia bilingüe, encontrar un proveedor que entienda nuestra cultura era esencial. El enfoque de BAB es cálido, profesional y muy individualizado. Los recomiendo a todos los padres que conozco.",
    name: "Carmen L.",
    role: "Madre de un niño de 4 años",
    stars: 5,
  },
];

const preguntas = [
  {
    q: "¿Qué es la terapia ABA y cómo ayuda a los niños con autismo?",
    a: "El Análisis de Comportamiento Aplicado (ABA) es la terapia basada en evidencia de referencia para niños con trastorno del espectro autista. Utiliza refuerzo positivo y enseñanza sistemática para ayudar a los niños a desarrollar comunicación, habilidades sociales, habilidades de vida diaria y reducir comportamientos desafiantes. La terapia ABA está respaldada por la Academia Americana de Pediatría y tiene décadas de investigación que respaldan su efectividad.",
  },
  {
    q: "¿A qué edad puede mi hijo comenzar la terapia ABA?",
    a: "Los niños pueden comenzar la terapia ABA desde los 14 meses de edad. Las investigaciones muestran que la intervención temprana produce los mejores resultados. Cuanto antes comience su hijo la terapia, mayor será el impacto en su desarrollo. Trabajamos con niños pequeños hasta adolescentes en todo el condado de Miami-Dade.",
  },
  {
    q: "¿El seguro cubre la terapia ABA en Florida?",
    a: "¡Sí! La ley de Florida exige que la mayoría de los planes de seguro cubran la terapia ABA para niños diagnosticados con autismo. Aceptamos Cigna, Aetna, Anthem BCBS, United Healthcare, Humana, TRICARE, AvMed, Magellan Health, Florida VPK y Step Up for Students. Nuestro equipo se encarga de la verificación del seguro para facilitar el proceso.",
  },
  {
    q: "¿Qué áreas de Miami atienden?",
    a: "Proporcionamos terapia ABA en el hogar en todo el condado de Miami-Dade, incluyendo Kendall, South Miami, Coral Gables, Doral, Homestead, Miami Beach, Hialeah y comunidades circundantes. También ofrecemos servicios de telesalud en todo el estado.",
  },
  {
    q: "¿Qué hace diferente a Build-A-Block de otros proveedores de ABA?",
    a: "Creemos que cada niño es único, por eso nunca usamos programas genéricos. Cada plan de tratamiento está individualizado según las fortalezas, necesidades y metas específicas de su hijo. Nuestros fundadores lideran con amor y excelencia clínica, nuestros BCBAs mantienen caseloads pequeños para atención personalizada y ofrecemos servicios bilingües en inglés y español.",
  },
  {
    q: "¿Cómo empiezo con la terapia ABA para mi hijo?",
    a: "Comenzar es simple: llámenos al (305) 741-2218 o llene nuestro formulario de contacto para una consulta gratuita. Hablaremos sobre las necesidades de su hijo, verificaremos los beneficios de su seguro y lo guiaremos en cada paso del proceso. La mayoría de las familias comienzan la terapia dentro de 2-4 semanas.",
  },
];

export default function PaginaInicio() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Inicio", href: "/es" }]} />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: preguntas.map((p) => ({
              "@type": "Question",
              name: p.q,
              acceptedAnswer: { "@type": "Answer", text: p.a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-white via-blue-lightest to-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 lg:pt-36 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                Sirviendo el condado de Miami-Dade
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-dark leading-[1.1] mb-6">
                El{" "}
                <span className="text-blue relative inline-block">
                  Potencial
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8 C50 2, 150 2, 198 8" stroke="#F16624" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                de Su Hijo es Nuestra Promesa
              </h1>
              <p className="text-lg sm:text-xl text-gray leading-relaxed mb-8 max-w-xl">
                Terapia ABA compasiva e individualizada que ayuda a los niños con autismo a prosperar,
                en su hogar, en su horario, con un equipo que trata a su familia como propia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/es/contacto" className="btn-primary text-lg">
                  Consulta Gratuita
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
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray font-medium">5 Estrellas</span>
                </div>
                <div className="w-px h-6 bg-blue-light hidden sm:block" />
                <span className="text-sm text-gray font-medium">10+ Años de Experiencia</span>
                <div className="w-px h-6 bg-blue-light hidden sm:block" />
                <span className="text-sm text-gray font-medium">Servicios Bilingües</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
                <div className="bg-blue rounded-3xl shadow-xl shadow-blue/20 p-8 flex items-center justify-center aspect-square animate-float">
                  <div className="text-white text-center">
                    <div className="text-5xl font-bold font-display">10+</div>
                    <div className="text-sm opacity-80 mt-2">Años de Experiencia</div>
                  </div>
                </div>
                <div className="bg-orange rounded-2xl shadow-lg shadow-orange/20 p-6 flex items-center justify-center aspect-square animate-float-slow mt-8">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold font-display">BCBA</div>
                    <div className="text-xs opacity-80 mt-2">Programas Certificados</div>
                  </div>
                </div>
                <div className="bg-yellow rounded-2xl shadow-lg shadow-yellow/20 p-6 flex items-center justify-center aspect-square animate-float -mt-4">
                  <div className="text-dark text-center">
                    <div className="text-sm font-bold">Centrado en la Familia</div>
                  </div>
                </div>
                <div className="bg-blue-light rounded-3xl shadow-lg p-6 flex items-center justify-center aspect-square animate-float-slow -mt-4">
                  <div className="text-blue-dark text-center">
                    <div className="text-sm font-bold">Terapia en el Hogar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#FEFCF8" />
          </svg>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-blue-lightest/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-5">
              Atención Integral, Diseñada para Su Hijo
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              Desde terapia en el hogar hasta telesalud, ofrecemos una gama completa de servicios ABA
              diseñados para atender a su familia donde esté.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blue-light/20 card-hover">
                <h3 className="text-xl font-bold text-dark mb-3">{servicio.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-5">{servicio.description}</p>
                <Link href="/es/servicios" className="text-blue font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Más Información
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Lo Que Dicen las Familias
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((t, i) => (
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
                <p className="font-bold text-dark">{t.name}</p>
                <p className="text-sm text-blue">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGUROS */}
      <section className="py-20 bg-gradient-to-b from-warm-white to-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Seguros Aceptados</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Trabajamos Con Su Seguro
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto">
              La mayoría de los planes de seguro cubren la terapia ABA en Florida. Nosotros nos encargamos
              de la verificación para que usted se concentre en lo que importa: su hijo.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {seguros.map((provider) => (
              <div key={provider.name} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-sm border border-blue-light/20 card-hover min-h-[100px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logo} alt={`${provider.name} logo`} className="h-8 w-auto object-contain max-w-[120px]" loading="lazy" />
                <span className="text-[11px] font-semibold text-gray text-center leading-tight">{provider.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray text-sm mt-8">
            ¿No ve su seguro? <Link href="/es/contacto" className="text-blue font-semibold hover:text-orange transition-colors">Contáctenos</Link>, es posible que podamos ayudarle.
          </p>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">Preguntas Frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Todo Lo Que Necesita Saber Sobre la Terapia ABA
            </h2>
          </div>
          <div className="space-y-4">
            {preguntas.map((faq, i) => (
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
      </section>

      {/* CTA */}
      <CTABanner
        title="¿Listo Para Dar el Primer Paso?"
        subtitle="Cada niño merece la oportunidad de prosperar. Permítanos crear un plan personalizado que satisfaga las necesidades únicas de su hijo."
        buttonText="Solicite una Consulta Gratuita"
        buttonHref="/es/contacto"
      />
    </>
  );
}
