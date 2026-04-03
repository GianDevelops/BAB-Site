import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Servicios de Terapia ABA en Kendall y Miami — En el Hogar, Telesalud y Más",
  description:
    "Explore nuestros servicios de terapia ABA en Kendall y Miami-Dade: terapia en el hogar, grupos de habilidades sociales, entrenamiento para padres, consulta escolar, tutoría y telesalud. Llame al (305) 741-2218.",
  alternates: { canonical: "https://buildablocktherapy.com/es/servicios" },
};

const servicios = [
  {
    id: "en-el-hogar",
    img: "/images/stock/service-inhome.jpg",
    title: "Terapia ABA en el Hogar",
    tagline: "Donde la comodidad se encuentra con la excelencia clínica",
    description: "Nuestro servicio principal lleva terapeutas certificados directamente a su hogar. Su hijo aprende en el entorno donde se siente más seguro, rodeado de las rutinas y personas que más le importan.",
    details: [
      "Sesiones individuales con un terapeuta dedicado, comenzando desde los 14 meses",
      "Evaluaciones adaptativas y conductuales integrales para crear un plan personalizado",
      "Combinación de trabajo académico, enseñanza en ambiente natural e instrucción basada en el juego",
      "Enfoque en comunicación, habilidades de vida diaria, interacciones sociales y reducción de comportamientos",
      "Informes de progreso regulares y ajustes al plan a medida que su hijo crece",
    ],
  },
  {
    id: "habilidades-sociales",
    img: "/images/stock/service-social.jpg",
    title: "Grupos de Habilidades Sociales",
    tagline: "Construyendo amistades, paso a paso",
    description: "Nuestras sesiones grupales estructuradas brindan a los niños un espacio seguro para practicar las habilidades sociales que les servirán de por vida. Guiados por nuestros BCBAs, cada grupo está adaptado a las edades y niveles de desarrollo de los participantes.",
    details: [
      "Grupos pequeños organizados por edad y nivel de habilidad para aprendizaje dirigido",
      "Práctica de comunicación, turnos, empatía y resolución de conflictos",
      "Actividades de construcción de amistades en un entorno divertido y de apoyo",
      "Salidas comunitarias para generalizar habilidades en entornos del mundo real",
      "Ejercicios de regulación emocional y toma de perspectiva",
    ],
  },
  {
    id: "entrenamiento-padres",
    img: "/images/stock/service-parent.jpg",
    title: "Entrenamiento para Padres",
    tagline: "Empoderándole para ser el mayor defensor de su hijo",
    description: "Usted pasa más tiempo con su hijo que nadie. Nuestro programa de entrenamiento para padres le equipa con las estrategias ABA y la confianza para apoyar el progreso de su hijo todos los días, no solo durante las sesiones de terapia.",
    details: [
      "Coaching práctico en técnicas ABA basadas en evidencia que puede usar en casa",
      "Estrategias para mejorar la comunicación y reducir comportamientos desafiantes",
      "Orientación para promover la independencia en rutinas diarias",
      "Herramientas para crear entornos hogareños estructurados y de apoyo",
      "Apoyo continuo y seguimiento para adaptar estrategias a medida que su hijo crece",
    ],
  },
  {
    id: "consulta-escolar",
    img: "/images/stock/service-school.jpg",
    title: "Consulta Escolar",
    tagline: "Uniendo la terapia y la educación",
    description: "Trabajamos directamente con la escuela de su hijo para asegurar consistencia entre los objetivos terapéuticos y las expectativas del aula. Nuestros BCBAs colaboran con maestros, asistentes y administradores para preparar a su hijo para el éxito académico y social.",
    details: [
      "Evaluaciones conductuales integrales dentro del entorno escolar",
      "Capacitación de maestros y personal en estrategias ABA y manejo de comportamiento",
      "Desarrollo de metas IEP, apoyo en implementación y monitoreo de progreso",
      "Modificaciones curriculares adaptadas al estilo de aprendizaje de su hijo",
      "Facilitación social y apoyo en interacciones con compañeros durante el horario escolar",
    ],
  },
  {
    id: "tutoria",
    img: "/images/stock/service-tutoring.jpg",
    title: "Tutoría Basada en ABA",
    tagline: "Aprendizaje que construye confianza",
    description: "Nuestras sesiones de tutoría van más allá de la ayuda con tareas. Usando principios ABA y refuerzo positivo, abordamos la raíz de los desafíos académicos, construyendo tanto habilidades como autoestima en un entorno individual de apoyo.",
    details: [
      "Sesiones individualizadas dirigidas a metas académicas específicas",
      "Métodos de enseñanza basados en ABA con refuerzo positivo",
      "Enfoque en construir habilidades fundamentales y cerrar brechas de aprendizaje",
      "Enfoque que construye confianza y celebra cada logro",
      "Coordinación con maestros del aula para apoyo consistente",
    ],
  },
  {
    id: "telesalud",
    img: "/images/stock/service-telehealth.jpg",
    title: "Servicios de Telesalud",
    tagline: "Atención experta, donde sea que esté",
    description: "Nuestra plataforma de telesalud brinda la misma calidad de terapia ABA a su pantalla. Ya sea que su familia necesite entrenamiento remoto para padres, sesiones de terapia directa o grupos virtuales de habilidades sociales, mantenemos la continuidad del cuidado sin importar las circunstancias.",
    details: [
      "Sesiones de terapia ABA en vivo por videoconferencia segura",
      "Entrenamiento virtual para padres con coaching y retroalimentación en tiempo real",
      "Grupos de habilidades sociales en línea conectando niños en todo el estado",
      "Programación flexible que se adapta al estilo de vida de su familia",
      "Disponible en todo el estado de Florida",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Inicio", href: "/es" }, { name: "Servicios", href: "/es/servicios" }]} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream via-warm-white to-blue-lightest overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Nuestros Servicios</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-3 mb-6">
            Servicios Integrales de <span className="text-blue">Terapia ABA</span>
          </h1>
          <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada servicio que ofrecemos está diseñado alrededor de un objetivo: ayudar a su hijo a alcanzar
            su máximo potencial a través de atención compasiva basada en evidencia.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
          {servicios.map((servicio, i) => (
            <div key={servicio.id} id={servicio.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">{servicio.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-5">{servicio.title}</h2>
                <p className="text-gray leading-relaxed mb-6">{servicio.description}</p>
                <ul className="space-y-3 mb-8">
                  {servicio.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray text-sm leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/es/contacto" className="btn-primary">
                  Comenzar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                <div className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={servicio.img} alt={`${servicio.title} en Kendall y Miami, FL - Build-A-Block Therapy`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="¿No Está Seguro Cuál Servicio es el Adecuado?"
        subtitle="Nuestro equipo le ayudará a encontrar la mejor opción. Programe una consulta gratuita y hablemos sobre las necesidades de su hijo."
        buttonText="Solicite una Consulta Gratuita"
        buttonHref="/es/contacto"
      />
    </>
  );
}
