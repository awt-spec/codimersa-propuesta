import { motion } from "framer-motion";
import { Shield, CreditCard, Banknote, Users, Landmark, Lock, BookOpen, Building, Smartphone, PiggyBank } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    name: "Administrativos",
    angle: 0,
    orbitRadius: 200,
    orbitDuration: 90,
    moonOrbit: 55,
    moonDuration: 12,
    modules: [
      { name: "Seguridad", icon: Lock },
      { name: "Reglas de Negocio", icon: BookOpen },
      { name: "Clientes", icon: Users },
      { name: "Contabilidad", icon: Building },
      { name: "Activos Fijos", icon: Shield },
      { name: "Banca Móvil", icon: Smartphone },
    ],
  },
  {
    name: "Colocación",
    angle: 90,
    orbitRadius: 200,
    orbitDuration: 90,
    moonOrbit: 55,
    moonDuration: 14,
    modules: [
      { name: "Préstamos", icon: Landmark },
      { name: "Créditos", icon: CreditCard },
      { name: "Líneas de Crédito", icon: CreditCard },
    ],
  },
  {
    name: "Tesorería",
    angle: 180,
    orbitRadius: 200,
    orbitDuration: 90,
    moonOrbit: 50,
    moonDuration: 10,
    modules: [
      { name: "Bancos", icon: Banknote },
      { name: "Cajas", icon: Banknote },
    ],
  },
  {
    name: "Captación",
    angle: 270,
    orbitRadius: 200,
    orbitDuration: 90,
    moonOrbit: 45,
    moonDuration: 8,
    modules: [
      { name: "Certificados de Depósitos", icon: PiggyBank },
    ],
  },
];

const ModulesSection = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const containerSize = 700;
  const center = containerSize / 2;

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Alcance</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Módulos a rentar
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ecosistema integrado de módulos SYSDE SAF+ para CODIMERSA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-16"
          style={{ width: "100%", maxWidth: containerSize, height: containerSize }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setHoveredModule(null); }}
        >
          {/* Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-foreground/15"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: Math.random() > 0.7 ? 2 : 1,
                  height: Math.random() > 0.7 ? 2 : 1,
                }}
              />
            ))}
          </div>

          {/* Main orbit ring */}
          <div
            className="absolute rounded-full border border-border/20"
            style={{
              width: 400,
              height: 400,
              left: center - 200,
              top: center - 200,
            }}
          />

          {/* Sun - SAF+ */}
          <div className="absolute z-20" style={{ left: center - 50, top: center - 50 }}>
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-[100px] h-[100px] rounded-full bg-gradient-sysde flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                <div className="text-center text-primary-foreground">
                  <p className="text-[10px] font-bold tracking-wider opacity-80">SYSDE</p>
                  <p className="text-lg font-black">SAF+</p>
                </div>
              </div>
              <div className="absolute inset-[-6px] rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute inset-[-14px] rounded-full border border-primary/10" />
            </motion.div>
          </div>

          {/* Planets (categories) with moons (modules) */}
          {categories.map((cat) => {
            const isHoveredPlanet = hoveredModule === cat.name;

            return (
              <motion.div
                key={cat.name}
                className="absolute z-10"
                style={{
                  width: 0,
                  height: 0,
                  left: center,
                  top: center,
                }}
                animate={{
                  rotate: isPaused ? cat.angle : [cat.angle, cat.angle + 360],
                }}
                transition={
                  isPaused
                    ? { duration: 0.8, ease: "easeOut" }
                    : { duration: cat.orbitDuration, repeat: Infinity, ease: "linear" }
                }
              >
                {/* Planet positioned at orbit radius */}
                <div
                  className="absolute"
                  style={{ left: cat.orbitRadius, top: -22 }}
                >
                  {/* Counter-rotate to keep planet upright */}
                  <motion.div
                    animate={{
                      rotate: isPaused ? -cat.angle : [-cat.angle, -(cat.angle + 360)],
                    }}
                    transition={
                      isPaused
                        ? { duration: 0.8, ease: "easeOut" }
                        : { duration: cat.orbitDuration, repeat: Infinity, ease: "linear" }
                    }
                  >
                    {/* Planet + Moon system container */}
                    <div className="relative" style={{ width: 44, height: 44 }}>
                      {/* Moon orbit ring */}
                      <div
                        className="absolute rounded-full border border-secondary/15"
                        style={{
                          width: cat.moonOrbit * 2,
                          height: cat.moonOrbit * 2,
                          left: 22 - cat.moonOrbit,
                          top: 22 - cat.moonOrbit,
                        }}
                      />

                      {/* Planet (red) */}
                      <div
                        className="relative cursor-pointer z-10"
                        onMouseEnter={() => setHoveredModule(cat.name)}
                        onMouseLeave={() => setHoveredModule(null)}
                      >
                        <motion.div
                          animate={isHoveredPlanet ? { scale: 1.2 } : { scale: 1 }}
                          className="w-11 h-11 rounded-full bg-gradient-sysde flex items-center justify-center shadow-lg"
                          style={{
                            boxShadow: isHoveredPlanet
                              ? "0 0 24px hsl(var(--sysde-red) / 0.5)"
                              : "0 0 10px hsl(var(--sysde-red) / 0.25)",
                          }}
                        >
                          <span className="text-[8px] font-bold text-primary-foreground text-center leading-tight px-1">
                            {cat.name.length > 8 ? cat.name.slice(0, 5) + "." : cat.name}
                          </span>
                        </motion.div>

                        {isHoveredPlanet && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-50"
                          >
                            <p className="text-xs font-semibold text-sysde-red">{cat.name}</p>
                            <p className="text-[10px] text-muted-foreground">{cat.modules.length} módulos</p>
                          </motion.div>
                        )}
                      </div>

                      {/* Moons (modules - blue) */}
                      {cat.modules.map((mod, mi) => {
                        const moonAngle = (360 / cat.modules.length) * mi;
                        const isHoveredMoon = hoveredModule === mod.name;

                        return (
                          <motion.div
                            key={mod.name}
                            className="absolute z-10"
                            style={{
                              width: 0,
                              height: 0,
                              left: 22,
                              top: 22,
                            }}
                            animate={{
                              rotate: isPaused ? moonAngle : [moonAngle, moonAngle + 360],
                            }}
                            transition={
                              isPaused
                                ? { duration: 0.6, ease: "easeOut" }
                                : { duration: cat.moonDuration, repeat: Infinity, ease: "linear" }
                            }
                          >
                            <div
                              className="absolute"
                              style={{ left: cat.moonOrbit, top: -12 }}
                            >
                              <motion.div
                                animate={{
                                  rotate: isPaused ? -moonAngle : [-moonAngle, -(moonAngle + 360)],
                                }}
                                transition={
                                  isPaused
                                    ? { duration: 0.6, ease: "easeOut" }
                                    : { duration: cat.moonDuration, repeat: Infinity, ease: "linear" }
                                }
                              >
                                <div
                                  className="cursor-pointer"
                                  onMouseEnter={() => setHoveredModule(mod.name)}
                                  onMouseLeave={() => setHoveredModule(null)}
                                >
                                  <motion.div
                                    animate={isHoveredMoon ? { scale: 1.4 } : { scale: 1 }}
                                    className="w-6 h-6 rounded-full bg-sysde-blue flex items-center justify-center shadow-md"
                                    style={{
                                      boxShadow: isHoveredMoon
                                        ? "0 0 16px hsl(var(--sysde-blue) / 0.6)"
                                        : "0 0 6px hsl(var(--sysde-blue) / 0.25)",
                                    }}
                                  >
                                    <mod.icon className="w-3 h-3 text-secondary-foreground" />
                                  </motion.div>

                                  {isHoveredMoon && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-1 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-50"
                                    >
                                      <p className="text-[10px] font-semibold text-sysde-blue">{mod.name}</p>
                                    </motion.div>
                                  )}
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat) => (
            <div key={cat.name} className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-gradient-sysde" />
                <h4 className="font-semibold text-sm text-sysde-red">{cat.name}</h4>
              </div>
              <ul className="space-y-1.5">
                {cat.modules.map((mod) => (
                  <li key={mod.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-sysde-blue flex-shrink-0" />
                    {mod.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Detail sections */}
        <div className="mt-20 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 rounded-2xl border-2 border-secondary/20 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Landmark className="h-5 w-5 text-sysde-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Módulo Préstamos</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {[
                  { title: "Crédito Comercial/Consumo", desc: "Administración de productos de consumo, comercial, hipotecario, líneas de crédito revolventes o no." },
                  { title: "Crédito Nómina", desc: "Otorgamiento bajo modelo nómina con convenios, control de cobranza e importación de archivos de pagos." },
                  { title: "Crédito Puente", desc: "Financiamiento a desarrolladores inmobiliarios con control de presupuesto, avance de obra y ministraciones." },
                  { title: "Crédito Retail", desc: "Control de anticipos por adquisición de artículos, registro de bienes e incautación por incumplimiento." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-3">Funcionalidades adicionales</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Carga de documentación (contratos, pagarés)",
                  "Desembolso con fecha valor",
                  "Cuentas referenciadas para pagos",
                  "Posposición de cuotas",
                  "Grupo de interés económico",
                  "Refinanciaciones y renovaciones",
                  "IVA sobre intereses reales por tipo de crédito",
                  "Recuperación de créditos y pagos masivos",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-sysde-blue mt-0.5 font-bold">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-sysde-blue" />
                <h3 className="text-lg font-bold text-foreground">Módulo Clientes</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Gestión de información de personas físicas y jurídicas. Consolida datos de clientes
                en un solo lugar para análisis y estrategias efectivas.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>✓ Personas físicas y morales</li>
                <li>✓ Máscaras de identificación configurables</li>
                <li>✓ Cliente único por institución</li>
                <li>✓ Carga de documentación digital</li>
                <li>✓ Catálogos de actividad económica</li>
                <li>✓ Referencias personales y comerciales</li>
                <li>✓ Convenios para créditos nómina</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-7 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-sysde-red" />
                <h3 className="text-lg font-bold text-foreground">Módulo Seguridad</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Administración de perfiles de usuario agrupados en roles de trabajo con
                permisos de acceso granulares por objeto/ventana.
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>✓ Gestión de usuarios y datos generales</li>
                <li>✓ Parámetros generales de seguridad</li>
                <li>✓ Asignación de roles y permisos</li>
                <li>✓ Transacciones por usuario</li>
                <li>✓ Vigencia y conformación de contraseñas</li>
                <li>✓ Catálogo de puestos y roles</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
