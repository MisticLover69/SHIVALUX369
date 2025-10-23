import { Button } from "@/components/ui/button";
import { Zap, Shield, Users } from "lucide-react";

export function HeroSection() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contacto");
    if (contactSection) {
      const offset = 100;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.querySelector("#servicios");
    if (servicesSection) {
      const offset = 100;
      const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[600px] flex items-center justify-center px-4 py-24 bg-gradient-to-b from-background via-background/95 to-background"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0wLTJ2LTJoLTJ2MmgyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative max-w-container mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Electricidad con compromiso</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          SHIVALUX 369
          <span className="block text-primary mt-2">Electricidad honesta</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Empresa eléctrica en Madrid comprometida con la excelencia. 
          Servicios para <span className="text-foreground font-semibold">particulares</span>, 
          {" "}<span className="text-foreground font-semibold">negocios</span> y 
          {" "}<span className="text-foreground font-semibold">contratistas</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto text-base px-8 hover-elevate active-elevate-2"
            data-testid="button-hero-contact"
          >
            Solicitar presupuesto
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToServices}
            className="w-full sm:w-auto text-base px-8 backdrop-blur-sm hover-elevate active-elevate-2"
            data-testid="button-hero-services"
          >
            Ver servicios
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-card-border backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="font-heading font-bold text-lg">3 Clientes</h3>
            <p className="text-sm text-muted-foreground text-center">
              Particulares, Negocios y Contratistas
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-card-border backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg">6 Compromisos</h3>
            <p className="text-sm text-muted-foreground text-center">
              Calidad, seguridad y transparencia
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-card-border backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-chart-3/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="font-heading font-bold text-lg">9 Pilares</h3>
            <p className="text-sm text-muted-foreground text-center">
              Base de nuestra excelencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
