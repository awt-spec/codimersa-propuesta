import { motion } from "framer-motion";

const services = [
  "Calculadora Hipotecaria",
  "Pago de planillas",
  "Banca en línea",
  "Plataforma Ecommerce",
  "Gestor de notificaciones",
  "Buró de crédito",
  "Educación financiera",
  "KYC",
  "Dispositivos IoT",
  "Pasarela de pago",
  "Pagos de créditos mobile",
  "Aplicaciones móviles",
  "Reportes regulatorios",
  "Flujo de documentación digital",
  "Originación",
  "Predicción de fraude",
  "Apps Bienes Disponibles",
];

const CorePlatformDiagram = () => {
  const count = services.length;
  const radius = 42; // percentage from center

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Orbit ring */}
      <div className="absolute inset-[8%] rounded-full border border-dashed border-sysde-blue/20" />

      {/* Center core */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] aspect-square rounded-full bg-gradient-to-br from-sysde-blue to-[hsl(var(--sysde-blue-dark))] flex items-center justify-center shadow-[0_0_60px_hsl(var(--sysde-blue)/0.3)] z-10"
      >
        <div className="text-center px-4">
          <p className="text-lg md:text-xl font-bold text-primary-foreground italic">Sysde</p>
          <p className="text-[10px] md:text-xs font-bold text-primary-foreground/80 uppercase tracking-wider leading-tight mt-1">
            Core / Plataforma<br />Colaborativa
          </p>
        </div>
      </motion.div>

      {/* Pulsing rings */}
      {[0, 1, 2].map((r) => (
        <motion.div
          key={r}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sysde-blue/10"
          style={{ width: `${42 + r * 4}%`, height: `${42 + r * 4}%` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: r * 0.8 }}
        />
      ))}

      {/* Service nodes */}
      {services.map((service, i) => {
        const angle = (i / count) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);

        return (
          <motion.div
            key={service}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {/* Connection line to center */}
            <svg
              className="absolute pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                width: "1px",
                height: "1px",
                overflow: "visible",
              }}
            >
              <line
                x1="0"
                y1="0"
                x2={`${(50 - x) * 6}` }
                y2={`${(50 - y) * 6}`}
                stroke="hsl(var(--sysde-blue))"
                strokeWidth="0.5"
                strokeOpacity="0.15"
              />
            </svg>

            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sysde-red flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-[0_4px_20px_hsl(var(--sysde-red)/0.3)]">
              <span className="text-[8px] md:text-[9px] font-semibold text-primary-foreground text-center leading-tight px-1.5">
                {service}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CorePlatformDiagram;
