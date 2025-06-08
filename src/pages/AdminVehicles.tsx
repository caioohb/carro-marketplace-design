import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Car,
  Filter,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  status: 'pending' | 'approved' | 'rejected' | 'sold';
  seller: string;
  createdAt: string;
  image: string;
}

const AdminVehicles = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Mock data - Substitua por dados reais da sua API
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      name: "Tucson GL 2.0 Aut.",
      brand: "Hyundai",
      model: "Tucson",
      year: 2007,
      price: 34990,
      status: "pending",
      seller: "Talento Veículos",
      createdAt: "2024-03-15",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    },
    {
      id: "2",
      name: "Civic LX 2.0",
      brand: "Honda",
      model: "Civic",
      year: 2010,
      price: 45000,
      status: "approved",
      seller: "Auto Center SP",
      createdAt: "2024-03-14",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
    },
    {
      id: "3",
      name: "Uno Vivace 1.0",
      brand: "Fiat",
      model: "Uno",
      year: 2012,
      price: 27990,
      status: "rejected",
      seller: "Car Shop",
      createdAt: "2024-03-13",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop"
    }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getStatusBadge = (status: Vehicle['status']) => {
    const statusConfig = {
      pending: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
      approved: { label: "Aprovado", color: "bg-green-100 text-green-800" },
      rejected: { label: "Rejeitado", color: "bg-red-100 text-red-800" },
      sold: { label: "Vendido", color: "bg-blue-100 text-blue-800" }
    };

    const config = statusConfig[status];
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const handleApprove = (id: string) => {
    setVehicles(vehicles.map(vehicle => 
      vehicle.id === id ? { ...vehicle, status: 'approved' } : vehicle
    ));
    toast({
      title: "Veículo aprovado",
      description: "O veículo foi aprovado com sucesso",
    });
  };

  const handleReject = (id: string) => {
    setVehicles(vehicles.map(vehicle => 
      vehicle.id === id ? { ...vehicle, status: 'rejected' } : vehicle
    ));
    toast({
      title: "Veículo rejeitado",
      description: "O veículo foi rejeitado",
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este veículo?')) {
      setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      toast({
        title: "Veículo excluído",
        description: "O veículo foi removido com sucesso",
      });
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = 
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.seller.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Gerenciar Veículos</h1>
                  <p className="text-gray-600">Gerencie todos os veículos cadastrados</p>
                </div>
              </div>
              
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Veículo
              </Button>
            </div>
          </div>

          <div className="p-6">
            {/* Filtros e Busca */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Buscar por nome, marca, modelo ou vendedor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                      {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>

                  {showFilters && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="all">Todos os status</option>
                        <option value="pending">Pendente</option>
                        <option value="approved">Aprovado</option>
                        <option value="rejected">Rejeitado</option>
                        <option value="sold">Vendido</option>
                      </select>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Lista de Veículos */}
            <div className="space-y-4">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                            <p className="text-sm text-gray-600">{vehicle.brand} • {vehicle.model} • {vehicle.year}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(vehicle.status)}
                            <div className="flex items-center gap-1">
                              {vehicle.status === 'pending' && (
                                <>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleApprove(vehicle.id)}
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => handleReject(vehicle.id)}
                                  >
                                    <XCircle className="w-4 h-4 text-red-600" />
                                  </Button>
                                </>
                              )}
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleDelete(vehicle.id)}
                              >
                                <Trash2 className="w-4 h-4 text-gray-600" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Preço</p>
                            <p className="font-semibold text-gray-900">{formatPrice(vehicle.price)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Vendedor</p>
                            <p className="font-semibold text-gray-900">{vehicle.seller}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Data de Cadastro</p>
                            <p className="font-semibold text-gray-900">
                              {new Date(vehicle.createdAt).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">ID</p>
                            <p className="font-semibold text-gray-900">{vehicle.id}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredVehicles.length === 0 && (
                <div className="text-center py-12">
                  <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum veículo encontrado</h3>
                  <p className="text-gray-600">
                    Tente ajustar seus filtros ou adicionar um novo veículo
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminVehicles;