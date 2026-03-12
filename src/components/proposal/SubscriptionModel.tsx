import { motion } from "framer-motion";
import { Users, Building2, Code2, GraduationCap, MessageCircle, Wrench, Shield, Infinity } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Sin límite de usuarios",
    desc: "Escale su equipo sin restricciones ni costos adicionales.",
  },
  {
    icon: Building2,
    title: "Sin límite de empresas ni sucursales",
    desc: "Crezca a nuevos mercados sin barreras de licencia.",
  },
  {
    icon: Code2,
    title: "Todos los desarrollos requeridos",
    desc: "Cada desarrollo necesario para cumplir la expectativa de CODIMERSA, con un roadmap evolutivo específico.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación progresiva ilimitada",
    desc: "Formación continua incluida: primero funcionalidades básicas, luego avanzadas. Sin límite de horas.",
  },
  {
    icon: MessageCircle,
    title: "Chat de soporte en tiempo real",
    desc: "Canal directo para resolver cualquier consulta, facilitando el aprendizaje continuo y la autonomía.",
  },
  {
    icon: Wrench,
    title: "Soporte correctivo ilimitado",
    desc: "Incluido en la suscripción mensual sin costo adicional y sin límite de horas.",
  },
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
      {/* Header */}
      <motion.div {...fade} className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Infinity className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Modelo de Suscripción
          </h2>
          <p className="text-sm text-muted-foreground">Soporte Ilimitado de SYSDE</p>
        </div>
      </motion.div>

      <motion.p {...fade} className="text-muted-foreground mb-12 max-w-4xl">
        Ofrecemos a CODIMERSA un modelo de suscripción que garantiza el acceso completo a nuestra plataforma SYSDE SAF+. Esta suscripción mensual contempla un servicio integral en la nube que incluye:
      </motion.p>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group p-6 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <card.icon className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">{card.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Data Ownership Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl bg-gradient-sysde p-6 flex items-start gap-4"
      >
        <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
          <Shield className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-bold text-primary-foreground mb-1">Propiedad de los datos</h4>
          <p className="text-sm text-primary-foreground/80">
            Todos los datos generados y almacenados en la plataforma son propiedad exclusiva de CODIMERSA. SYSDE actúa únicamente como proveedor tecnológico.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SubscriptionModel;
