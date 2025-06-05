
import { Heart, Calendar, MapPin, Fuel, Users, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehicleCardProps {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  location?: string;
  fuel?: string;
  transmission?: string;
  seats?: number;
  isFavorite?: boolean;
  onFavorite?: (id: string) => void;
  onScheduleVisit?: (id: string) => void;
}

export function VehicleCard({
  id,
  name,
  brand,
  model,
  year,
  price,
  image,
  location = "São Paulo, SP",
  fuel = "Flex",
  transmission = "Automático",
  seats = 5,
  isFavorite = false,
  onFavorite,
  onScheduleVisit
}: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Card className="group car-card-shadow hover-scale cursor-pointer overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 z-10">
          <Button
            size="sm"
            variant="ghost"
            className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite?.(id);
            }}
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {year}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-600">
              {brand} {model}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Fuel className="w-3 h-3" />
              <span>{fuel}</span>
            </div>
            <div className="flex items-center gap-1">
              <Settings2 className="w-3 h-3" />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{seats} lugares</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(price)}
            </div>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={(e) => {
                e.stopPropagation();
                onScheduleVisit?.(id);
              }}
            >
              <Calendar className="w-4 h-4 mr-1" />
              Agendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
