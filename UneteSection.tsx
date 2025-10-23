import { Button } from "@/components/ui/button";
import { Users, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function UneteSection() {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contacto");
    if (contactSection) {
      const offset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="unete" className="py-20 px-4 bg-background" data-testid="section-unete">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Únete al Equipo SHIVALUX 369
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buscamos profesionales comprometidos con la excelencia y la honestidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold mb-2">Equipo profesional</h3>
            <p className="text-sm text-muted-foreground">
              Trabaja con expertos del sector
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="font-heading font-bold mb-2">Formación continua</h3>
            <p className="text-sm text-muted-foreground">
              Actualización constante en el sector
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-chart-3/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="font-heading font-bold mb-2">Crecimiento profesional</h3>
            <p className="text-sm text-muted-foreground">
              Oportunidades de desarrollo
            </p>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-chart-4/20 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-chart-4" />
            </div>
            <h3 className="font-heading font-bold mb-2">Proyectos variados</h3>
            <p className="text-sm text-muted-foreground">
              Experiencia en múltiples sectores
            </p>
          </Card>
        </div>

        <div className="p-8 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 border border-primary/30 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4">
            ¿Eres electricista profesional?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            En SHIVALUX 369 valoramos el talento, la dedicación y los valores profesionales. 
            Si compartes nuestra visión de electricidad honesta y quieres formar parte 
            de un equipo en crecimiento, nos encantaría conocerte.
          </p>
          <Button
            size="lg"
            onClick={handleContactClick}
            className="hover-elevate active-elevate-2"
            data-testid="button-unete-contact"
          >
            Envía tu currículum
          </Button>
        </div>
      </div>
    </section>
  );
}
