import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const MyInterests = () => {
  const navigate = useNavigate();
  const interests = [
    {
      id: "1",
      name: "Tucson GL 2.0 Aut.",
      brand: "Hyundai",
      year: 2007,
      price: 34990,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      visitDate: "2023-10-15",
      visitTime: "14:00",
    },
    {
      id: "2",
      name: "Civic LX 2.0",
      brand: "Honda",
      year: 2010,
      price: 45000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      visitDate: "2023-10-20",
      visitTime: "10:00",
    },
    // Add more interests as needed
  ];

  const purchases = [
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
    // Add more purchases as needed
  ];

  const handleCardClick = (id: string) => {
    navigate(`/vehicle/${id}`);
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
                  Meus Interesses
                </h1>
                <p className="text-gray-600">Carros que você demonstrou interesse</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Carros de Interesse</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest) => (
                <div key={interest.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden cursor-pointer" onClick={() => handleCardClick(interest.id)}>
                  <img src={interest.image} alt={interest.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{interest.name}</h2>
                    <p className="text-sm text-gray-600">{interest.brand} • {interest.year}</p>
                    <p className="text-lg font-bold text-primary mt-2">R$ {interest.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-600 mt-2">Visita: {interest.visitDate} às {interest.visitTime}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Carros Comprados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden cursor-pointer" onClick={() => handleCardClick(purchase.id)}>
                  <img src={purchase.image} alt={purchase.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{purchase.name}</h2>
                    <p className="text-sm text-gray-600">{purchase.brand} • {purchase.year}</p>
                    <p className="text-lg font-bold text-primary mt-2">R$ {purchase.price.toFixed(2)}</p>
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

export default MyInterests; 