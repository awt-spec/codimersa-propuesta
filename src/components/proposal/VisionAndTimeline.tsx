import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const VisionAndTimeline = () => (
  <section className="py-20 md:py-28 bg-gradient-sysde text-primary-foreground">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-2">Visión</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Nuestra visión de la solución
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: Rocket,
            title: "Time to Market",
            desc: "Apoyar a Factoraje Pentágono a operar de forma automatizada en muy corto plazo, con productos y servicios que satisfagan las necesidades de sus clientes.",
          },
          {
            icon: Target,
            title: "Foco en el Negocio",
            desc: "Garantizar que Factoraje Pentágono se focalice en los factores clave de su ventaja competitiva, delegando lo tecnológico a SYSDE.",
          },
          {
            icon: TrendingUp,
            title: "Crecimiento Eficiente",
            desc: "Soportar el crecimiento del negocio a través de una solución robusta e integrada, con flexibilidad para adaptarse al mercado meta.",
          },
        ].map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm opacity-75 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default VisionAndTimeline;
