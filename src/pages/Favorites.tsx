import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
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
    <div className="space-y-6">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Meus Favoritos
            </h1>
            <p className="text-gray-600">Carros que você favoritou</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {favoriteVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 border border-gray-200 max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Nenhum favorito ainda</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">Adicione veículos aos seus favoritos para vê-los aqui</p>
              <Button 
                onClick={() => window.location.href = "/"} 
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Explorar Veículos
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
