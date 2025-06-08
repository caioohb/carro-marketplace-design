
import { Car, Heart, Calendar, Users, Settings, PlusCircle, BarChart3, ShoppingBag, LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useSidebarState } from "@/hooks/useSidebarState";

const adminMenuItems = [
  { title: "Agendamentos", url: "/appointments", icon: Calendar },
  { title: "Vendas", url: "/admin/sales", icon: ShoppingBag },
  { title: "Dashboard de Vendas", url: "/admin/sales-dashboard", icon: BarChart3 },
  { title: "Inserir Carro", url: "/sell", icon: PlusCircle },
  { title: "Gerenciar Veículos", url: "/admin/vehicles", icon: Car },
];

const userMenuItems = [
  { title: "Favoritos", url: "/favorites", icon: Heart },
  { title: "Meus Interesses", url: "/interests", icon: Heart },
  { title: "Minhas Vendas", url: "/my-sales", icon: ShoppingBag },
];

export function CustomSidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isExpanded, toggleSidebar } = useSidebarState();

  console.log('CustomSidebar render - isExpanded:', isExpanded);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNavigation = (url: string) => {
    navigate(url);
  };

  const menuItems = user?.type === 'admin' ? adminMenuItems : userMenuItems;

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-50 flex flex-col ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-4 bg-brand-primary flex-shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 flex-shrink-0">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div className={`min-w-0 flex-1 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
              {isExpanded && (
                <>
                  <h2 className="text-lg font-bold text-white tracking-wide truncate">TALENTO</h2>
                  <p className="text-xs text-white/80 font-medium truncate">Veículos Premium</p>
                </>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/20 flex-shrink-0"
            onClick={toggleSidebar}
          >
            {isExpanded ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0'}`}>
          {isExpanded && (user?.type === 'admin' ? 'Administração' : 'Menu Principal')}
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavigation(item.url)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                !isExpanded ? 'justify-center' : ''
              }`}
              title={!isExpanded ? item.title : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className={`truncate transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
                {isExpanded && item.title}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-3 flex-shrink-0">
        <button 
          onClick={() => navigate('/profile')}
          className={`w-full flex items-center gap-3 hover:bg-gray-100 transition-colors rounded-lg p-2 mb-2 ${
            !isExpanded ? 'justify-center' : ''
          }`}
          title={!isExpanded ? 'Perfil' : undefined}
        >
          <div className="w-8 h-8 bg-brand-secondary/20 rounded-full flex items-center justify-center border border-brand-secondary/30 flex-shrink-0">
            <Users className="w-4 h-4 text-brand-secondary" />
          </div>
          <div className={`text-left min-w-0 flex-1 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
            {isExpanded && (
              <>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user?.type === 'admin' ? 'Administrador' : 'Meu Perfil'}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {user?.email || 'user@example.com'}
                </p>
              </>
            )}
          </div>
        </button>
        
        <button 
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 hover:bg-red-100 hover:text-red-700 transition-colors rounded-lg p-2 ${
            !isExpanded ? 'justify-center' : ''
          }`}
          title={!isExpanded ? 'Sair' : undefined}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span className={`text-sm font-medium transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
            {isExpanded && 'Sair'}
          </span>
        </button>
      </div>
    </div>
  );
}
