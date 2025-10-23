import { Home, Briefcase, Wrench, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicios = [
  {
    type: "particulares",
    icon: Home,
    title: "Particulares",
    description: "Instalaciones eléctricas para hogares, reformas, averías urgentes y certificados. Atención personalizada para tu vivienda.",
    color: "border-chart-2",
    bgColor: "bg-chart-2",
    items: [
      "Instalaciones nuevas y reformas completas",
      "Reparación de averías eléctricas",
      "Boletines y certificados eléctricos",
      "Automatización del hogar",
      "Iluminación LED y eficiencia energética",
    ],
  },
  {
    type: "negocios",
    icon: Briefcase,
    title: "Negocios",
    description: "Soluciones eléctricas profesionales para comercios, oficinas y locales. Garantizamos continuidad y seguridad para tu negocio.",
    color: "border-chart-3",
    bgColor: "bg-chart-3",
    items: [
      "Instalaciones comerciales completas",
      "Mantenimiento preventivo y correctivo",
      "Sistemas de iluminación profesional",
      "Adaptación a normativas específicas",
      "Emergencias 24/7 para negocios",
    ],
  },
  {
    type: "contratistas",
    icon: Wrench,
    title: "Contratistas",
    description: "Colaboraciones profesionales para obras y proyectos. Experiencia y solvencia técnica para trabajos de gran envergadura.",
    color: "border-chart-4",
    bgColor: "bg-chart-4",
    items: [
      "Instalaciones en obra nueva",
      "Proyectos industriales y naves",
      "Presupuestos competitivos",
      "Cumplimiento de plazos garantizado",
      "Equipos especializados",
    ],
  },
];

export function ServiciosSection() {
  const handleContactClick = (tipo: string) => {
    const contactSection = document.querySelector("#contacto");
    if (contactSection) {
      const offset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      
      setTimeout(() => {
        const tabButton = document.querySelector(`[data-service-type="${tipo}"]`) as HTMLButtonElement;
        if (tabButton) {
          tabButton.click();
        }
      }, 500);
    }
  };

  return (
    <section id="servicios" className="py-20 px-4 bg-card/30" data-testid="section-servicios">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones eléctricas profesionales adaptadas a cada tipo de cliente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicios.map((servicio) => {
            const Icon = servicio.icon;
            return (
              <Card
                key={servicio.type}
                className={`flex flex-col border-2 ${servicio.color} hover-elevate transition-all duration-300 overflow-hidden`}
                data-testid={`card-servicio-${servicio.type}`}
              >
                <div className="p-6 flex-1">
                  <div className={`w-12 h-12 rounded-lg ${servicio.bgColor}/20 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${servicio.bgColor.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-primary">
                    {servicio.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {servicio.description}
                  </p>
                  <ul className="space-y-2">
                    {servicio.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleContactClick(servicio.type)}
                  className={`${servicio.bgColor} text-white font-semibold py-4 px-6 hover-elevate active-elevate-2 transition-all duration-200 border-t border-white/10`}
                  data-testid={`button-contactar-${servicio.type}`}
                >
                  Contactar para {servicio.title}
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
