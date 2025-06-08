import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Car } from "lucide-react";

const PublicNav = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">WHITE</h2>
                <p className="text-xs text-muted-foreground">Veículos Premium</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('comprar')} className="text-foreground hover:text-primary transition-colors">
                Comprar
              </button>
              <button onClick={() => scrollToSection('vender')} className="text-foreground hover:text-primary transition-colors">
                Vender
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('programas')} className="text-foreground hover:text-primary transition-colors">
                Programas
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors">
                Contato
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('unidade')} className="text-foreground hover:text-primary transition-colors">
                Unidade
              </button>
            </div>

            {user ? (
              <Button onClick={() => navigate('/profile')} variant="outline">
                Meu Perfil
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} variant="outline">
                Login
              </Button>
            )}
          </div>
        </nav>
      </header>
      <div className="h-[72px]" /> {/* Espaçador para compensar a navegação fixa */}
    </>
  );
};

export default PublicNav;
