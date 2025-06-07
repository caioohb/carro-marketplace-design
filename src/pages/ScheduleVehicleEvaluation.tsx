
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon,
  Car,
  Download,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Clock4,
  Shield,
  ThumbsUp,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ScheduleFormData {
  brand: string;
  model: string;
  year: string;
  plate: string;
  version: string;
  email: string;
  date: Date | null;
  time: string;
}

interface FormSection {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const formSections: FormSection[] = [
  {
    title: "Informações do Veículo",
    description: "Preencha os dados do seu veículo para avaliação",
    icon: <Car className="w-5 h-5" />
  },
  {
    title: "Data e Horário",
    description: "Escolha quando deseja trazer seu veículo",
    icon: <CalendarIcon className="w-5 h-5" />
  },
  {
    title: "Contato",
    description: "Como podemos entrar em contato com você",
    icon: <Mail className="w-5 h-5" />
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Melhor Proposta do Mercado",
    description: "Garantimos a melhor avaliação do seu veículo, com preço justo e competitivo."
  },
  {
    icon: <Clock4 className="w-6 h-6" />,
    title: "Processo Rápido",
    description: "Avaliação em até 30 minutos, sem burocracia e com proposta imediata."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Segurança Total",
    description: "Equipe especializada e credenciada, garantindo uma avaliação precisa e segura."
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Sem Compromisso",
    description: "Avaliação gratuita e sem obrigação de venda. Você decide se aceita nossa proposta."
  }
];

const ScheduleVehicleEvaluation = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScheduled, setIsScheduled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ScheduleFormData>({
    brand: "",
    model: "",
    year: "",
    plate: "",
    version: "",
    email: "",
    date: null,
    time: ""
  });

  const brands = [
    "Audi", "BMW", "Chevrolet", "Fiat", "Ford", "Honda", "Hyundai", 
    "Jeep", "Kia", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", 
    "Toyota", "Volkswagen", "Volvo"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const handleInputChange = (field: keyof ScheduleFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: Date | null) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduled(true);
    toast({
      title: "Agendamento realizado com sucesso!",
      description: "Você receberá um e-mail com a confirmação.",
    });
  };

  const handleDownloadCard = async () => {
    const element = document.getElementById('schedule-card');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('agendamento-avaliacao.pdf');
    } catch (error) {
      toast({
        title: "Erro ao gerar PDF",
        description: "Não foi possível gerar o documento. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  if (isScheduled) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Agendamento Confirmado</h1>
              <p className="text-gray-600">Seu veículo será avaliado em breve</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-2xl mx-auto">
            <Card id="schedule-card" className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Agendamento Confirmado</h2>
                  <p className="text-gray-600">Talento Veículos Premium</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Data</p>
                      <p className="font-semibold">
                        {formData.date ? format(formData.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR }) : ''}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Horário</p>
                      <p className="font-semibold">{formData.time}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-lg mb-4">Detalhes do Veículo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Marca</p>
                        <p className="font-semibold">{formData.brand}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Modelo</p>
                        <p className="font-semibold">{formData.model}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Ano</p>
                        <p className="font-semibold">{formData.year}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Versão</p>
                        <p className="font-semibold">{formData.version}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Placa</p>
                        <p className="font-semibold">{formData.plate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-lg mb-4">Informações de Contato</h3>
                    <div>
                      <p className="text-sm text-gray-600">E-mail</p>
                      <p className="font-semibold">{formData.email}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-lg mb-4">Local</h3>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 flex justify-center">
              <Button onClick={handleDownloadCard} className="gap-2">
                <Download className="w-4 h-4" />
                Baixar Comprovante
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!showForm) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Venda Seu Veículo</h1>
              <p className="text-gray-600">A maneira mais fácil e segura de vender seu carro</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Venda seu veículo com a melhor proposta do mercado
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Agende uma avaliação gratuita e receba uma proposta imediata pelo seu veículo.
                Processo rápido, seguro e sem burocracia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="gap-2 h-12 px-8"
                onClick={() => setShowForm(true)}
              >
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Agendamento rápido e sem compromisso
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Avaliação do Seu Veículo</h1>
            <p className="text-gray-600">Agende uma visita para avaliarmos seu carro</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Avaliação do Seu Veículo</h2>
            <p className="text-gray-600">
              Preencha o formulário abaixo para agendar a avaliação do seu veículo. 
              Nossa equipe especializada fará uma análise completa e oferecerá a melhor proposta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {formSections.map((section, index) => (
              <Card key={index} className="border-2 border-gray-100">
                <CardHeader className="bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {section.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                      <p className="text-sm text-gray-600">{section.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {index === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="brand" className="text-sm font-medium">
                          Marca do Veículo
                        </Label>
                        <Select
                          value={formData.brand}
                          onValueChange={(value) => handleInputChange('brand', value)}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Selecione a marca" />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map((brand) => (
                              <SelectItem key={brand} value={brand}>
                                {brand}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="model" className="text-sm font-medium">
                          Modelo
                        </Label>
                        <Input
                          id="model"
                          value={formData.model}
                          onChange={(e) => handleInputChange('model', e.target.value)}
                          placeholder="Ex: Onix, HB20, Corolla"
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="year" className="text-sm font-medium">
                          Ano de Fabricação
                        </Label>
                        <Input
                          id="year"
                          value={formData.year}
                          onChange={(e) => handleInputChange('year', e.target.value)}
                          placeholder="Ex: 2020"
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="version" className="text-sm font-medium">
                          Versão
                        </Label>
                        <Input
                          id="version"
                          value={formData.version}
                          onChange={(e) => handleInputChange('version', e.target.value)}
                          placeholder="Ex: 1.0 Turbo, 2.0 TSI"
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="plate" className="text-sm font-medium">
                          Placa
                        </Label>
                        <Input
                          id="plate"
                          value={formData.plate}
                          onChange={(e) => handleInputChange('plate', e.target.value.toUpperCase())}
                          placeholder="Ex: ABC1D23"
                          maxLength={7}
                          className="h-11 uppercase"
                        />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Data da Avaliação</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full h-11 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.date ? (
                                format(formData.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.date || undefined}
                              onSelect={handleDateSelect}
                              disabled={(date) => date < new Date()}
                              locale={ptBR}
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Horário</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => handleInputChange('time', value)}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        E-mail para Contato
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        className="h-11"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Enviaremos a confirmação do agendamento para este e-mail
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="h-11 px-8 gap-2"
                disabled={!formData.brand || !formData.model || !formData.year || 
                         !formData.version || !formData.plate || !formData.email || 
                         !formData.date || !formData.time}
              >
                <CalendarIcon className="w-4 h-4" />
                Agendar Avaliação
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVehicleEvaluation;
