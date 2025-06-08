
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
      <div className="min-h-screen flex w-full bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-darker dark:to-brand-900">
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-white/80 dark:bg-brand-darker/80 backdrop-blur-sm border-b border-brand-200 dark:border-brand-700 px-6 py-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <Button variant="ghost" size="sm" onClick={() => window.history.back()} className="text-brand-600 hover:text-brand-700 hover:bg-brand-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-brand-darker dark:text-brand-50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  Meus Favoritos
                </h1>
                <p className="text-brand-600 dark:text-brand-300 mt-1">Veículos que você marcou como favoritos</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {favoriteVehicles.length > 0 ? (
              <>
                <div className="mb-8">
                  <div className="bg-white/60 dark:bg-brand-darker/60 backdrop-blur-sm rounded-xl p-6 border border-brand-200 dark:border-brand-700">
                    <p className="text-brand-600 dark:text-brand-300 text-lg">
                      Você tem <span className="font-bold text-brand-primary text-xl">{favoriteVehicles.length}</span> veículo{favoriteVehicles.length > 1 ? 's' : ''} favorito{favoriteVehicles.length > 1 ? 's' : ''}
                    </p>
                  </div>
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
              <div className="text-center py-16">
                <div className="bg-white/60 dark:bg-brand-darker/60 backdrop-blur-sm rounded-2xl p-12 border border-brand-200 dark:border-brand-700 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-darker dark:text-brand-50 mb-3">Nenhum favorito ainda</h2>
                  <p className="text-brand-600 dark:text-brand-300 mb-8 leading-relaxed">Adicione veículos aos seus favoritos para vê-los aqui</p>
                  <Button 
                    onClick={() => window.location.href = "/"} 
                    className="bg-gradient-brand hover:shadow-lg text-white border-0 px-8 py-3 rounded-xl transition-all duration-200"
                  >
                    Explorar Veículos
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Favorites;
