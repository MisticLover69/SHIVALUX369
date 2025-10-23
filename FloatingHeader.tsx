import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#inicio", label: "Inicio", variant: "gold" as const },
  { href: "#somos", label: "Somos", variant: "gold" as const },
  { href: "#mision", label: "Misión", variant: "gold" as const },
  { href: "#vision", label: "Visión", variant: "gold" as const },
  { href: "#compromiso", label: "Compromiso", variant: "teal" as const },
  { href: "#servicios", label: "Servicios", variant: "teal" as const },
  { href: "#proceso", label: "Proceso", variant: "teal" as const },
  { href: "#trabajos", label: "Trabajos", variant: "gold" as const },
  { href: "#unete", label: "Únete", variant: "gold" as const },
  { href: "#contacto", label: "Contacto", variant: "teal" as const },
];

export function FloatingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolled(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsPanelOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-3 left-0 right-0 z-[1200] px-4 transition-all duration-300`}
        data-testid="header-floating"
      >
        <nav
          className={`max-w-container mx-auto backdrop-blur-md border rounded-[14px] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 ${
            isScrolled 
              ? "bg-[rgba(15,16,20,0.98)] border-[rgba(120,144,180,0.4)]" 
              : "bg-[rgba(15,16,20,0.85)] border-[rgba(120,144,180,0.25)]"
          }`}
          role="navigation"
          aria-label="Navegación principal"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground">
                S
              </div>
              <span className="font-heading font-bold text-lg text-foreground hidden sm:inline">
                SHIVALUX 369
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    font-heading inline-block px-3 py-2 rounded-lg border-2 border-transparent text-sm
                    transition-all duration-200 hover:-translate-y-px
                    ${
                      item.variant === "gold"
                        ? "bg-[rgba(225,177,44,0.10)] border-[rgba(225,177,44,0.35)] hover:bg-[rgba(225,177,44,0.18)] hover:border-primary hover:text-[#ffd166]"
                        : "bg-[rgba(34,197,94,0.10)] border-[rgba(45,212,191,0.35)] hover:bg-[rgba(45,212,191,0.18)] hover:border-[rgba(45,212,191,1)] hover:text-[#9ff6ea]"
                    }
                  `}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <button
        className="lg:hidden fixed top-4 right-4 z-[1300] w-12 h-12 rounded-full border border-[rgba(120,144,180,0.35)] bg-[rgba(15,16,20,0.92)] text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center text-lg cursor-pointer transition-all duration-300"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        aria-label="Abrir menú"
        data-testid="button-menu-fab"
      >
        {isPanelOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black/45 backdrop-blur-sm z-[1250]"
          onClick={() => setIsPanelOpen(false)}
          data-testid="overlay-menu-panel"
        >
          <div
            className="absolute top-[72px] right-4 w-[min(88vw,360px)] bg-[rgba(15,16,20,0.98)] border border-[rgba(120,144,180,0.35)] rounded-2xl p-3 shadow-[0_20px_48px_rgba(0,0,0,0.45)] animate-in fade-in slide-in-from-top-2 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 my-1 rounded-lg text-foreground border border-transparent hover:bg-[rgba(225,177,44,0.12)] hover:border-[rgba(225,177,44,0.4)] transition-all duration-150"
                data-testid={`link-panel-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
