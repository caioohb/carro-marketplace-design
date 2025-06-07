import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <SidebarTrigger className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm" />
          <main className="flex-1 overflow-x-hidden">
            <div className="p-4 md:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
} 