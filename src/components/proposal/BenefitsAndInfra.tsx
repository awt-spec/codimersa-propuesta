import { motion } from "framer-motion";
import { Globe, Cpu, Shield, Zap, Server, Database, HardDrive, Wifi } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

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
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center flex-shrink-0">
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

      {/* Infrastructure */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Infraestructura ON-CLOUD incluida</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Server, title: "Servidor de Aplicaciones", specs: ["CPU: 4 cores", "16 GB RAM", "128 GB SSD", "Windows Server 2019"] },
            { icon: Database, title: "Servidor de Base de Datos", specs: ["SQL SaaS — 4 núcleos", "16 GB RAM", "500 GB almacenamiento", "MS SQL 2019"] },
            { icon: HardDrive, title: "Servidor Web / Servicios", specs: ["CPU: 4 cores", "16 GB RAM", "128 GB SSD", "Linux"] },
            { icon: Wifi, title: "Servicios de Red", specs: ["Respaldo diario", "Retención 15 días", "Core Colaborativo"] },
          ].map((s) => (
            <div key={s.title} className="p-5 rounded-xl bg-card border border-border">
              <s.icon className="h-5 w-5 text-sysde-red mb-3" />
              <h4 className="font-semibold text-foreground text-sm mb-3">{s.title}</h4>
              <ul className="space-y-1">
                {s.specs.map((sp) => (
                  <li key={sp} className="text-xs text-muted-foreground">{sp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Cronograma */}
      <motion.div {...fade} className="mt-20">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Cronograma de implementación</h3>
        <div className="overflow-x-auto rounded-xl bg-gradient-to-br from-muted-foreground/30 to-sysde-red p-[2px]">
          <div className="rounded-xl bg-card p-1">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-muted-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Etapa</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Tareas</th>
                  <th className="text-center py-3 px-2 font-semibold text-sysde-red">S1</th>
                  <th className="text-center py-3 px-2 font-semibold text-sysde-red">S2</th>
                  <th className="text-center py-3 px-2 font-semibold text-sysde-red">S3</th>
                  <th className="text-center py-3 px-2 font-semibold text-sysde-red">S4</th>
                  <th className="text-center py-3 px-2 font-semibold text-sysde-red">S5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: "0", task: "Gestión de Proyecto", weeks: [true, true, true, true, true] },
                  { stage: "1", task: "Configuración Cloud y Entendimiento del Negocio", weeks: [true, true, false, false, false] },
                  { stage: "2", task: "Parametrización Base", weeks: [false, true, true, true, false] },
                  { stage: "3", task: "Capacitación Funcional", weeks: [false, false, false, true, true] },
                ].map((row, i) => (
                  <tr key={row.stage} className="border-b border-muted-foreground/10">
                    <td className="py-3 px-4 font-mono font-bold text-sysde-red">{row.stage}</td>
                    <td className="py-3 px-4 text-foreground">{row.task}</td>
                    {row.weeks.map((active, wi) => (
                      <td key={wi} className="py-3 px-2 text-center">
                        {active && (
                          <div className={`w-6 h-2 rounded-full mx-auto ${i % 2 === 0 ? 'bg-sysde-red' : 'bg-muted-foreground/50'}`} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-xs text-center mt-4 text-muted-foreground">
          Modelo ON-CLOUD — No incluye desarrollo de interfaces ni requerimientos adicionales.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BenefitsAndInfra;
