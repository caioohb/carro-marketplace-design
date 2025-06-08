import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, BarChart3, TrendingUp, DollarSign, Car, Users, Calendar, TrendingDown, Percent, Receipt } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, PieChart, LineChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";

const AdminSalesDashboard = () => {
  const salesData = [
    { month: "Jan", sales: 5, totalValue: 150000, averageValue: 30000, appointments: 12, profit: 45000, expenses: 15000 },
    { month: "Fev", sales: 7, totalValue: 210000, averageValue: 30000, appointments: 18, profit: 63000, expenses: 21000 },
    { month: "Mar", sales: 3, totalValue: 90000, averageValue: 30000, appointments: 8, profit: 27000, expenses: 9000 },
    { month: "Abr", sales: 8, totalValue: 240000, averageValue: 30000, appointments: 22, profit: 72000, expenses: 24000 },
    { month: "Mai", sales: 6, totalValue: 180000, averageValue: 30000, appointments: 15, profit: 54000, expenses: 18000 },
    { month: "Jun", sales: 4, totalValue: 120000, averageValue: 30000, appointments: 10, profit: 36000, expenses: 12000 },
  ];

  const totalSales = salesData.reduce((acc, curr) => acc + curr.sales, 0);
  const totalValue = salesData.reduce((acc, curr) => acc + curr.totalValue, 0);
  const totalProfit = salesData.reduce((acc, curr) => acc + curr.profit, 0);
  const totalExpenses = salesData.reduce((acc, curr) => acc + curr.expenses, 0);
  const totalAppointments = salesData.reduce((acc, curr) => acc + curr.appointments, 0);
  const averageValue = totalValue / totalSales;
  const profitMargin = ((totalProfit / totalValue) * 100);
  const bestMonth = salesData.reduce((prev, current) => 
    (prev.totalValue > current.totalValue) ? prev : current
  );

  // Mock data para os novos indicadores
  const performanceData = {
    monthlySalesGrowth: 15.8,
    monthlyRevenueGrowth: 12.3,
    previousMonthComparison: 8.5,
    yearlyProjection: 1250000,
    newCustomers: 45
  };

  const financialData = {
    averageCostPerSale: 2500,
    marketingROI: [
      { name: "Facebook", roi: 320 },
      { name: "Google", roi: 280 },
      { name: "Instagram", roi: 250 }
    ],
    accumulatedBalance: 125000,
    expensesByCategory: [
      { name: "Marketing", value: 15000 },
      { name: "Infraestrutura", value: 8000 },
      { name: "Salários", value: 25000 },
      { name: "Taxas", value: 5000 }
    ],
    profitByCar: [
      { name: "BMW X5", profit: 25000 },
      { name: "Mercedes C200", profit: 22000 },
      { name: "Audi A4", profit: 20000 },
      { name: "Volvo XC60", profit: 18000 },
      { name: "Land Rover", profit: 15000 }
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="financial">Financeiro</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Principais métricas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Car className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total de Vendas</p>
                          <h3 className="text-2xl font-bold text-gray-900">{totalSales}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Valor Total</p>
                          <h3 className="text-2xl font-bold text-gray-900">R$ {totalValue.toLocaleString()}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Ticket Médio</p>
                          <h3 className="text-2xl font-bold text-gray-900">R$ {averageValue.toLocaleString()}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Melhor Mês</p>
                          <h3 className="text-2xl font-bold text-gray-900">{bestMonth.month}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Métricas adicionais */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-cyan-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Agendamentos</p>
                          <h3 className="text-2xl font-bold text-gray-900">{totalAppointments}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Lucro Total</p>
                          <h3 className="text-2xl font-bold text-gray-900">R$ {totalProfit.toLocaleString()}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                          <Percent className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Margem de Lucro</p>
                          <h3 className="text-2xl font-bold text-gray-900">{profitMargin.toFixed(1)}%</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Receipt className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Despesas Totais</p>
                          <h3 className="text-2xl font-bold text-gray-900">R$ {totalExpenses.toLocaleString()}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Histórico de Vendas */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Histórico de Vendas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Mês</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Vendas</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Valor Total</th>
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Agendamentos</th>
                            </tr>
                          </thead>
                          <tbody>
                            {salesData.map((data, index) => (
                              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4 text-sm text-gray-900">{data.month}</td>
                                <td className="py-3 px-4 text-sm text-gray-900">{data.sales}</td>
                                <td className="py-3 px-4 text-sm text-gray-900">R$ {data.totalValue.toLocaleString()}</td>
                                <td className="py-3 px-4 text-sm text-gray-900">{data.appointments}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Análise Financeira */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Análise Financeira Mensal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {salesData.map((data, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-900">{data.month}</span>
                              <span className="text-sm text-gray-600">
                                Margem: {((data.profit / data.totalValue) * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-green-600">Lucro: R$ {data.profit.toLocaleString()}</span>
                                <span className="text-red-600">Despesas: R$ {data.expenses.toLocaleString()}</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full flex">
                                  <div
                                    className="bg-green-500"
                                    style={{ width: `${(data.profit / data.totalValue) * 100}%` }}
                                  />
                                  <div
                                    className="bg-red-500"
                                    style={{ width: `${(data.expenses / data.totalValue) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Crescimento Mensal de Vendas</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        {performanceData.monthlySalesGrowth}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Comparado ao mês anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Crescimento Mensal de Receita</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        {performanceData.monthlyRevenueGrowth}%
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Comparado ao mês anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Novos Clientes</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {performanceData.newCustomers}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Este mês
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Projeção de Faturamento Anual</CardTitle>
                    <CardDescription>
                      Estimativa baseada no desempenho atual
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart
                          data={[
                            { name: "Jan", value: 85000 },
                            { name: "Fev", value: 95000 },
                            { name: "Mar", value: 110000 },
                            { name: "Abr", value: 105000 },
                            { name: "Mai", value: 120000 },
                            { name: "Jun", value: 115000 },
                            { name: "Jul", value: 130000 },
                            { name: "Ago", value: 125000 },
                            { name: "Set", value: 140000 },
                            { name: "Out", value: 135000 },
                            { name: "Nov", value: 150000 },
                            { name: "Dez", value: 145000 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financial" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Custo Médio por Venda</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        R$ {financialData.averageCostPerSale.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Por transação
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Saldo Acumulado</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        R$ {financialData.accumulatedBalance.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Receita - Despesas
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">ROI Marketing</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={financialData.marketingROI}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="roi" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Despesas por Categoria</CardTitle>
                      <CardDescription>
                        Distribuição dos gastos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={financialData.expensesByCategory}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {financialData.expensesByCategory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lucro por Carro (Top 5)</CardTitle>
                      <CardDescription>
                        Veículos com maior retorno
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={financialData.profitByCar}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="profit" fill="#00C49F" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminSalesDashboard;
