
import React from "react";
import { CustomSidebar } from "@/components/CustomSidebar";
import { SidebarStateProvider, useSidebarState } from "@/hooks/useSidebarState";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

function PrivateLayoutContent({ children }: PrivateLayoutProps) {
  const { isExpanded } = useSidebarState();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <CustomSidebar />
      <div className={`flex-1 transition-all duration-300 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <SidebarStateProvider>
      <PrivateLayoutContent>{children}</PrivateLayoutContent>
    </SidebarStateProvider>
  );
}
