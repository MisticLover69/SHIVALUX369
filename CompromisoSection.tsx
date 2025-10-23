import { Shield, Clock, ThumbsUp, FileCheck, Lightbulb, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";

const compromisos = [
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Cumplimiento estricto de normativas y protocolos de seguridad en cada instalación.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo. Cumplimos los plazos acordados sin retrasos.",
  },
  {
    icon: ThumbsUp,
    title: "Calidad certificada",
    description: "Materiales de primera calidad y mano de obra profesional garantizada.",
  },
  {
    icon: FileCheck,
    title: "Transparencia total",
    description: "Presupuestos claros y detallados, sin costes ocultos ni sorpresas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    description: "Soluciones modernas y eficientes adaptadas a las últimas tecnologías.",
  },
  {
    icon: Handshake,
    title: "Atención personalizada",
    description: "Cada cliente es único. Servicio adaptado a tus necesidades específicas.",
  },
];

export function CompromisoSection() {
  return (
    <section id="compromiso" className="py-20 px-4 bg-background" data-testid="section-compromiso">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary font-bold">369</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nuestro Compromiso 369
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-bold">3 tipos de clientes</span>, 
            {" "}<span className="text-primary font-bold">6 compromisos fundamentales</span> y 
            {" "}<span className="text-primary font-bold">9 pilares</span> que sostienen nuestra excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compromisos.map((compromiso, index) => {
            const Icon = compromiso.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-compromiso-${index}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">
                    {compromiso.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {compromiso.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 border border-primary/20">
          <h3 className="font-heading text-xl font-bold text-center mb-4">
            Los 9 Pilares de SHIVALUX 369
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">1-3</div>
              <p className="text-sm text-muted-foreground">Profesionalidad, Experiencia, Formación continua</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">4-6</div>
              <p className="text-sm text-muted-foreground">Tecnología avanzada, Eficiencia energética, Sostenibilidad</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">7-9</div>
              <p className="text-sm text-muted-foreground">Garantía extendida, Soporte post-instalación, Mejora continua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
