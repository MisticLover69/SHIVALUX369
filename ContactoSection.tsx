import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactoSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, tipo: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      tipo,
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      mensaje: formData.get("mensaje") as string,
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto. Gracias por confiar en SHIVALUX 369.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-card/30" data-testid="section-contacto">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Cuéntanos tu proyecto o necesidad eléctrica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold mb-2">Teléfono</h3>
            <a href="tel:+34123456789" className="text-muted-foreground hover:text-primary transition-colors">
              +34 123 456 789
            </a>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="font-heading font-bold mb-2">Email</h3>
            <a href="mailto:luismiguel.leal@shivalux369.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
              luismiguel.leal@shivalux369.com
            </a>
          </Card>

          <Card className="p-6 text-center hover-elevate transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-chart-3/20 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="font-heading font-bold mb-2">Ubicación</h3>
            <p className="text-muted-foreground">
              Madrid, España
            </p>
          </Card>
        </div>

        <Card className="p-8">
          <Tabs defaultValue="particulares" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="particulares" data-service-type="particulares" data-testid="tab-particulares">
                Particulares
              </TabsTrigger>
              <TabsTrigger value="negocios" data-service-type="negocios" data-testid="tab-negocios">
                Negocios
              </TabsTrigger>
              <TabsTrigger value="contratistas" data-service-type="contratistas" data-testid="tab-contratistas">
                Contratistas
              </TabsTrigger>
            </TabsList>

            {["particulares", "negocios", "contratistas"].map((tipo) => (
              <TabsContent key={tipo} value={tipo} className="mt-6">
                <form onSubmit={(e) => handleSubmit(e, tipo)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor={`nombre-${tipo}`}>Nombre completo *</Label>
                      <Input
                        id={`nombre-${tipo}`}
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        data-testid={`input-nombre-${tipo}`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`email-${tipo}`}>Email *</Label>
                      <Input
                        id={`email-${tipo}`}
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        data-testid={`input-email-${tipo}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`telefono-${tipo}`}>Teléfono *</Label>
                    <Input
                      id={`telefono-${tipo}`}
                      name="telefono"
                      type="tel"
                      required
                      placeholder="+34 123 456 789"
                      data-testid={`input-telefono-${tipo}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`mensaje-${tipo}`}>Mensaje *</Label>
                    <Textarea
                      id={`mensaje-${tipo}`}
                      name="mensaje"
                      required
                      placeholder="Cuéntanos tu proyecto o necesidad eléctrica..."
                      rows={6}
                      data-testid={`textarea-mensaje-${tipo}`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover-elevate active-elevate-2"
                    disabled={isSubmitting}
                    data-testid={`button-enviar-${tipo}`}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </section>
  );
}
