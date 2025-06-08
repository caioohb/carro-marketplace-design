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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Minhas Vendas</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sales.map((sale) => (
          <div
            key={sale.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
          >
            <div className="aspect-video relative">
              <img
                src={sale.image}
                alt={sale.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Car className="w-4 h-4 text-gray-500" />
                <h3 className="font-semibold">{sale.name}</h3>
              </div>
              <div className="text-sm text-gray-500">
                <p>{sale.brand} • {sale.year}</p>
                <p className="font-semibold text-gray-900 mt-1">
                  R$ {sale.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySales; 