import { motion } from "framer-motion";
import { Car, Landmark, Users, Shield, CreditCard, FileText, Banknote } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const ModulesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade()} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Alcance</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Módulos incluidos
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Alcance completo de la solución SYSDE SAF+ para Factoraje Pentágono.
        </p>
      </motion.div>

      {/* Scope tables */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div {...fade(0)} className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-sysde-red" /> Administrativos
          </h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-sysde-red font-bold">1.</span> Gestión de Seguridad</li>
            <li className="flex gap-2"><span className="text-sysde-red font-bold">2.</span> Reglas de Negocio</li>
            <li className="flex gap-2"><span className="text-sysde-red font-bold">3.</span> Módulo Clientes</li>
            <li className="flex gap-2"><span className="text-sysde-red font-bold">4.</span> Reportería Contable</li>
            <li className="flex gap-2"><span className="text-sysde-red font-bold">5.</span> Supervisor de Cobranza</li>
          </ul>
        </motion.div>
        <motion.div {...fade(0.1)} className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-sysde-blue" /> Colocación
          </h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">1.</span> Administración de Arrendamientos</li>
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">2.</span> Gestión de Préstamos</li>
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">3.</span> Créditos</li>
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">4.</span> Líneas de Crédito</li>
          </ul>
        </motion.div>
        <motion.div {...fade(0.2)} className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Banknote className="h-5 w-5 text-sysde-blue" /> Tesorería
          </h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">1.</span> Administración Bancaria</li>
            <li className="flex gap-2"><span className="text-sysde-blue font-bold">2.</span> Supervisión de Caja</li>
          </ul>
        </motion.div>
        <motion.div {...fade(0.3)} className="p-7 rounded-2xl border border-border bg-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-sysde-red" /> Módulos Opcionales
          </h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-muted-foreground font-bold">•</span> Gestor de Tareas</li>
            <li className="flex gap-2"><span className="text-muted-foreground font-bold">•</span> Fuerza de Ventas</li>
            <li className="flex gap-2"><span className="text-muted-foreground font-bold">•</span> Análisis de Crédito</li>
            <li className="flex gap-2"><span className="text-muted-foreground font-bold">•</span> Motor de Decisiones</li>
          </ul>
        </motion.div>
      </div>

      {/* Leasing detail */}
      <motion.div {...fade()} className="mb-12">
        <div className="p-8 rounded-2xl border-2 border-sysde-red/20 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center">
              <Car className="h-5 w-5 text-sysde-red" />
            </div>
            <h3 className="text-xl font-bold text-foreground">SAF+ Leasing — Arrendamientos</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Plataforma de administración de carteras de arrendamiento puro y financiero.
            Permite parametrización multi-moneda según la naturaleza del arrendamiento.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Plazo y tasa de interés (fija/variable)",
              "IVA y depósito en garantía",
              "Penalizaciones por pago anticipado y kilometraje",
              "Opciones de compra y valores residuales",
              "Manejo de planes de pago",
              "Control de inventarios de activos",
              "Catálogo de cargos por producto",
              "Montos previos: aportes, rentas en depósito",
              "Multi empresa y multi sucursal",
              "Asignación de notarios para legalización",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-sysde-red mt-0.5 font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Préstamos detail */}
      <motion.div {...fade()} className="mb-12">
        <div className="p-8 rounded-2xl border-2 border-sysde-blue/20 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sysde-blue/10 flex items-center justify-center">
              <Landmark className="h-5 w-5 text-sysde-blue" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Módulo Préstamos</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {[
              { title: "Crédito Comercial/Consumo", desc: "Administración de productos de consumo, comercial, hipotecario, líneas de crédito revolventes o no." },
              { title: "Crédito Nómina", desc: "Otorgamiento bajo modelo nómina con convenios, control de cobranza e importación de archivos de pagos." },
              { title: "Crédito Puente", desc: "Financiamiento a desarrolladores inmobiliarios con control de presupuesto, avance de obra y ministraciones." },
              { title: "Crédito Retail", desc: "Control de anticipos por adquisición de artículos, registro de bienes e incautación por incumplimiento." },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Funcionalidades adicionales</h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Carga de documentación (contratos, pagarés)",
              "Desembolso con fecha valor",
              "Cuentas referenciadas para pagos",
              "Posposición de cuotas",
              "Grupo de interés económico",
              "Refinanciaciones y renovaciones",
              "IVA sobre intereses reales por tipo de crédito",
              "Recuperación de créditos y pagos masivos",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-sysde-blue mt-0.5 font-bold">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Clientes y Seguridad */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div {...fade()} className="p-7 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 text-sysde-blue" />
            <h3 className="text-lg font-bold text-foreground">Módulo Clientes</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Gestión de información de personas físicas y jurídicas. Consolida datos de clientes
            en un solo lugar para análisis y estrategias efectivas.
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>✓ Personas físicas y morales</li>
            <li>✓ Máscaras de identificación configurables</li>
            <li>✓ Cliente único por institución</li>
            <li>✓ Carga de documentación digital</li>
            <li>✓ Catálogos de actividad económica</li>
            <li>✓ Referencias personales y comerciales</li>
            <li>✓ Convenios para créditos nómina</li>
          </ul>
        </motion.div>

        <motion.div {...fade(0.1)} className="p-7 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-sysde-red" />
            <h3 className="text-lg font-bold text-foreground">Módulo Seguridad</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Administración de perfiles de usuario agrupados en roles de trabajo con
            permisos de acceso granulares por objeto/ventana.
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li>✓ Gestión de usuarios y datos generales</li>
            <li>✓ Parámetros generales de seguridad</li>
            <li>✓ Asignación de roles y permisos</li>
            <li>✓ Transacciones por usuario</li>
            <li>✓ Vigencia y conformación de contraseñas</li>
            <li>✓ Catálogo de puestos y roles</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ModulesSection;
