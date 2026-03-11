import { motion } from "framer-motion";
import { Shield, CreditCard, Banknote, FileText, Users, Landmark, Lock, BookOpen, Building, Smartphone, PiggyBank } from "lucide-react";
import { useState } from "react";

const orbits = [
  {
    radius: 120,
    duration: 30,
    category: "Administrativos",
    color: "hsl(var(--sysde-red))",
    colorClass: "text-sysde-red",
    bgClass: "bg-sysde-red",
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
    radius: 220,
    duration: 45,
    category: "Colocación",
    color: "hsl(var(--sysde-blue))",
    colorClass: "text-sysde-blue",
    bgClass: "bg-sysde-blue",
    modules: [
      { name: "Préstamos", icon: Landmark },
      { name: "Créditos", icon: CreditCard },
      { name: "Líneas de Crédito", icon: CreditCard },
    ],
  },
  {
    radius: 310,
    duration: 60,
    category: "Tesorería",
    color: "hsl(var(--sysde-blue))",
    colorClass: "text-sysde-blue",
    bgClass: "bg-sysde-blue",
    modules: [
      { name: "Bancos", icon: Banknote },
      { name: "Cajas", icon: Banknote },
    ],
  },
  {
    radius: 390,
    duration: 75,
    category: "Captación",
    color: "hsl(var(--sysde-red))",
    colorClass: "text-sysde-red",
    bgClass: "bg-sysde-red",
    modules: [
      { name: "Certificados de Depósitos", icon: PiggyBank },
    ],
  },
];

const ModulesSection = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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

        {/* Solar System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-16"
          style={{ width: "100%", maxWidth: 860, height: 860 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setHoveredModule(null); }}
        >
          {/* Background stars */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-foreground/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: Math.random() > 0.7 ? 2 : 1,
                  height: Math.random() > 0.7 ? 2 : 1,
                }}
              />
            ))}
          </div>

          {/* Center - SAF+ Sun */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-sysde flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.3)]">
                <div className="text-center text-primary-foreground">
                  <p className="text-xs font-bold tracking-wider opacity-80">SYSDE</p>
                  <p className="text-xl font-black">SAF+</p>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-[-8px] rounded-full border-2 border-sysde-red/20 animate-pulse" />
              <div className="absolute inset-[-16px] rounded-full border border-sysde-red/10" />
            </motion.div>
          </div>

          {/* Orbit rings */}
          {orbits.map((orbit) => (
            <div
              key={orbit.category}
              className="absolute top-1/2 left-1/2 rounded-full border border-border/30"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
                marginLeft: -orbit.radius,
                marginTop: -orbit.radius,
              }}
            />
          ))}

          {/* Orbit labels */}
          {orbits.map((orbit) => (
            <div
              key={`label-${orbit.category}`}
              className="absolute top-1/2 left-1/2 pointer-events-none z-10"
              style={{
                marginLeft: -orbit.radius,
                marginTop: -orbit.radius - 18,
              }}
            >
              <span className={`text-[10px] font-semibold uppercase tracking-widest ${orbit.colorClass} opacity-60`}>
                {orbit.category}
              </span>
            </div>
          ))}

          {/* Planets (modules) */}
          {orbits.map((orbit) =>
            orbit.modules.map((mod, mi) => {
              const angleOffset = (360 / orbit.modules.length) * mi;
              const isHovered = hoveredModule === mod.name;

              return (
                <motion.div
                  key={mod.name}
                  className="absolute top-1/2 left-1/2 z-10"
                  style={{
                    width: 0,
                    height: 0,
                  }}
                  animate={{
                    rotate: isPaused ? angleOffset : [angleOffset, angleOffset + 360],
                  }}
                  transition={
                    isPaused
                      ? { duration: 0.5 }
                      : {
                          duration: orbit.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                >
                  <div
                    className="absolute"
                    style={{
                      left: orbit.radius,
                      top: -20,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: isPaused ? -angleOffset : [-angleOffset, -(angleOffset + 360)],
                      }}
                      transition={
                        isPaused
                          ? { duration: 0.5 }
                          : {
                              duration: orbit.duration,
                              repeat: Infinity,
                              ease: "linear",
                            }
                      }
                    >
                      <div
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setHoveredModule(mod.name)}
                        onMouseLeave={() => setHoveredModule(null)}
                      >
                        <motion.div
                          animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                          className={`w-10 h-10 rounded-full ${orbit.bgClass} flex items-center justify-center shadow-lg`}
                          style={{
                            boxShadow: isHovered
                              ? `0 0 20px ${orbit.color.replace(")", " / 0.5)")}`
                              : `0 0 8px ${orbit.color.replace(")", " / 0.2)")}`,
                          }}
                        >
                          <mod.icon className="w-4 h-4 text-white" />
                        </motion.div>

                        {/* Tooltip */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-30"
                          >
                            <p className={`text-xs font-semibold ${orbit.colorClass}`}>{mod.name}</p>
                            <p className="text-[10px] text-muted-foreground">{orbit.category}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* Legend Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {orbits.map((orbit) => (
            <div key={orbit.category} className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${orbit.bgClass}`} />
                <h4 className={`font-semibold text-sm ${orbit.colorClass}`}>{orbit.category}</h4>
              </div>
              <ul className="space-y-1.5">
                {orbit.modules.map((mod) => (
                  <li key={mod.name} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <mod.icon className="w-3 h-3 flex-shrink-0" />
                    {mod.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Detail sections below */}
        <div className="mt-20 space-y-12">
          {/* Préstamos detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 rounded-2xl border-2 border-sysde-blue/20 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center">
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

          {/* Clientes y Seguridad */}
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
