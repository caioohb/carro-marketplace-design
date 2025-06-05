
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Favorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>(["1", "3"]); // Mock favorites

  const mockVehicles = [
    {
      id: "1",
      name: "Uno Vivace 1.0",
      brand: "Fiat",
      model: "Uno Vivace",
      year: 2012,
      price: 27990,
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      fuel: "Flex",
      transmission: "Manual",
      seats: 4
    },
    {
      id: "3",
      name: "Tucson GL 2.0 Aut.",
      brand: "Hyundai",
      model: "Tucson",
      year: 2007,
      price: 34990,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      fuel: "Gasolina",
      transmission: "Automático",
      seats: 5
    }
  ];

  const favoriteVehicles = mockVehicles.filter(vehicle => favorites.includes(vehicle.id));

  const handleFavorite = (id: string) => {
    setFavorites(prev => prev.filter(favId => favId !== id));
    toast({
      title: "Removido dos favoritos",
      description: "Veículo removido da sua lista de favoritos",
    });
  };

  const handleScheduleVisit = (id: string) => {
    toast({
      title: "Agendamento solicitado",
      description: "Entraremos em contato para confirmar sua visita",
    });
  };

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
                  <Heart className="w-6 h-6 text-primary" />
                  Meus Favoritos
                </h1>
                <p className="text-gray-600">Veículos que você marcou como favoritos</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {favoriteVehicles.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{favoriteVehicles.length}</span> veículo{favoriteVehicles.length > 1 ? 's' : ''} favorito{favoriteVehicles.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {favoriteVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      {...vehicle}
                      isFavorite={true}
                      onFavorite={handleFavorite}
                      onScheduleVisit={handleScheduleVisit}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Nenhum favorito ainda</h2>
                <p className="text-gray-600 mb-6">Adicione veículos aos seus favoritos para vê-los aqui</p>
                <Button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-primary/90">
                  Explorar Veículos
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Favorites;
