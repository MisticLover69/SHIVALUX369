import { Building2, Award, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SomosSection() {
  return (
    <section id="somos" className="py-20 px-4 bg-background" data-testid="section-somos">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SHIVALUX 369 es una empresa eléctrica con sede en Madrid, 
            comprometida con ofrecer servicios de calidad basados en 
            honestidad, profesionalidad y excelencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover-elevate transition-all duration-300" data-testid="card-valores">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold">Nuestros Valores</h3>
              <p className="text-muted-foreground">
                Honestidad, transparencia y compromiso con cada cliente. 
                Trabajamos con pasión para superar expectativas.
              </p>
            </div>
          </Card>

          <Card className="p-6 hover-elevate transition-all duration-300" data-testid="card-experiencia">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-chart-2/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-chart-2" />
              </div>
              <h3 className="font-heading text-xl font-bold">Experiencia</h3>
              <p className="text-muted-foreground">
                Profesionales cualificados con amplia experiencia en 
                instalaciones eléctricas residenciales, comerciales e industriales.
              </p>
            </div>
          </Card>

          <Card className="p-6 hover-elevate transition-all duration-300" data-testid="card-cobertura">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-chart-3/20 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="font-heading text-xl font-bold">Cobertura Madrid</h3>
              <p className="text-muted-foreground">
                Servicio completo en toda la Comunidad de Madrid. 
                Respuesta rápida y atención personalizada.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-8 rounded-lg bg-card border border-card-border">
          <p className="text-center text-lg leading-relaxed">
            En <span className="text-primary font-bold">SHIVALUX 369</span>, 
            entendemos que cada proyecto eléctrico es único. Por eso ofrecemos 
            soluciones personalizadas que se adaptan a las necesidades específicas 
            de <span className="font-semibold">particulares</span>, 
            <span className="font-semibold"> negocios</span> y 
            <span className="font-semibold"> contratistas</span>. 
            Nuestro compromiso es la electricidad honesta: sin sorpresas, 
            con calidad garantizada.
          </p>
        </div>
      </div>
    </section>
  );
}
