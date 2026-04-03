"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinksEn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const navLinksEs = [
  { href: "/es", label: "Inicio" },
  { href: "/es/nosotros", label: "Nosotros" },
  { href: "/es/servicios", label: "Servicios" },
  { href: "/es/carreras", label: "Carreras" },
  { href: "/es/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSpanish = pathname.startsWith("/es");
  const navLinks = isSpanish ? navLinksEs : navLinksEn;
  const contactHref = isSpanish ? "/es/contacto" : "/contact";
  const ctaLabel = isSpanish ? "Consulta Gratuita" : "Free Consultation";
  const langToggleHref = isSpanish ? "/" : "/es";
  const langToggleLabel = isSpanish ? "EN" : "ES";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.svg"
              alt="Build-A-Block Therapy - ABA Therapy Provider in Kendall, Miami, FL"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue/10 text-blue"
                    : scrolled
                    ? "text-dark hover:text-blue hover:bg-blue/5"
                    : "text-dark/80 hover:text-blue hover:bg-blue/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href={contactHref} className="btn-primary ml-3 !py-3 !px-6 text-sm">
              {ctaLabel}
            </Link>
          </div>

          {/* Phone + Language toggle - desktop */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:+13057412218"
              className="flex items-center gap-2 text-blue font-bold text-sm hover:text-orange transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (305) 741-2218
            </a>
            <div className="w-px h-5 bg-blue-light" />
            <Link
              href={langToggleHref}
              className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-1 rounded-full hover:bg-blue/20 transition-colors"
            >
              {langToggleLabel}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-dark rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-dark rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-dark rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-blue-light/30 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                pathname === link.href
                  ? "bg-blue/10 text-blue"
                  : "text-dark hover:bg-blue/5 hover:text-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-4 space-y-3">
            <a
              href="tel:+13057412218"
              className="flex items-center gap-2 text-blue font-bold"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (305) 741-2218
            </a>
            <Link href={contactHref} className="btn-primary w-full justify-center text-center">
              {ctaLabel}
            </Link>
            <Link
              href={langToggleHref}
              className="flex items-center justify-center gap-2 text-sm font-bold text-blue bg-blue/10 py-2.5 rounded-2xl hover:bg-blue/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {isSpanish ? "English" : "Español"}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
