import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const PublicNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Início';
      case '/vehicles':
        return 'Veículos';
      case '/login':
        return 'Login';
      case '/register':
        return 'Cadastro';
      case '/schedule-evaluation':
        return 'Agendar Avaliação';
      case '/simulate-financing':
        return 'Simular Financiamento';
      default:
        if (location.pathname.startsWith('/vehicle/')) {
          return 'Detalhes do Veículo';
        }
        return '';
    }
  };

  const showBackButton = () => {
    // Não mostrar o botão de voltar na página inicial
    return location.pathname !== '/';
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <Button variant="outline" onClick={() => navigate('/profile')}>
                Meu Perfil
              </Button>
            ) : (
              <Button variant="outline" onClick={() => navigate('/login')}>
                Entrar
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicNav; 