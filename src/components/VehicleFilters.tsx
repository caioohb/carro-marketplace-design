
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
    <Card className="mb-6 border-brand-200 dark:border-brand-700 bg-white dark:bg-brand-darker shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Barra de pesquisa */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-400 w-5 h-5" />
            <Input
              placeholder="Pesquisar por modelo, marca ou ano..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="pl-12 h-12 border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker text-brand-darker dark:text-brand-50"
            />
          </div>

          {/* Filtros em linha */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Select value={filters.brand} onValueChange={(value) => updateFilter('brand', value)}>
              <SelectTrigger className="border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker">
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-brand-darker border-brand-200 dark:border-brand-700">
                <SelectItem value="all">Todas as marcas</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand.toLowerCase()}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.priceRange} onValueChange={(value) => updateFilter('priceRange', value)}>
              <SelectTrigger className="border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker">
                <SelectValue placeholder="Faixa de preço" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-brand-darker border-brand-200 dark:border-brand-700">
                <SelectItem value="all">Qualquer preço</SelectItem>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.year} onValueChange={(value) => updateFilter('year', value)}>
              <SelectTrigger className="border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-brand-darker border-brand-200 dark:border-brand-700">
                <SelectItem value="all">Qualquer ano</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019 ou anterior</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.fuel} onValueChange={(value) => updateFilter('fuel', value)}>
              <SelectTrigger className="border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker">
                <SelectValue placeholder="Combustível" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-brand-darker border-brand-200 dark:border-brand-700">
                <SelectItem value="all">Qualquer combustível</SelectItem>
                <SelectItem value="flex">Flex</SelectItem>
                <SelectItem value="gasolina">Gasolina</SelectItem>
                <SelectItem value="etanol">Etanol</SelectItem>
                <SelectItem value="diesel">Diesel</SelectItem>
                <SelectItem value="hibrido">Híbrido</SelectItem>
                <SelectItem value="eletrico">Elétrico</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.transmission} onValueChange={(value) => updateFilter('transmission', value)}>
              <SelectTrigger className="border-brand-200 dark:border-brand-700 focus:border-brand-primary focus:ring-brand-primary/20 bg-white dark:bg-brand-darker">
                <SelectValue placeholder="Câmbio" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-brand-darker border-brand-200 dark:border-brand-700">
                <SelectItem value="all">Qualquer câmbio</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
                <SelectItem value="automatico">Automático</SelectItem>
                <SelectItem value="cvt">CVT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filtros ativos e botão limpar */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center justify-between pt-4 border-t border-brand-100 dark:border-brand-800">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-brand-500" />
                <span className="text-sm text-brand-600 dark:text-brand-300 font-medium">
                  {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} ativo{activeFiltersCount > 1 ? 's' : ''}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onClearFilters}
                className="text-brand-600 border-brand-200 hover:bg-brand-50 hover:border-brand-300 dark:text-brand-300 dark:border-brand-700 dark:hover:bg-brand-800"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
