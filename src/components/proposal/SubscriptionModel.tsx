import { motion } from "framer-motion";
import { CheckCircle2, Infinity } from "lucide-react";

const items = [
  "Créditos ilimitados",
  "Capacitación ilimitada",
  "Soporte correctivo ilimitado",
  "Evolución y actualizaciones",
  "Parametrización del aplicativo",
  "Pruebas Integrales (Certificación)",
  "Puesta en Producción",
  "Acompañamiento a la operación",
  "Empresas ilimitadas",
  "Usuarios ilimitados",
  "Licenciamiento incluido",
  "Desarrollos requeridos",
];

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const SubscriptionModel = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        {...fade}
        className="rounded-2xl border border-border bg-card overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-primary w-full" />

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <Infinity className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Servicios Incluidos en la Suscripción
            </h2>
          </div>

          <p className="text-muted-foreground mb-8 max-w-3xl">
            La suscripción mensual ilimitada incluye acceso completo al aplicativo SYSDE SAF+ mientras el servicio esté activo/vigente:
          </p>

          {/* Checklist grid */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SubscriptionModel;
