import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "blue" | "orange";
}

export default function CTABanner({
  title = "Ready to Take the First Step?",
  subtitle = "Every child deserves a chance to thrive. Let us create a personalized plan that meets your child's unique needs.",
  buttonText = "Schedule a Free Consultation",
  buttonHref = "/contact",
  variant = "blue",
}: CTABannerProps) {
  const bg = variant === "blue"
    ? "bg-gradient-to-br from-blue via-blue-dark to-blue"
    : "bg-gradient-to-br from-orange via-orange to-orange-light";

  return (
    <section className={`relative ${bg} overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-[10%] w-20 h-20 bg-white/5 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-8 right-[15%] w-16 h-16 bg-white/5 rounded-xl -rotate-6 animate-float-slow" />
        <div className="absolute top-1/2 left-[60%] w-10 h-10 bg-yellow/10 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-4 left-[30%] w-14 h-14 bg-white/5 rounded-2xl rotate-[20deg] animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          {title}
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className={`${
              variant === "blue" ? "btn-primary" : "bg-white text-orange font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all inline-flex items-center gap-2"
            } text-lg`}
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <a
            href="tel:+13057412218"
            className="text-white/90 font-semibold flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Or call (305) 741-2218
          </a>
        </div>
      </div>
    </section>
  );
}
