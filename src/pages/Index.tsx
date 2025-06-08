import { useState } from "react";
import { VehicleCard } from "@/components/VehicleCard";
import { VehicleFilters } from "@/components/VehicleFilters";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutGrid, List, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface FilterState {
  search: string;
  brand: string;
  priceRange: string;
  year: string;
  fuel: string;
  transmission: string;
}

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
    id: "2",
    name: "Uno Sporting 1.4",
    brand: "Fiat",
    model: "Uno Sporting",
    year: 2014,
    price: 41990,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
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
  },
  {
    id: "4",
    name: "Sandero Expression 1.6",
    brand: "Renault",
    model: "Sandero",
    year: 2014,
    price: 42990,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    fuel: "Flex",
    transmission: "Manual",
    seats: 5
  },
  {
    id: "5",
    name: "Prisma LTZ 1.4",
    brand: "Chevrolet",
    model: "Prisma",
    year: 2018,
    price: 56990,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
    fuel: "Flex",
    transmission: "Automático",
    seats: 5
  },
  {
    id: "6",
    name: "Palio TRK 2.4 Aut.",
    brand: "Fiat",
    model: "Palio Adventure",
    year: 2016,
    price: 55000,
    image: "https://images.unsplash.com/photo-1494976688153-ca3ce9999ddb?w=400&h=300&fit=crop",
    fuel: "Flex",
    transmission: "Automático",
    seats: 5
  }
];

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    brand: '',
    priceRange: '',
    year: '',
    fuel: '',
    transmission: ''
  });

  const handleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
    
    toast({
      title: favorites.includes(id) ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: "Acesse seus favoritos no menu lateral",
    });
  };

  const handleScheduleVisit = (id: string) => {
    toast({
      title: "Agendamento solicitado",
      description: "Entraremos em contato para confirmar sua visita",
    });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      priceRange: '',
      year: '',
      fuel: '',
      transmission: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Veículos Disponíveis</h1>
              <p className="text-gray-600">Encontre o carro dos seus sonhos</p>
            </div>
          </div>
          
          
          <div className="flex items-center gap-3">            
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/schedule-evaluation')}
            >
              <Plus className="w-4 h-4 mr-2" />
              Vender Meu Carro
            </Button>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <VehicleFilters 
          filters={filters}
          onFiltersChange={setFilters}
          onClearFilters={clearFilters}
        />

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{mockVehicles.length}</span> veículos encontrados
          </p>
        </div>

        {/* Vehicle grid */}
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "space-y-4"
        }>
          {mockVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              {...vehicle}
              isFavorite={favorites.includes(vehicle.id)}
              onFavorite={handleFavorite}
              onScheduleVisit={handleScheduleVisit}
            />
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Carregar mais veículos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
