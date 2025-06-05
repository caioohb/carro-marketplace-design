
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
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">TALENTO</h2>
            <p className="text-xs text-sidebar-foreground/70">Veículos</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 px-4 py-2">
            {isAdmin ? "Administração" : "Menu Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/70 px-4 py-2">
              Sistema
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <a href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-md">
                      <Settings className="w-4 h-4" />
                      <span>Configurações</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            {isAdmin ? <Shield className="w-4 h-4" /> : <Users className="w-4 h-4" />}
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">
              {isAdmin ? "Admin" : "Usuário"}
            </p>
            <p className="text-xs text-sidebar-foreground/70">
              {isAdmin ? "user@admin.com" : "user@example.com"}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
