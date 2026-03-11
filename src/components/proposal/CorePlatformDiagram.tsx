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
  // Use SVG viewBox for precise control
  const cx = 500;
  const cy = 500;
  const orbitRadius = 360;
  const nodeRadius = 58;
  const coreRadius = 130;

  const nodes = services.map((service, i) => {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
    return {
      label: service,
      x: cx + orbitRadius * Math.cos(angle),
      y: cy + orbitRadius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <svg viewBox="0 0 1000 1000" className="w-full h-auto">
        <defs>
          <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={orbitRadius}
          fill="none"
          stroke="hsl(207, 60%, 55%)"
          strokeWidth="1"
          strokeDasharray="6 8"
          opacity="0.15"
        />

        {/* Connection lines from nodes to center */}
        {nodes.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1={node.x}
            y1={node.y}
            x2={cx}
            y2={cy}
            stroke="hsl(355, 72%, 50%)"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
          />
        ))}

        {/* Core circle flat */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={coreRadius}
          fill="hsl(207, 60%, 92%)"
          stroke="hsl(207, 60%, 80%)"
          strokeWidth="2"
          filter="url(#coreGlow)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Core text */}
        <text
          x={cx}
          y={cy - 14}
          textAnchor="middle"
          className="fill-foreground"
          fontWeight="800"
          fontSize="28"
          fontStyle="italic"
          opacity="0.85"
        >
          Sysde
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-foreground"
          fontWeight="700"
          fontSize="12"
          letterSpacing="2"
          opacity="0.55"
        >
          CORE / PLATAFORMA
        </text>
        <text
          x={cx}
          y={cy + 30}
          textAnchor="middle"
          className="fill-foreground"
          fontWeight="700"
          fontSize="12"
          letterSpacing="2"
          opacity="0.55"
        >
          COLABORATIVA
        </text>

        {/* Service nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Dashed orbit around node */}
            <circle
              cx={node.x}
              cy={node.y}
              r={nodeRadius + 8}
              fill="none"
              stroke="hsl(355, 72%, 45%)"
              strokeWidth="0.8"
              strokeDasharray="3 5"
              opacity="0.2"
            />
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={nodeRadius}
              fill="hsl(355, 72%, 42%)"
              className="cursor-pointer"
            />
            {/* Node label - split into lines */}
            {(() => {
              const words = node.label.split(" ");
              const lines: string[] = [];
              let current = "";
              words.forEach((w) => {
                if (current && (current + " " + w).length > 12) {
                  lines.push(current);
                  current = w;
                } else {
                  current = current ? current + " " + w : w;
                }
              });
              if (current) lines.push(current);

              const lineHeight = 15;
              const startY = node.y - ((lines.length - 1) * lineHeight) / 2;

              return lines.map((line, li) => (
                <text
                  key={li}
                  x={node.x}
                  y={startY + li * lineHeight}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontWeight="600"
                  fontSize="13"
                >
                  {line}
                </text>
              ));
            })()}
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default CorePlatformDiagram;
