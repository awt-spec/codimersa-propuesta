import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, CreditCard, Infinity } from "lucide-react";

const pricingTiers = [
  { contracts: "0 - 300", price: "$3,999.00" },
  { contracts: "301 - 400", price: "$4,399.00" },
  { contracts: "401 - 500", price: "$4,699.00" },
  { contracts: "501 - 600", price: "$4,999.00" },
  { contracts: "601 - 700", price: "$5,399.00" },
  { contracts: "701 - 800", price: "$5,699.00" },
  { contracts: "801 - 1000", price: "$5,999.00" },
  { contracts: "+1001", price: "Por determinar" },
];

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
          ON-CLOUD: Inversión Financiera
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Proveemos un modelo de Software as a Service (SaaS) que permite a Factoraje Pentágono utilizar nuestra plataforma SYSDE SAF+. 
          Nuestra plataforma brinda soporte técnico extensivo para la gestión de administración, colocación y operaciones de tesorería.
        </p>
      </motion.div>

      {/* Pricing Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-sysde-red text-white">
            <div className="px-6 py-4 font-semibold text-center border-r border-sysde-red/30">
              Contratos
            </div>
            <div className="px-6 py-4 font-semibold text-center">
              Monto Mensual en USD
            </div>
          </div>
          {/* Table Body */}
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.contracts}
              className={`grid grid-cols-2 ${index % 2 === 0 ? "bg-card" : "bg-muted/30"} ${index !== pricingTiers.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="px-6 py-4 text-center text-foreground font-medium border-r border-border">
                {tier.contracts}
              </div>
              <div className="px-6 py-4 text-center text-foreground">
                USD {tier.price}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Unlimited Service Card */}
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
              <h4 className="font-bold text-foreground text-xl mb-2">Servicio Ilimitado SYSDE</h4>
              <p className="text-muted-foreground mb-4">
                La renta mensual incluye todos los servicios de la plataforma sin restricciones:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Licencia SYSDE SAF+ (todos los módulos)",
                  "Licencias de aplicación ilimitadas",
                  "Capacitación continua del equipo",
                  "Asistencia correctiva permanente",
                  "Mantenimiento y actualizaciones",
                  "Soporte técnico incluido",
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
          Método de Pago
        </h4>
        <p className="text-muted-foreground mb-4">
          El método de pago para la suscripción mensual será el siguiente:
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid grid-cols-2 bg-sysde-red text-white">
            <div className="px-6 py-3 font-semibold border-r border-sysde-red/30">Hito</div>
            <div className="px-6 py-3 font-semibold text-center">Periodicidad</div>
          </div>
          <div className="p-6 border-b border-border">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-foreground mb-1">Suscripción</p>
                <p className="text-sm text-muted-foreground">
                  El pago se realiza mensualmente por adelantado, el primer día hábil de cada mes.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  El pago mensual inicial se requiere al momento de la firma del contrato.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-sysde-red/10 text-sysde-red font-medium text-sm">
                  Mensual
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
          No incluido en la propuesta
        </h4>
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
