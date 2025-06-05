
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellCar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    fuel: "",
    transmission: "",
    mileage: "",
    color: "",
    description: ""
  });

  const brands = ["Fiat", "Volkswagen", "Chevrolet", "Hyundai", "Toyota", "Honda", "Ford", "Renault"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anúncio enviado!",
      description: "Seu veículo será avaliado e publicado em breve",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
                  <Car className="w-6 h-6 text-primary" />
                  Vender Meu Carro
                </h1>
                <p className="text-gray-600">Anuncie seu veículo na nossa plataforma</p>
              </div>
            </div>
          </div>

          <div className="p-6 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informações básicas */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Veículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand">Marca</Label>
                      <Select value={formData.brand} onValueChange={(value) => handleInputChange('brand', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a marca" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand.toLowerCase()}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="model">Modelo</Label>
                      <Input
                        id="model"
                        value={formData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                        placeholder="Ex: Uno, Gol, Corolla"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="year">Ano</Label>
                      <Input
                        id="year"
                        type="number"
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                        placeholder="2020"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="price">Preço (R$)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="50000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mileage">Quilometragem</Label>
                      <Input
                        id="mileage"
                        type="number"
                        value={formData.mileage}
                        onChange={(e) => handleInputChange('mileage', e.target.value)}
                        placeholder="50000"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="fuel">Combustível</Label>
                      <Select value={formData.fuel} onValueChange={(value) => handleInputChange('fuel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de combustível" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flex">Flex</SelectItem>
                          <SelectItem value="gasolina">Gasolina</SelectItem>
                          <SelectItem value="etanol">Etanol</SelectItem>
                          <SelectItem value="diesel">Diesel</SelectItem>
                          <SelectItem value="hibrido">Híbrido</SelectItem>
                          <SelectItem value="eletrico">Elétrico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="transmission">Câmbio</Label>
                      <Select value={formData.transmission} onValueChange={(value) => handleInputChange('transmission', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Tipo de câmbio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manual">Manual</SelectItem>
                          <SelectItem value="automatico">Automático</SelectItem>
                          <SelectItem value="cvt">CVT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="color">Cor</Label>
                      <Input
                        id="color"
                        value={formData.color}
                        onChange={(e) => handleInputChange('color', e.target.value)}
                        placeholder="Ex: Branco, Prata, Preto"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fotos */}
              <Card>
                <CardHeader>
                  <CardTitle>Fotos do Veículo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Clique para enviar fotos ou arraste e solte</p>
                    <p className="text-sm text-gray-500">PNG, JPG até 10MB cada (máximo 8 fotos)</p>
                    <Button type="button" variant="outline" className="mt-4">
                      Selecionar Fotos
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Descrição */}
              <Card>
                <CardHeader>
                  <CardTitle>Descrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="description">Conte mais sobre seu veículo</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descreva o estado do veículo, opcionais, histórico de manutenção, etc."
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Botões */}
              <div className="flex gap-4">
                <Button type="button" variant="outline" className="flex-1">
                  Salvar como Rascunho
                </Button>
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                  Publicar Anúncio
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SellCar;
