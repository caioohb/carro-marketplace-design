// src/components/AppointmentDetails.tsx
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  interface AppointmentDetailsProps {
    appointment: Appointment;
    onClose: () => void;
}

export function AppointmentDetails({ appointment, onClose }: AppointmentDetailsProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "AGENDADO":
        return "bg-blue-100 text-blue-800";
      case "CONCLUIDO":
        return "bg-green-100 text-green-800";
      case "CANCELADO":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    return type === "VENDA" ? "bg-purple-100 text-purple-800" : "bg-orange-100 text-orange-800";
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold">Detalhes do Agendamento</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status e Tipo */}
          <div className="flex gap-2">
            <Badge className={getStatusColor(appointment.status)}>
              {appointment.status}
            </Badge>
            <Badge className={getTypeColor(appointment.type)}>
              {appointment.type === "VENDA" ? "Venda de Veículo" : "Compra de Veículo"}
            </Badge>
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Data</p>
              <p className="font-medium">
                {format(appointment.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Horário</p>
              <p className="font-medium">{appointment.time}</p>
            </div>
          </div>

          {/* Informações do Cliente */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-lg mb-4">Informações do Cliente</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p className="font-medium">{appointment.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium">{appointment.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="font-medium">{appointment.customer.phone}</p>
              </div>
            </div>
          </div>

          {/* Informações do Veículo (se for venda) */}
          {appointment.type === "VENDA" && appointment.vehicle && (
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg mb-4">Detalhes do Veículo</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Marca</p>
                  <p className="font-medium">{appointment.vehicle.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Modelo</p>
                  <p className="font-medium">{appointment.vehicle.model}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ano</p>
                  <p className="font-medium">{appointment.vehicle.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Versão</p>
                  <p className="font-medium">{appointment.vehicle.version}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Placa</p>
                  <p className="font-medium">{appointment.vehicle.plate}</p>
                </div>
              </div>
            </div>
          )}

          {/* Ações */}
          <div className="border-t pt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Fechar
            </Button>
            {appointment.status === "AGENDADO" && (
              <>
                <Button variant="destructive">
                  Cancelar Agendamento
                </Button>
                <Button>
                  Confirmar Agendamento
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}