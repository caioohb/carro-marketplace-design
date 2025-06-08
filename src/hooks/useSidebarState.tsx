
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SidebarStateContextType {
  isExpanded: boolean;
  toggleSidebar: () => void;
  expandSidebar: () => void;
  collapseSidebar: () => void;
}

const SidebarStateContext = createContext<SidebarStateContextType | null>(null);

export const SidebarStateProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('sidebar-expanded');
    if (saved !== null) {
      setIsExpanded(JSON.parse(saved));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem('sidebar-expanded', JSON.stringify(newState));
  };

  const expandSidebar = () => {
    setIsExpanded(true);
    localStorage.setItem('sidebar-expanded', 'true');
  };

  const collapseSidebar = () => {
    setIsExpanded(false);
    localStorage.setItem('sidebar-expanded', 'false');
  };

  return (
    <SidebarStateContext.Provider value={{
      isExpanded,
      toggleSidebar,
      expandSidebar,
      collapseSidebar
    }}>
      {children}
    </SidebarStateContext.Provider>
  );
};

export const useSidebarState = () => {
  const context = useContext(SidebarStateContext);
  if (!context) {
    throw new Error('useSidebarState must be used within SidebarStateProvider');
  }
  return context;
};
