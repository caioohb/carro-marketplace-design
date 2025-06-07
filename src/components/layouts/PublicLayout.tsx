import React from "react";
import PublicNav from "@/components/PublicNav";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNav />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default PublicLayout; 