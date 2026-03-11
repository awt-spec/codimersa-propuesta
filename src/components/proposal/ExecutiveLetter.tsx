import { motion } from "framer-motion";

const ExecutiveLetter = () => {
  const paragraphs = [
    "Esperando que se encuentren bien, les escribo para dar seguimiento a nuestra reciente conversación, así como a la presentación de nuestra solución integral. Con base en los puntos discutidos y en las necesidades específicas que ustedes han mencionado, hemos preparado la presente propuesta de negocios para la implementación de la solución SYSDE SAF PLUS en Factoraje Pentágono.",
    "En esta propuesta, hemos considerado la implementación bajo el modelo ON-CLOUD (en la nube) de nuestra plataforma, el cual permite un despliegue ágil y flexible, alineado con las mejores prácticas de la industria. Este enfoque asegura una rápida adopción y minimiza las necesidades de infraestructura interna, facilitando así la gestión y operación diaria de sus procesos financieros y administrativos.",
    "Adjunto encontrará el documento detallado con todos los elementos necesarios para la evaluación de la propuesta, incluyendo los alcances del proyecto, la metodología de implementación, los plazos estimados y los costos asociados.",
    "Quedamos a su disposición para cualquier consulta o aclaración que requiera, así como para coordinar una reunión donde podamos profundizar en los detalles de esta propuesta.",
    "Agradeciendo de antemano su tiempo y esperando poder colaborar próximamente, me despido.",
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Presentación Ejecutiva
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Factoraje Pentágono</h3>
          <p className="text-muted-foreground mb-8">
            Guillermo Miguel Saca · Ricardo Saca · Gerardo Saca
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            Estimado equipo de Factoraje Pentágono:
          </motion.p>

          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed"
              >
                {p.includes("SYSDE SAF PLUS") ? (
                  <>
                    {p.split("SYSDE SAF PLUS")[0]}
                    <strong className="text-foreground">SYSDE SAF PLUS</strong>
                    {p.split("SYSDE SAF PLUS")[1]}
                  </>
                ) : p.includes("ON-CLOUD") ? (
                  <>
                    {p.split("ON-CLOUD (en la nube)")[0]}
                    <strong className="text-foreground">ON-CLOUD (en la nube)</strong>
                    {p.split("ON-CLOUD (en la nube)")[1]}
                  </>
                ) : (
                  p
                )}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 pt-6 border-t border-border"
          >
            <p className="text-foreground font-semibold">Eduardo Wheelock</p>
            <p className="text-sm text-muted-foreground">Presidente, Sysde Inc.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveLetter;
