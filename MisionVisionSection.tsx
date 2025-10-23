import { Target, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MisionVisionSection() {
  return (
    <section className="py-20 px-4 bg-card/30" data-testid="section-mision-vision">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card id="mision" className="p-8 hover-elevate transition-all duration-300" data-testid="card-mision">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  Nuestra Misión
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Proporcionar servicios eléctricos de la más alta calidad con 
              un enfoque en la <span className="text-foreground font-semibold">seguridad</span>, 
              <span className="text-foreground font-semibold"> eficiencia</span> y 
              <span className="text-foreground font-semibold"> satisfacción del cliente</span>.
            </p>
            <p className="text-muted-foreground">
              Nos comprometemos a ser transparentes en cada proyecto, ofreciendo 
              presupuestos claros, plazos realistas y resultados excepcionales 
              que superen las expectativas de nuestros clientes.
            </p>
          </Card>

          <Card id="vision" className="p-8 hover-elevate transition-all duration-300" data-testid="card-vision">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-7 h-7 text-chart-2" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  Nuestra Visión
                </h2>
                <div className="h-1 w-20 bg-chart-2 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Ser la empresa eléctrica de <span className="text-foreground font-semibold">referencia en Madrid</span>, 
              reconocida por nuestra ética profesional, innovación técnica 
              y compromiso con la excelencia.
            </p>
            <p className="text-muted-foreground">
              Aspiramos a construir relaciones duraderas basadas en la confianza, 
              siendo la primera opción tanto para hogares, negocios y profesionales 
              del sector que buscan calidad y fiabilidad en sus instalaciones eléctricas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
