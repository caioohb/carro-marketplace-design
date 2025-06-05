
import { Heart, Calendar, MapPin, Fuel, Users, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
    <Link to={`/vehicle/${id}`}>
      <Card className="group car-card-shadow hover-scale cursor-pointer overflow-hidden bg-white dark:bg-brand-darker border-brand-300 dark:border-brand-700">
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
              className="w-8 h-8 p-0 bg-white/95 hover:bg-brand-50 backdrop-blur-sm border border-brand-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFavorite?.(id);
              }}
            >
              <Heart 
                className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-brand-600'}`} 
              />
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/95 text-brand-700 border-brand-200 backdrop-blur-sm">
              {year}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-brand-darker dark:text-brand-50 line-clamp-1 mb-1">
                {name}
              </h3>
              <p className="text-sm text-brand-600 dark:text-brand-300">
                {brand} {model}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-brand-500 dark:text-brand-400">
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
            
            <div className="flex items-center gap-1 text-xs text-brand-500 dark:text-brand-400">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-brand-100 dark:border-brand-800">
              <div className="text-2xl font-bold text-brand-secondary">
                {formatPrice(price)}
              </div>
              <Button 
                size="sm" 
                className="bg-brand-primary hover:bg-brand-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
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
    </Link>
  );
}
