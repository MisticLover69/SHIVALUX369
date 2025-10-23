import { PhoneCall, Calendar, Hammer, CheckCircle2, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const pasos = [
  {
    numero: "1",
    icon: PhoneCall,
    title: "Contacto inicial",
    description: "Nos ponemos en contacto contigo para entender tus necesidades específicas.",
  },
  {
    numero: "2",
    icon: FileCheck,
    title: "Presupuesto detallado",
    description: "Elaboramos un presupuesto claro y transparente, sin sorpresas ni costes ocultos.",
  },
  {
    numero: "3",
    icon: Calendar,
    title: "Planificación",
    description: "Acordamos fechas y planificamos cada fase del proyecto para cumplir plazos.",
  },
  {
    numero: "4",
    icon: Hammer,
    title: "Ejecución profesional",
    description: "Nuestro equipo cualificado realiza la instalación con máxima calidad y seguridad.",
  },
  {
    numero: "5",
    icon: CheckCircle2,
    title: "Entrega y garantía",
    description: "Verificamos que todo funciona perfectamente y te entregamos las garantías correspondientes.",
  },
];

export function ProcesoSection() {
  return (
    <section id="proceso" className="py-20 px-4 bg-background" data-testid="section-proceso">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un método probado que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pasos.map((paso, index) => {
            const Icon = paso.icon;
            return (
              <div key={index} className="relative">
                <Card
                  className="p-6 text-center hover-elevate transition-all duration-300 h-full flex flex-col"
                  data-testid={`card-paso-${index + 1}`}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto relative z-10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-primary/30 animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">
                    {paso.numero}
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-3">
                    {paso.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {paso.description}
                  </p>
                </Card>
                {index < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 -translate-y-1/2 z-0"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-chart-2/10 border border-primary/20 text-center">
          <p className="text-lg">
            <span className="font-bold text-primary">Transparencia y calidad</span> en cada paso. 
            Desde el primer contacto hasta la garantía final, estarás informado y respaldado.
          </p>
        </div>
      </div>
    </section>
  );
}
