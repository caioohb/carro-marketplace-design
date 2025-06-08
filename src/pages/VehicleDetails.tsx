import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Calendar, 
  Phone, 
  MapPin, 
  Fuel, 
  Settings2, 
  Users, 
  Car,
  CheckCircle,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useLocation } from 'react-router-dom';

const VehicleDetails = () => {
  const { toast } = useToast();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Verifica se está vindo da página de interesses
  const isFromInterests = location.pathname === '/vehicle/1';

  const vehicle = {
    id: "3",
    name: "Tucson GL 2.0 Aut.",
    brand: "Hyundai",
    model: "Tucson",
    year: 2007,
    price: 34990,
    description: "Carro em excelente estado, com garantia, apenas R$ 34.990,00. Disponível para entrega! Entregue com garantia de até 3 anos. Lembrado que fazemos financiamento até 60% pagando o resto sem consulta ao SPC, até mesmo para pessoa jurídica. Aceitamos veículos na troca. Chamem elos WhatsApp e agendem sua visita. Estamos localizados no centro de São Paulo.",
    quilometragem: 90000,
    fuel: "Gasolina",
    transmission: "Automático",
    seats: 5,
    color: "Prata",
    doors: 4,
    features: [
      "Vidro elétrico",
      "Direção hidráulica", 
      "Ar-condicionado",
      "Alarme",
      "Som"
    ],
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop"
    ],
    seller: {
      name: "Talento Veículos",
      rating: 4.8,
      location: "São Paulo, SP",
      phone: "(11) 99999-9999"
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: "Acesse seus favoritos no menu lateral",
    });
  };

  const handleScheduleVisit = () => {
    toast({
      title: "Agendamento solicitado",
      description: "Entraremos em contato para confirmar sua visita",
    });
  };

  const handleContact = () => {
    toast({
      title: "Contato iniciado",
      description: "Abrindo WhatsApp para contato direto",
    });
  };

  const handleSimulateFinancing = () => {
    navigate(`/simulate-financing?name=${encodeURIComponent(vehicle.name)}&value=${vehicle.price}&image=${encodeURIComponent(vehicle.images[currentImage])}`);
  };

  return (
    <div className="p-6">
       <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Detalhes do Veículo</h1>
              <p className="text-gray-600">Informações completas sobre o veículo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Images and details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image gallery */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={vehicle.images[currentImage]} 
                  alt={vehicle.name}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 ${
                          index === currentImage ? 'border-primary' : 'border-white'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle specifications */}
          <Card>
            <CardHeader>
              <CardTitle>Especificações do Veículo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-600">Quilometragem</p>
                  <p className="font-semibold">{vehicle.quilometragem.toLocaleString()} km</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Fuel className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-600">Combustível</p>
                  <p className="font-semibold">{vehicle.fuel}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Settings2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-600">Transmissão</p>
                  <p className="font-semibold">{vehicle.transmission}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-gray-600">Lugares</p>
                  <p className="font-semibold">{vehicle.seats} lugares</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Cor</p>
                  <p className="font-semibold">{vehicle.color}</p>
                </div>
                <div>
                  <p className="text-gray-600">Portas</p>
                  <p className="font-semibold">{vehicle.doors} portas</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Itens de Série</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 whitespace-pre-line">{vehicle.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price card */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{formatPrice(vehicle.price)}</p>
                <p className="text-sm text-gray-600 mt-1">Preço à vista</p>
              </div>

              <div className="mt-6 space-y-4">
                <Button className="w-full" onClick={handleScheduleVisit}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Visita
                </Button>
                <Button variant="outline" className="w-full" onClick={handleContact}>
                  <Phone className="w-4 h-4 mr-2" />
                  Falar com Vendedor
                </Button>
                <Button variant="outline" className="w-full" onClick={handleSimulateFinancing}>
                  Simular Financiamento
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Seller info */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Vendedor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{vehicle.seller.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{vehicle.seller.rating}</span>
                    </div>
                  </div>
                  <Badge variant="secondary">Concessionária</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{vehicle.seller.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{vehicle.seller.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;