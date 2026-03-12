import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const sections = [
  { label: "Presentación", href: "#presentacion" },
  { label: "Solución", href: "#solucion" },
  { label: "Módulos", href: "#modulos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Visión", href: "#vision" },
  { label: "Suscripción", href: "#suscripcion" },
  { label: "Inversión", href: "#propuesta" },
  { label: "Contacto", href: "#contacto" },
];

// Sections with dark/red backgrounds where sidebar text should be white
const darkSections = ["#beneficios", "#vision", "#contacto"];

const ProposalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].href);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].href;

      for (const section of sections) {
        const el = document.querySelector(section.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollY >= top) {
            current = section.href;
          }
        }
      }

      setActiveSection(current);
      setIsOverDark(darkSections.includes(current));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container px-6 h-14 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img
              src={sysdeLogoSrc}
              alt="SYSDE"
              className={`h-7 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </button>
          <div className="hidden md:flex items-center gap-5">
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => scrollTo(s.href)}
                className={`text-xs font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-colors duration-300">
        <nav aria-label="Tabla de contenido" className="flex flex-col gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.href;

            return (
              <button
                key={section.href}
                onClick={() => scrollTo(section.href)}
                className={`group flex items-center justify-end gap-2 transition-all duration-300 ${
                  isOverDark
                    ? isActive ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"
                    : isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`text-[11px] tracking-wide transition-opacity ${
                    isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    isOverDark
                      ? isActive ? "w-8 bg-primary-foreground" : "w-5 bg-primary-foreground/30 group-hover:bg-primary-foreground"
                      : isActive ? "w-8 bg-foreground" : "w-5 bg-border group-hover:bg-foreground"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default ProposalNav;
