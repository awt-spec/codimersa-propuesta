import { useState, useCallback } from "react";
import { Maximize, Minimize } from "lucide-react";
import ProposalHero from "@/components/proposal/ProposalHero";
import ExecutiveLetter from "@/components/proposal/ExecutiveLetter";
import SolutionOverview from "@/components/proposal/SolutionOverview";
import ModulesSection from "@/components/proposal/ModulesSection";
import BenefitsAndInfra from "@/components/proposal/BenefitsAndInfra";
import SubscriptionModel from "@/components/proposal/SubscriptionModel";
import EconomicProposal from "@/components/proposal/EconomicProposal";
import VisionAndTimeline from "@/components/proposal/VisionAndTimeline";
import ProposalFooter from "@/components/proposal/ProposalFooter";
import ProposalChatbot from "@/components/proposal/ProposalChatbot";

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg hover:bg-accent transition-colors"
        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
      >
        {isFullscreen ? <Minimize className="h-4 w-4 text-foreground" /> : <Maximize className="h-4 w-4 text-foreground" />}
      </button>

      <ProposalHero />
      <div id="presentacion">
        <ExecutiveLetter />
      </div>
      <div id="solucion">
        <SolutionOverview />
      </div>
      <div id="modulos">
        <ModulesSection />
      </div>
      <div id="beneficios">
        <BenefitsAndInfra />
      </div>
      <div id="vision">
        <VisionAndTimeline />
      </div>
      <div id="suscripcion">
        <SubscriptionModel />
      </div>
      <div id="propuesta">
        <EconomicProposal />
      </div>
      <div id="contacto">
        <ProposalFooter />
      </div>
      <ProposalChatbot />
    </div>
  );
};

export default Index;
