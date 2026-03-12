import { motion } from "framer-motion";
import { CheckCircle2, Infinity, Building2, Users, Shield, Code2, GraduationCap, Wrench, RefreshCw, Settings, Rocket, HeadphonesIcon, TestTube, UserCheck } from "lucide-react";
import { useState } from "react";

const items = [
  { label: "Créditos ilimitados", icon: CheckCircle2, category: "acceso" },
  { label: "Capacitación ilimitada", icon: GraduationCap, category: "soporte" },
  { label: "Soporte correctivo ilimitado", icon: Wrench, category: "soporte" },
  { label: "Evolución y actualizaciones", icon: RefreshCw, category: "desarrollo" },
  { label: "Parametrización del aplicativo", icon: Settings, category: "desarrollo" },
  { label: "Pruebas Integrales (Certificación)", icon: TestTube, category: "desarrollo" },
  { label: "Puesta en Producción", icon: Rocket, category: "desarrollo" },
  { label: "Acompañamiento a la operación", icon: UserCheck, category: "soporte" },
  { label: "Empresas ilimitadas", icon: Building2, category: "acceso" },
  { label: "Usuarios ilimitados", icon: Users, category: "acceso" },
  { label: "Licenciamiento incluido", icon: Shield, category: "acceso" },
  { label: "Desarrollos requeridos", icon: Code2, category: "desarrollo" },
];

const categories = [
  { key: "all", label: "Todos" },
  { key: "acceso", label: "Acceso" },
  { key: "soporte", label: "Soporte" },
  { key: "desarrollo", label: "Desarrollo" },
];

const SubscriptionModel = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filtered = activeFilter === "all" ? items : items.filter(i => i.category === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
        >
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-primary to-accent w-full" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Infinity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Servicios Incluidos en la Suscripción
              </h2>
            </div>

            <p className="text-muted-foreground mb-8 max-w-3xl">
              La suscripción mensual ilimitada incluye acceso completo al aplicativo SYSDE SAF+ mientras el servicio esté activo/vigente:
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeFilter === cat.key
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-muted text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Checklist grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {filtered.map((item, i) => {
                const Icon = item.icon;
                const isHovered = hoveredItem === item.label;
                return (
                  <motion.div
                    key={item.label}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-default transition-all duration-300 ${
                      isHovered
                        ? "bg-primary/5 shadow-sm scale-[1.02]"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isHovered
                          ? "bg-primary text-primary-foreground scale-110"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-foreground font-medium">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 pt-6 border-t border-border"
            >
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
                className="flex items-center justify-between"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-primary text-lg">{filtered.length}</span>{" "}
                  {activeFilter === "all" ? "servicios incluidos" : `servicios de ${activeFilter}`}
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 120 }}
                  className="relative"
                >
                  <motion.span
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 hsla(var(--primary), 0)",
                        "0 0 0 8px hsla(var(--primary), 0.15)",
                        "0 0 0 0 hsla(var(--primary), 0)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20"
                  >
                    ✨ Sin costos adicionales
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionModel;