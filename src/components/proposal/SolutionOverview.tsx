import { motion } from "framer-motion";
import { Cpu, Cloud, Layers, Zap } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const SolutionOverview = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Descripción del Producto</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          ¿Qué es SYSDE SAF+?
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Una herramienta financiera de alta tecnología que automatiza e integra de forma eficiente
          los procesos y operaciones de los intermediarios financieros, permitiendo convivir con
          los diferentes ecosistemas con los que interactúa la institución.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {[
          { icon: Cloud, title: "Modelo ON-CLOUD", desc: "Despliegue ágil y flexible en la nube, minimizando infraestructura interna y facilitando la gestión diaria." },
          { icon: Layers, title: "Modular e Integrado", desc: "Sistema flexible que permite realizar ajustes según las demandas del mercado de manera oportuna y eficiente." },
          { icon: Cpu, title: "Multi Empresa / Sucursal", desc: "Soporte para múltiples empresas, sucursales, monedas y créditos con contabilización 100% en línea." },
          { icon: Zap, title: "Reglas de Negocio", desc: "Configuración electrónica de procesos operativos para simplificar operación y mejorar servicio al cliente." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-sysde-blue" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Características tabla */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Características de SYSDE SAF+</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-sysde-red mb-3 text-sm uppercase tracking-wider">Funcionales</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Cliente Único</li>
              <li>• Multi Empresa</li>
              <li>• Multi Sucursal</li>
              <li>• Multi Crédito</li>
              <li>• Contabilización 100% en Línea</li>
              <li>• Configuración de Reglas de Negocio</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-sysde-red mb-3 text-sm uppercase tracking-wider">Generales</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Modular e Integrado</li>
              <li>• Documentación Técnica y Funcional</li>
              <li>• Manejo de altos volúmenes de datos</li>
              <li>• Interfaz intuitiva y amigable</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-sysde-red mb-3 text-sm uppercase tracking-wider">Técnicas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Seguridad integrada</li>
              <li>• Trabajo descentralizado</li>
              <li>• Explotación para reportes y análisis</li>
              <li>• Reportes regulatorios</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionOverview;
