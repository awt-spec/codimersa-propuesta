import { motion } from "framer-motion";
import { Globe, Cpu, Shield, Zap, Server, Database, HardDrive, Wifi, Monitor, CheckCircle2, Clock, Cloud } from "lucide-react";
import CorePlatformDiagram from "./CorePlatformDiagram";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const infraNodes = [
  { icon: Server, title: "App Server", specs: "4 cores · 16 GB · 128 GB SSD", os: "Windows Server 2019" },
  { icon: Database, title: "Azure SQL", specs: "4 cores · 16 GB · 256 GB", os: "MS SQL 2019 SaaS" },
  { icon: HardDrive, title: "Web / APIs", specs: "4 cores · 16 GB · 128 GB SSD", os: "Linux" },
  { icon: Wifi, title: "Azure Network", specs: "Backup diario · 15 días retención", os: "VPN + Firewall" },
];

const timeline = [
  { stage: 0, task: "Gestión de Proyecto", icon: Monitor, months: [1,1,1,1,1,1,1,1] },
  { stage: 1, task: "Planificación y Análisis", icon: Clock, months: [1,1,0,0,0,0,0,0] },
  { stage: 2, task: "Desarrollo de Adaptaciones", icon: Cpu, months: [0,1,1,1,0,0,0,0] },
  { stage: 3, task: "Parametrización Base", icon: Database, months: [0,0,1,1,1,0,0,0] },
  { stage: 4, task: "Capacitación", icon: Globe, months: [0,0,0,0,1,1,0,0] },
  { stage: 5, task: "Pruebas Integrales", icon: CheckCircle2, months: [0,0,0,0,0,1,1,0] },
  { stage: 6, task: "Puesta en Producción", icon: Zap, months: [0,0,0,0,0,0,1,1] },
  { stage: 7, task: "Acompañamiento", icon: Shield, months: [0,0,0,0,0,0,0,1] },
];

const BenefitsAndInfra = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      {/* Benefits */}
      <motion.div {...fade} className="text-center mb-14">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Ventajas</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Beneficios de la solución
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-20">
        {[
          { icon: Globe, title: "Independencia en Instalación", desc: "Programación agnóstica al sistema operativo." },
          { icon: Cpu, title: "Modernidad Tecnológica", desc: "Tecnología de punta y mejores prácticas del mercado." },
          { icon: Shield, title: "Competitividad", desc: "Intercomunicación con sistemas externos ofreciendo una solución integral." },
          { icon: Zap, title: "Simplitud y Robustez", desc: "Seguridad, rendimiento, mantenibilidad y escalabilidad con desarrollo ágil." },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <b.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core de APIs SYSDE - Circular Diagram */}
      <motion.div {...fade} className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">Core de APIs SYSDE Incluido</h3>
        <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Ecosistema completo de servicios integrados que potencian la plataforma colaborativa
        </p>
        <CorePlatformDiagram />
      </motion.div>

      {/* Infrastructure ON-CLOUD + Azure */}
      <motion.div {...fade}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">Infraestructura ON-CLOUD</h3>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Arquitectura dedicada de alto rendimiento impulsada por nuestro aliado estratégico
        </p>

        <div className="relative rounded-2xl bg-gradient-sysde p-8 md:p-12 overflow-hidden">
          {/* Animated circuit board background */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(hsl(var(--sysde-blue)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--sysde-blue)) 1px, transparent 1px),
                linear-gradient(hsl(var(--sysde-blue) / 0.5) 0.5px, transparent 0.5px),
                linear-gradient(90deg, hsl(var(--sysde-blue) / 0.5) 0.5px, transparent 0.5px)
              `,
              backgroundSize: "60px 60px, 60px 60px, 15px 15px, 15px 15px",
            }} />
          </div>

          {/* Floating data particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                backgroundColor: i % 3 === 0 ? "hsl(var(--sysde-red))" : "hsl(var(--sysde-blue))",
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -30, -60],
              }}
              transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
            />
          ))}

          {/* Azure badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center mb-8"
          >
            <div className="flex items-center gap-3 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 rounded-full px-6 py-3">
              <Cloud className="w-5 h-5 text-primary-foreground" />
              <span className="text-sm font-bold text-primary-foreground tracking-wide">
                Microsoft Azure
              </span>
              <span className="text-[10px] text-primary-foreground/50 font-mono">// ALIADO ESTRATÉGICO</span>
            </div>
          </motion.div>

          {/* Hex data flow lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 70">
            {/* Horizontal data streams */}
            <motion.line x1="0" y1="20" x2="100" y2="20" stroke="hsl(var(--sysde-blue))" strokeWidth="0.15" strokeDasharray="1 3"
              animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
            <motion.line x1="0" y1="50" x2="100" y2="50" stroke="hsl(var(--sysde-blue))" strokeWidth="0.15" strokeDasharray="1 3"
              animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
            {/* Cross connections */}
            <motion.line x1="25" y1="10" x2="75" y2="60" stroke="hsl(var(--sysde-red))" strokeWidth="0.1" strokeDasharray="2 4"
              animate={{ strokeDashoffset: [0, -30] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
            <motion.line x1="75" y1="10" x2="25" y2="60" stroke="hsl(var(--sysde-red))" strokeWidth="0.1" strokeDasharray="2 4"
              animate={{ strokeDashoffset: [0, -30] }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} />
          </svg>

          {/* Nodes grid */}
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infraNodes.map((node, i) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group"
              >
                <div className="relative p-5 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-md hover:border-primary-foreground/50 transition-all duration-300 overflow-hidden">
                  {/* Corner accents */}
                   <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-foreground/30 rounded-tl-xl" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-foreground/30 rounded-br-xl" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                        <node.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-primary-foreground">{node.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "hsl(142, 71%, 65%)" }}
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-[10px] font-mono" style={{ color: "hsl(142, 71%, 65%)" }}>ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 font-mono">
                      <p className="text-xs text-primary-foreground/90">{node.specs}</p>
                      <p className="text-[10px] text-primary-foreground/60">{node.os}</p>
                    </div>

                    {/* Metric bars */}
                    <div className="mt-3 space-y-1">
                      {["CPU", "MEM", "I/O"].map((label, li) => (
                        <div key={label} className="flex items-center gap-2">
                          <span className="text-[9px] text-primary-foreground/50 w-6 font-mono">{label}</span>
                          <div className="flex-1 h-1 rounded-full bg-primary-foreground/15 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: li === 0
                                  ? "linear-gradient(90deg, hsl(200, 80%, 70%), hsl(142, 71%, 65%))"
                                  : li === 1
                                  ? "hsl(200, 80%, 70%)"
                                  : "hsl(45, 90%, 65%)",
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${20 + i * 12 + li * 8}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: i * 0.15 + li * 0.2 }}
                            />
                          </div>
                          <span className="text-[8px] text-primary-foreground/50 font-mono w-6 text-right">
                            {20 + i * 12 + li * 8}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] font-mono text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "hsl(142, 71%, 65%)" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              4 NODES ACTIVE
            </span>
            <span className="hidden md:inline">|</span>
            <span>REGION: AZURE EAST US</span>
            <span className="hidden md:inline">|</span>
            <span>LATENCY: 8ms</span>
            <span className="hidden md:inline">|</span>
            <span>SLA: 99.95%</span>
          </div>

          {/* Azure features strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative z-10 mt-6 flex flex-wrap justify-center gap-2"
          >
            {["Azure Defender", "Auto-Scaling", "Geo-Redundancia", "Azure Monitor", "Key Vault"].map((feat) => (
              <span key={feat} className="text-[9px] font-mono px-3 py-1 rounded-full border border-primary-foreground/30 text-primary-foreground/80 bg-primary-foreground/10">
                {feat}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Cronograma */}
      <motion.div {...fade} className="mt-20">
        <h3 className="text-3xl font-bold text-foreground mb-2 text-center">Cronograma de Implementación</h3>
        <p className="text-sm text-muted-foreground text-center mb-10">
          8 meses para poner en marcha la solución integral de CODIMERSA
        </p>

        <div className="rounded-2xl bg-gradient-sysde p-6 md:p-10 space-y-4">
          <div className="grid grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] gap-3 mb-2">
            <div />
            <div className="grid grid-cols-8 gap-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="text-center text-xs font-semibold text-primary-foreground/70">
                  Mes {i + 1}
                </span>
              ))}
            </div>
          </div>

          {timeline.map((row, ri) => (
            <motion.div
              key={row.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ri * 0.08 }}
              className="grid grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] gap-3 items-center bg-primary-foreground/10 rounded-xl p-2"
            >
              <div className="flex items-center gap-3 pl-2">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                  <row.icon className="w-4 h-4 text-primary-foreground/80" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-semibold text-primary-foreground/50 uppercase tracking-wider">
                    Etapa {row.stage}
                  </span>
                  <p className="text-xs font-semibold text-primary-foreground truncate">
                    {row.task}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-8 gap-1.5">
                {row.months.map((active, mi) => (
                  <div key={mi} className="h-9 rounded-lg relative overflow-hidden">
                    {active ? (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: ri * 0.08 + mi * 0.05 }}
                        className="absolute inset-0 rounded-lg bg-primary-foreground/25 flex items-center justify-center origin-left"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
                      </motion.div>
                    ) : (
                      <div className="absolute inset-0 rounded-lg bg-primary-foreground/5" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center pt-4"
          >
            <div className="flex items-center gap-2 bg-primary-foreground/15 rounded-full px-5 py-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary-foreground/80" />
              <span className="text-sm font-semibold text-primary-foreground/90">
                Implementación ON-CLOUD — 8 meses estimados
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BenefitsAndInfra;
