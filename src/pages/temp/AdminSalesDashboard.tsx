import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, TrendingUp, DollarSign, Car, Users } from "lucide-react";

const AdminSalesDashboard = () => {
  const salesData = [
    { month: "Jan", sales: 5, totalValue: 150000, averageValue: 30000 },
    { month: "Fev", sales: 7, totalValue: 210000, averageValue: 30000 },
    { month: "Mar", sales: 3, totalValue: 90000, averageValue: 30000 },
    { month: "Abr", sales: 8, totalValue: 240000, averageValue: 30000 },
    { month: "Mai", sales: 6, totalValue: 180000, averageValue: 30000 },
    { month: "Jun", sales: 4, totalValue: 120000, averageValue: 30000 },
  ];

  const totalSales = salesData.reduce((acc, curr) => acc + curr.sales, 0);
  const totalValue = salesData.reduce((acc, curr) => acc + curr.totalValue, 0);
  const averageValue = totalValue / totalSales;
  const bestMonth = salesData.reduce((prev, current) => 
    (prev.totalValue > current.totalValue) ? prev : current
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-3">
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Dashboard de Vendas
                </h1>
                <p className="text-gray-600">Visualize o histórico de vendas e estatísticas</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total de Vendas</p>
                    <h3 className="text-2xl font-bold text-gray-900">{totalSales}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Valor Total</p>
                    <h3 className="text-2xl font-bold text-gray-900">R$ {totalValue.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ticket Médio</p>
                    <h3 className="text-2xl font-bold text-gray-900">R$ {averageValue.toLocaleString()}</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Melhor Mês</p>
                    <h3 className="text-2xl font-bold text-gray-900">{bestMonth.month}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Vendas</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Mês</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Vendas</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Valor Total</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Ticket Médio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-900">{data.month}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">{data.sales}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">R$ {data.totalValue.toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-900">R$ {data.averageValue.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumo Mensal</h2>
                <div className="space-y-4">
                  {salesData.map((data, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-600">{data.month}</div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-primary rounded-full"
                            style={{ width: `${(data.totalValue / bestMonth.totalValue) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-32 text-sm text-gray-900 text-right">
                        R$ {data.totalValue.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminSalesDashboard; 