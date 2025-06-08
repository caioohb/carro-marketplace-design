import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Pencil, Trash2, Plus, X, Calendar, User, Car, DollarSign, Search } from "lucide-react";
import { useState } from "react";

interface Sale {
  id: string;
  carModel: string;
  carPlate: string;
  saleValue: string;
  installment: string;
  seller: string;
  buyer: string;
  buyerCPF: string;
  saleDate: string;
}

const AdminSales = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchDate, setSearchDate] = useState("");
  const [formData, setFormData] = useState<Omit<Sale, 'id'>>({
    carModel: "",
    carPlate: "",
    saleValue: "",
    installment: "",
    seller: "",
    buyer: "",
    buyerCPF: "",
    saleDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingId) {
      setSales(sales.map(sale => 
        sale.id === editingId ? { ...formData, id: editingId } : sale
      ));
    } else {
      setSales([...sales, { ...formData, id: Math.random().toString(36).substr(2, 9) }]);
    }
    resetForm();
  };

  const handleEdit = (sale: Sale) => {
    setIsEditing(true);
    setEditingId(sale.id);
    setFormData({
      carModel: sale.carModel,
      carPlate: sale.carPlate,
      saleValue: sale.saleValue,
      installment: sale.installment,
      seller: sale.seller,
      buyer: sale.buyer,
      buyerCPF: sale.buyerCPF,
      saleDate: sale.saleDate,
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta venda?')) {
      setSales(sales.filter(sale => sale.id !== id));
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      carModel: "",
      carPlate: "",
      saleValue: "",
      installment: "",
      seller: "",
      buyer: "",
      buyerCPF: "",
      saleDate: "",
    });
  };

  const filteredSales = searchDate
    ? sales.filter(sale => sale.saleDate === searchDate)
    : sales;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-primary" />
                  Vendas
                </h1>
                <p className="text-gray-600">Insira os dados das vendas de carros</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {isEditing ? 'Editar Venda' : 'Nova Venda'}
                </h2>
                {isEditing && (
                  <Button variant="ghost" size="sm" onClick={resetForm}>
                    <X className="w-4 h-4 mr-2" />
                    Cancelar Edição
                  </Button>
                )}
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Modelo do Carro</label>
                    <input
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Placa do Carro</label>
                    <input
                      type="text"
                      name="carPlate"
                      value={formData.carPlate}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Valor da Venda</label>
                    <input
                      type="number"
                      name="saleValue"
                      value={formData.saleValue}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parcela</label>
                    <input
                      type="text"
                      name="installment"
                      value={formData.installment}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vendedor</label>
                    <input
                      type="text"
                      name="seller"
                      value={formData.seller}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Comprador</label>
                    <input
                      type="text"
                      name="buyer"
                      value={formData.buyer}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CPF do Comprador</label>
                    <input
                      type="text"
                      name="buyerCPF"
                      value={formData.buyerCPF}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data da Venda</label>
                    <input
                      type="date"
                      name="saleDate"
                      value={formData.saleDate}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                  {isEditing ? 'Atualizar Venda' : 'Salvar Venda'}
                </Button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Histórico de Vendas</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <input
                      type="date"
                      value={searchDate}
                      onChange={(e) => setSearchDate(e.target.value)}
                      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    Total de Vendas: {filteredSales.length}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {filteredSales.map((sale) => (
                  <div key={sale.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Car className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold text-gray-900">{sale.carModel}</h3>
                          <span className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-600">{sale.carPlate}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">Valor: R$ {sale.saleValue}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-600">Vendedor: {sale.seller}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-purple-600" />
                            <span className="text-sm text-gray-600">Comprador: {sale.buyer}</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-600" />
                          <span className="text-sm text-gray-600">Data: {sale.saleDate}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(sale)}
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(sale.id)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminSales; 