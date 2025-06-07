import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  const { isAuthenticated } = useAuth();
  
  // Se showSidebar for false ou não estiver autenticado, não mostra a sidebar
  if (!showSidebar || !isAuthenticated) {
    return (
      <div className="min-h-screen w-full">
        {children}
      </div>
    );
  }

  // Só mostra a sidebar se showSidebar for true E estiver autenticado
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <div className="p-2 border-b border-gray-200 bg-white md:hidden">
            <SidebarTrigger />
          </div>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}; 