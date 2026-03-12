import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, CreditCard, Infinity } from "lucide-react";

const EconomicProposal = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Inversión</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          ON-CLOUD: Inversión Económica
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          La inversión económica requerida para la suscripción mensual del sistema SYSDE SAF+, de acuerdo al alcance planteado en la presente propuesta para CODIMERSA.
        </p>
      </motion.div>

      {/* Monthly Pricing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-2 bg-sysde-red text-white">
            <div className="px-6 py-4 font-semibold border-r border-sysde-red/30">
              Concepto
            </div>
            <div className="px-6 py-4 font-semibold text-center">
              Monto USD
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-border bg-card">
            <div className="px-6 py-5 text-foreground font-medium border-r border-border">
              Suscripción Mensual Ilimitada SYSDE SAF+
            </div>
            <div className="px-6 py-5 text-center text-foreground font-bold text-xl">
              $10,000.00
            </div>
          </div>
        </div>
      </motion.div>

      {/* Included Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-12"
      >
        <div className="p-8 rounded-2xl border-2 border-sysde-blue/20 bg-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sysde-blue" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sysde-blue/10 flex items-center justify-center flex-shrink-0">
              <Infinity className="h-6 w-6 text-sysde-blue" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-xl mb-2">Servicios Incluidos en la Suscripción</h4>
              <p className="text-muted-foreground mb-4">
                La suscripción mensual ilimitada incluye acceso completo al aplicativo SYSDE SAF+ mientras el servicio esté activo/vigente:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Créditos ilimitados",
                  "Capacitación ilimitada",
                  "Soporte correctivo ilimitado",
                  "Desarrollo de Interfaces",
                  "Parametrización del aplicativo",
                  "Pruebas Integrales (Certificación)",
                  "Puesta en Producción",
                  "Acompañamiento a la operación",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-sysde-blue mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Method */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h4 className="font-bold text-foreground text-xl mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-sysde-red" />
          Forma de Pago
        </h4>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-2 bg-sysde-red text-white">
            <div className="px-6 py-3 font-semibold border-r border-sysde-red/30">Hito</div>
            <div className="px-6 py-3 font-semibold text-center">% a Pagar</div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-foreground mb-1">Suscripción Mensual SAF+</p>
                <p className="text-sm text-muted-foreground">
                  Se facturará el primer día hábil de cada mes a partir de la firma del contrato.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-sysde-red/10 text-sysde-red font-medium text-sm">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Exclusions */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-xl bg-muted/60 border border-border"
      >
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-sysde-red" />
          Interfaces (no incluidas)
        </h4>
        <p className="text-sm text-muted-foreground mb-3">
          Las interfaces no están incluidas dentro de esta oferta de servicio inicial. Sin embargo, con nuestro core de APIs se simplifica la integración con otros sistemas.
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "Desarrollo de interfaces personalizadas",
            "Desarrollo de requerimientos adicionales",
            "Migraciones de datos de sistemas previos",
            "Integraciones con sistemas de terceros",
          ].map((item) => (
            <p key={item} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
              {item}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EconomicProposal;
