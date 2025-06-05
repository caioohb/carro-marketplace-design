
import {
  Car,
  Home,
  Heart,
  Calendar,
  Users,
  Settings,
  PlusCircle,
  BarChart3,
  Shield
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const userMenuItems = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Veículos",
    url: "/vehicles",
    icon: Car,
  },
  {
    title: "Favoritos",
    url: "/favorites",
    icon: Heart,
  },
  {
    title: "Agendamentos",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Vender Carro",
    url: "/sell",
    icon: PlusCircle,
  },
];

const adminMenuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: BarChart3,
  },
  {
    title: "Gerenciar Veículos",
    url: "/admin/vehicles",
    icon: Car,
  },
  {
    title: "Usuários",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Agendamentos",
    url: "/admin/appointments",
    icon: Calendar,
  },
];

interface AppSidebarProps {
  isAdmin?: boolean;
}

export function AppSidebar({ isAdmin = false }: AppSidebarProps) {
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border p-6 bg-brand-primary">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white tracking-wide">TALENTO</h2>
            <p className="text-xs text-white/80 font-medium">Veículos Premium</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider">
            {isAdmin ? "Administração" : "Menu Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 rounded-lg mx-1 group"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-4 py-3 rounded-lg">
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider">
              Sistema
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 rounded-lg mx-1 group">
                    <a href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg">
                      <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium">Configurações</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4 bg-sidebar-accent/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-secondary/20 rounded-full flex items-center justify-center border border-brand-secondary/30">
            {isAdmin ? <Shield className="w-5 h-5 text-brand-secondary" /> : <Users className="w-5 h-5 text-brand-secondary" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-sidebar-foreground">
              {isAdmin ? "Administrador" : "Usuário"}
            </p>
            <p className="text-xs text-sidebar-foreground/70">
              {isAdmin ? "admin@talento.com" : "user@example.com"}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
