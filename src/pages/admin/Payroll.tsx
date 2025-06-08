import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, CheckCircle2, XCircle, Search, Calendar, Download, Filter, DollarSign, Users, Receipt, CalendarDays } from "lucide-react";
import { format, isSameDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface Employee {
  id: string;
  name: string;
  cpf: string;
  email: string;
  cep: string;
  phone: string;
  birthDate: string;
  salary: number;
  commission: number;
  paymentStatus: "paid" | "pending";
  paymentDate?: string;
  role: string;
}

const Payroll = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({});
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  // Mock data
  useEffect(() => {
    setEmployees([
      {
        id: "1",
        name: "João Silva",
        cpf: "123.456.789-00",
        email: "joao@email.com",
        cep: "12345-678",
        phone: "(11) 98765-4321",
        birthDate: "1990-01-01",
        salary: 5000,
        commission: 2500,
        paymentStatus: "paid",
        paymentDate: "2024-04-05",
        role: "Vendedor"
      },
      {
        id: "2",
        name: "Maria Santos",
        cpf: "987.654.321-00",
        email: "maria@email.com",
        cep: "87654-321",
        phone: "(11) 91234-5678",
        birthDate: "1985-05-15",
        salary: 6000,
        commission: 1800,
        paymentStatus: "pending",
        role: "Vendedor"
      },
      {
        id: "3",
        name: "Pedro Costa",
        cpf: "456.789.123-00",
        email: "pedro@email.com",
        cep: "45678-123",
        phone: "(11) 99876-5432",
        birthDate: "1988-08-20",
        salary: 4500,
        commission: 3200,
        paymentStatus: "pending",
        role: "Vendedor"
      }
    ]);
  }, []);

  const handleAuthentication = () => {
    if (password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Senha incorreta!");
    }
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.cpf || !newEmployee.salary) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const employee: Employee = {
      id: Math.random().toString(36).substr(2, 9),
      name: newEmployee.name!,
      cpf: newEmployee.cpf!,
      email: newEmployee.email || "",
      cep: newEmployee.cep || "",
      phone: newEmployee.phone || "",
      birthDate: newEmployee.birthDate || "",
      salary: Number(newEmployee.salary),
      commission: 0,
      paymentStatus: "pending",
      role: "Vendedor"
    };

    setEmployees([...employees, employee]);
    setIsAddingEmployee(false);
    setNewEmployee({});
  };

  const handlePayment = (employeeId: string) => {
    setEmployees(employees.map(emp => 
      emp.id === employeeId 
        ? { ...emp, paymentStatus: "paid", paymentDate: new Date().toISOString().split('T')[0] }
        : emp
    ));
  };

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.cpf.includes(searchTerm);
    const matchesRole = selectedRole === "all" || emp.role === selectedRole;
    const matchesDate = !selectedDate || (emp.paymentDate && isSameDay(parseISO(emp.paymentDate), selectedDate));
    return matchesSearch && matchesRole && matchesDate;
  });

  const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  const totalCommission = employees.reduce((acc, emp) => acc + emp.commission, 0);
  const pendingPayments = employees.filter(emp => emp.paymentStatus === "pending").length;

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Acesso à Folha de Pagamento</CardTitle>
            <CardDescription>
              Digite a senha para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha"
                />
              </div>
              <Button onClick={handleAuthentication} className="w-full">
                Acessar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Folha de Pagamento</h1>
          <p className="text-gray-500">
            {format(currentMonth, "MMMM yyyy", { locale: ptBR })}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Dialog open={isAddingEmployee} onOpenChange={setIsAddingEmployee}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Novo Funcionário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Novo Funcionário</DialogTitle>
                <DialogDescription>
                  Preencha os dados do funcionário
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome*</Label>
                    <Input
                      id="name"
                      value={newEmployee.name || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF*</Label>
                    <Input
                      id="cpf"
                      value={newEmployee.cpf || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, cpf: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newEmployee.email || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={newEmployee.phone || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      value={newEmployee.cep || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, cep: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Data de Nascimento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={newEmployee.birthDate || ""}
                      onChange={(e) => setNewEmployee({ ...newEmployee, birthDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salário*</Label>
                  <Input
                    id="salary"
                    type="number"
                    value={newEmployee.salary || ""}
                    onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddingEmployee(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleAddEmployee}>
                  Adicionar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Salários</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {totalSalary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Comissões</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {totalCommission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Geral</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {(totalSalary + totalCommission).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pagamentos Pendentes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingPayments}</div>
            <p className="text-xs text-muted-foreground">
              Funcionários aguardando pagamento
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou CPF..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por cargo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os cargos</SelectItem>
            <SelectItem value="Vendedor">Vendedores</SelectItem>
            <SelectItem value="Gerente">Gerentes</SelectItem>
            <SelectItem value="Administrativo">Administrativo</SelectItem>
          </SelectContent>
        </Select>
        <Popover open={showCalendar} onOpenChange={setShowCalendar}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Filtrar por data"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              initialFocus
            />
            {selectedDate && (
              <div className="p-3 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setSelectedDate(undefined);
                    setShowCalendar(false);
                  }}
                >
                  Limpar filtro
                </Button>
              </div>
            )}
          </PopoverContent>
        </Popover>
        <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
          <Calendar className="mr-2 h-4 w-4" />
          Mês Atual
        </Button>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">
            Pendentes ({employees.filter(emp => emp.paymentStatus === "pending").length})
          </TabsTrigger>
          <TabsTrigger value="paid">
            Pagos ({employees.filter(emp => emp.paymentStatus === "paid").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>CPF</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Salário Base</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees
                    .filter(emp => emp.paymentStatus === "pending")
                    .map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>{employee.cpf}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>
                          R$ {employee.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          R$ {employee.commission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          R$ {(employee.salary + employee.commission).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePayment(employee.id)}
                          >
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Registrar Pagamento
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Cargo</TableHead>
                    <TableHead>CPF</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Salário Base</TableHead>
                    <TableHead>Comissão</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Data do Pagamento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees
                    .filter(emp => emp.paymentStatus === "paid")
                    .map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                        <TableCell>{employee.cpf}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>
                          R$ {employee.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          R$ {employee.commission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          R$ {(employee.salary + employee.commission).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          {format(new Date(employee.paymentDate!), "dd/MM/yyyy")}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Payroll; 