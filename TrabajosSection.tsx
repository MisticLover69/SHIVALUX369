import { Card } from "@/components/ui/card";
import { Home, Building, Factory, Lightbulb, Shield, Zap } from "lucide-react";

const proyectos = [
  {
    icon: Home,
    title: "Reforma integral vivienda",
    categoria: "Particulares",
    descripcion: "Instalación eléctrica completa en vivienda de 120m². Domótica, LED y cuadro eléctrico nuevo.",
  },
  {
    icon: Building,
    title: "Oficinas corporativas",
    categoria: "Negocios",
    descripcion: "Instalación para oficina de 300m². Cableado estructurado, iluminación profesional y SAI.",
  },
  {
    icon: Factory,
    title: "Nave industrial",
    categoria: "Contratistas",
    descripcion: "Proyecto eléctrico completo en nave de 1000m². Trifásica, maquinaria pesada y normativa industrial.",
  },
  {
    icon: Lightbulb,
    title: "Iluminación LED comercio",
    categoria: "Negocios",
    descripcion: "Renovación completa de iluminación en local comercial. Ahorro energético del 60%.",
  },
  {
    icon: Shield,
    title: "Certificación eléctrica",
    categoria: "Particulares",
    descripcion: "Boletín eléctrico y certificado de instalación para compraventa de vivienda.",
  },
  {
    icon: Zap,
    title: "Emergencia comercio",
    categoria: "Negocios",
    descripcion: "Reparación urgente en restaurante. Solución en 2 horas, servicio funcionando el mismo día.",
  },
];

export function TrabajosSection() {
  return (
    <section id="trabajos" className="py-20 px-4 bg-card/30" data-testid="section-trabajos">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Proyectos Realizados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencia demostrada en instalaciones eléctricas de todo tipo y complejidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => {
            const Icon = proyecto.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-proyecto-${index}`}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                  <Icon className="w-20 h-20 text-primary/60" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-semibold">
                    {proyecto.categoria}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {proyecto.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {proyecto.descripcion}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Quieres ver más detalles de nuestros proyectos? Contacta con nosotros para conocer casos específicos.
          </p>
        </div>
      </div>
    </section>
  );
}
