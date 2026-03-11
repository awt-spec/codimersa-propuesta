import { motion } from "framer-motion";
import { Globe, Cpu, Shield, Zap, Server, Database, HardDrive, Wifi, Monitor, CheckCircle2, Clock } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const infraNodes = [
  { icon: Server, title: "App Server", specs: "4 cores · 16 GB · 128 GB SSD", os: "Windows Server 2019", x: 20, y: 30 },
  { icon: Database, title: "Database", specs: "4 cores · 16 GB · 256 GB", os: "MS SQL 2019 SaaS", x: 50, y: 15 },
  { icon: HardDrive, title: "Web / APIs", specs: "4 cores · 16 GB · 128 GB SSD", os: "Linux", x: 80, y: 30 },
  { icon: Wifi, title: "Network", specs: "Backup diario · 15 días retención", os: "Core Colaborativo", x: 50, y: 55 },
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
            className="flex gap-4 p-6 rounded-2xl border border-border bg-card"
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

      {/* APIs */}
      <motion.div {...fade} className="mb-20">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Core de APIs Colaborativas</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Clientes", items: ["Inserción persona física/socio", "Inserción persona jurídica", "Todas sus colecciones"] },
            { title: "Parámetros", items: ["Distribución geográfica", "Código postal"] },
            { title: "Préstamos", items: ["Inserción crédito simple", "Aprobación desembolso", "Solicitud ministraciones", "Tabla valores", "Consulta plan de pagos"] },
            { title: "Contabilidad", items: ["Generación interfaz contable", "Inserción garantías (colateral, prendaria, etc.)"] },
          ].map((col) => (
            <div key={col.title} className="p-5 rounded-xl bg-card border border-border">
              <h4 className="font-semibold text-sysde-red text-sm mb-3 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4 italic">
          Servicios adicionales: Calculadora, Pago banca en línea, Apps, Predicción de fraude, Gestor de notificaciones, Originación, Buró de crédito, Flujo documental digital, Reportes regulatorios, Pasarela de pago mobile, Dispositivos IoT.
        </p>
      </motion.div>

      {/* Infrastructure - Tech Style */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Infraestructura ON-CLOUD</h3>
        <p className="text-sm text-muted-foreground text-center mb-8">Arquitectura dedicada de alto rendimiento incluida en la renta</p>

        <div className="relative rounded-2xl bg-sysde-dark p-8 md:p-12 overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: "linear-gradient(hsl(var(--sysde-blue) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--sysde-blue) / 0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
          </div>

          {/* Glowing dots */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-sysde-blue"
              style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}

          {/* Connection lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 70">
            <motion.line x1="30" y1="35" x2="50" y2="20" stroke="hsl(var(--sysde-blue))" strokeWidth="0.3" strokeDasharray="2 2"
              animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.line x1="70" y1="35" x2="50" y2="20" stroke="hsl(var(--sysde-blue))" strokeWidth="0.3" strokeDasharray="2 2"
              animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
            <motion.line x1="30" y1="35" x2="50" y2="55" stroke="hsl(var(--sysde-red))" strokeWidth="0.3" strokeDasharray="2 2"
              animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
            <motion.line x1="70" y1="35" x2="50" y2="55" stroke="hsl(var(--sysde-red))" strokeWidth="0.3" strokeDasharray="2 2"
              animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
          </svg>

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infraNodes.map((node, i) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group"
              >
                <div className="relative p-5 rounded-xl border border-secondary/20 bg-sysde-dark backdrop-blur-sm hover:border-secondary/50 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-sysde-blue flex items-center justify-center shadow-[0_0_15px_hsl(var(--sysde-blue)/0.3)]">
                        <node.icon className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm text-primary-foreground">{node.title}</h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-[10px] text-green-400/80 font-mono">ONLINE</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 font-mono">
                      <p className="text-xs text-secondary/80">{node.specs}</p>
                      <p className="text-[10px] text-muted-foreground/60">{node.os}</p>
                    </div>

                    {/* Mini metric bars */}
                    <div className="mt-3 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-muted-foreground/50 w-8">CPU</span>
                        <div className="flex-1 h-1 rounded-full bg-secondary/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-sysde-blue"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${30 + i * 15}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-muted-foreground/50 w-8">MEM</span>
                        <div className="flex-1 h-1 rounded-full bg-secondary/10 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-sysde-blue"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${20 + i * 12}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.2 + 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom status bar */}
          <div className="relative z-10 mt-8 flex items-center justify-center gap-6 text-[10px] font-mono text-muted-foreground/50">
            <span className="flex items-center gap-1.5">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-green-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              4 NODES ACTIVE
            </span>
            <span>|</span>
            <span>LATENCY: 12ms</span>
            <span>|</span>
            <span>UPTIME: 99.9%</span>
          </div>
        </div>
      </motion.div>

      {/* Cronograma - Reference Image Style */}
      <motion.div {...fade} className="mt-20">
        <h3 className="text-3xl font-bold text-foreground mb-2 text-center">Cronograma de Implementación</h3>
        <p className="text-sm text-muted-foreground text-center mb-10">
          8 meses para poner en marcha la solución integral de CODIMERSA
        </p>

        <div className="rounded-2xl bg-gradient-sysde p-6 md:p-10 space-y-4">
          {/* Month headers */}
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
              {/* Stage label */}
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

              {/* Gantt bars */}
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

          {/* Bottom badge */}
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
