
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FilterState {
  search: string;
  brand: string;
  priceRange: string;
  year: string;
  fuel: string;
  transmission: string;
}

interface VehicleFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

export function VehicleFilters({ filters, onFiltersChange, onClearFilters }: VehicleFiltersProps) {
  const brands = ["Fiat", "Volkswagen", "Chevrolet", "Hyundai", "Toyota", "Honda", "Ford", "Renault"];
  const priceRanges = [
    { label: "Até R$ 30.000", value: "0-30000" },
    { label: "R$ 30.000 - R$ 50.000", value: "30000-50000" },
    { label: "R$ 50.000 - R$ 80.000", value: "50000-80000" },
    { label: "R$ 80.000 - R$ 120.000", value: "80000-120000" },
    { label: "Acima de R$ 120.000", value: "120000+" }
  ];

  const updateFilter = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== "").length;

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="space-y-4">
          {/* Barra de pesquisa */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Pesquisar por modelo, marca ou ano..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Filtros em linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            <Select value={filters.brand} onValueChange={(value) => updateFilter('brand', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas as marcas</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.priceRange} onValueChange={(value) => updateFilter('priceRange', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Faixa de preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer preço</SelectItem>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.year} onValueChange={(value) => updateFilter('year', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer ano</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019 ou anterior</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.fuel} onValueChange={(value) => updateFilter('fuel', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Combustível" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer combustível</SelectItem>
                <SelectItem value="flex">Flex</SelectItem>
                <SelectItem value="gasolina">Gasolina</SelectItem>
                <SelectItem value="etanol">Etanol</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="hibrido">Híbrido</SelectItem>
                <SelectItem value="eletrico">Elétrico</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.transmission} onValueChange={(value) => updateFilter('transmission', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Câmbio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer câmbio</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatico">Automático</SelectItem>
                <SelectItem value="cvt">CVT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filtros ativos e botão limpar */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} ativo{activeFiltersCount > 1 ? 's' : ''}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onClearFilters}
                className="text-gray-600"
              >
                <X className="w-4 h-4 mr-1" />
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
