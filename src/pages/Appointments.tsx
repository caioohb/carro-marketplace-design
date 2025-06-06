import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Car, ArrowLeft, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AppointmentDetails } from "@/components/AppointmentDetails";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Appointment {
  id: string;
  type: "VENDA" | "COMPRA";
  status: "AGENDADO" | "CONCLUIDO" | "CANCELADO";
  date: Date;
  time: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  vehicle?: {
    brand: string;
    model: string;
    year: string;
    version: string;
    plate: string;
  };
}

const Appointments = () => {
  const { toast } = useToast();
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const mockAppointments: Appointment[] = [
    {
      id: "1",
      type: "VENDA",
      status: "AGENDADO",
      date: new Date(2024, 3, 15),
      time: "14:00",
      customer: {
        name: "João Silva",
        email: "joao.silva@email.com",
        phone: "(11) 98765-4321"
      },
      vehicle: {
        brand: "Volkswagen",
        model: "Golf",
        year: "2020",
        version: "2.0 TSI",
        plate: "ABC1D23"
      }
    },
    {
      id: "2",
      type: "COMPRA",
      status: "AGENDADO",
      date: new Date(2024, 3, 16),
      time: "10:00",
      customer: {
        name: "Maria Santos",
        email: "maria.santos@email.com",
        phone: "(11) 91234-5678"
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "AGENDADO":
        return <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>;
      case "CONCLUIDO":
        return <Badge className="bg-green-100 text-green-800">Concluído</Badge>;
      case "CANCELADO":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === "VENDA" 
      ? <Badge className="bg-purple-100 text-purple-800">Venda</Badge>
      : <Badge className="bg-orange-100 text-orange-800">Compra</Badge>;
  };

  const handleContact = (phone: string) => {
    toast({
      title: "Contato iniciado",
      description: "Abrindo WhatsApp para contato direto",
    });
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
                  <Calendar className="w-6 h-6 text-primary" />
                  Meus Agendamentos
                </h1>
                <p className="text-gray-600">Visitas agendadas para veículos</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {mockAppointments.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{mockAppointments.length}</span> agendamento{mockAppointments.length > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <Card 
                      key={appointment.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Car className="w-5 h-5 text-primary" />
                            <CardTitle>
                              {appointment.type === "VENDA" 
                                ? `${appointment.vehicle?.brand} ${appointment.vehicle?.model}`
                                : "Compra de Veículo"}
                            </CardTitle>
                          </div>
                          <div className="flex gap-2">
                            {getTypeBadge(appointment.type)}
                            {getStatusBadge(appointment.status)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">
                              {format(appointment.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">Av. Paulista, 1000 - São Paulo</span>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleContact(appointment.customer.phone);
                              }}
                            >
                              <Phone className="w-4 h-4 mr-1" />
                              Contato
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Nenhum agendamento</h2>
                <p className="text-gray-600 mb-6">Você ainda não tem visitas agendadas</p>
                <Button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-primary/90">
                  Explorar Veículos
                </Button>
              </div>
            )}
          </div>

          {/* Modal de Detalhes */}
          {selectedAppointment && (
            <AppointmentDetails
              appointment={selectedAppointment}
              onClose={() => setSelectedAppointment(null)}
            />
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Appointments;