import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const ProposalFooter = () => (
  <footer className="bg-sysde-dark text-primary-foreground/70 py-12">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-3">
          <img src={sysdeLogoSrc} alt="SYSDE" className="h-8 brightness-0 invert" />
          <div>
            <p className="font-semibold text-primary-foreground">SYSDE Inc.</p>
            <p className="text-xs opacity-60">Propuesta comercial para CODIMERSA — 11 de Marzo de 2026</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="mailto:ewheelock@sysde.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="h-4 w-4" /> ewheelock@sysde.com
          </a>
          <a href="mailto:alwheelock@sysde.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
            <Mail className="h-4 w-4" /> alwheelock@sysde.com
          </a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default ProposalFooter;
