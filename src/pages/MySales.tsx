import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Car } from "lucide-react";

const MySales = () => {
  const sales = [
    {
      id: "1",
      name: "Tucson GL 2.0 Aut.",
      brand: "Hyundai",
      year: 2007,
      price: 34990,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    },
    {
      id: "2",
      name: "Civic LX 2.0",
      brand: "Honda",
      year: 2010,
      price: 45000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    },
    // Add more sales as needed
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Car className="w-6 h-6 text-primary" />
                  Minhas Vendas
                </h1>
                <p className="text-gray-600">Carros que você vendeu</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sales.map((sale) => (
                <div key={sale.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                  <img src={sale.image} alt={sale.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{sale.name}</h2>
                    <p className="text-sm text-gray-600">{sale.brand} • {sale.year}</p>
                    <p className="text-lg font-bold text-primary mt-2">R$ {sale.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MySales; 