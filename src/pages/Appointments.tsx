
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Car, ArrowLeft, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointments = () => {
  const { toast } = useToast();

  const mockAppointments = [
    {
      id: "1",
      vehicleName: "Tucson GL 2.0 Aut.",
      vehicleBrand: "Hyundai",
      date: "2024-06-10",
      time: "14:00",
      status: "confirmado",
      location: "Rua das Flores, 123 - São Paulo, SP",
      sellerPhone: "(11) 99999-9999"
    },
    {
      id: "2",
      vehicleName: "Uno Vivace 1.0",
      vehicleBrand: "Fiat",
      date: "2024-06-12",
      time: "10:30",
      status: "pendente",
      location: "Av. Paulista, 456 - São Paulo, SP",
      sellerPhone: "(11) 88888-8888"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmado":
        return <Badge className="bg-green-100 text-green-800">Confirmado</Badge>;
      case "pendente":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
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
                    <Card key={appointment.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <Car className="w-5 h-5 text-primary" />
                            {appointment.vehicleName}
                          </CardTitle>
                          {getStatusBadge(appointment.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">
                              {new Date(appointment.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{appointment.location}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleContact(appointment.sellerPhone)}
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
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Appointments;
