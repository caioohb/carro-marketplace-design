
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  const { isAuthenticated } = useAuth();
  
  const shouldShowSidebar = showSidebar && isAuthenticated;

  if (shouldShowSidebar) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="min-h-screen w-full">
      {children}
    </div>
  );
};
