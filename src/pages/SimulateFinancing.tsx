import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator } from "lucide-react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const SimulateFinancing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const vehicleName = params.get('name') || 'Veículo';
  const vehicleValue = parseFloat(params.get('value') || '0');
  const vehicleImage = params.get('image') || '';

  const [downPayment, setDownPayment] = useState("");
  const [term, setTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalFinanced, setTotalFinanced] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownPayment(e.target.value);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value);
  };

  const calculateFinancing = () => {
    const downPaymentNum = parseFloat(downPayment);
    const termNum = parseInt(term);
    const interestRateNum = parseFloat(interestRate) / 100;

    if (isNaN(downPaymentNum) || isNaN(termNum) || isNaN(interestRateNum)) {
      return;
    }

    const financedAmount = vehicleValue - downPaymentNum;
    const monthlyRate = interestRateNum / 12;
    const monthlyPaymentValue = (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, termNum)) / (Math.pow(1 + monthlyRate, termNum) - 1);
    const totalFinancedValue = monthlyPaymentValue * termNum;

    setMonthlyPayment(monthlyPaymentValue);
    setTotalFinanced(totalFinancedValue);
    setShowResult(true);
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
                  <Calculator className="w-6 h-6 text-primary" />
                  Simular Financiamento
                </h1>
                <p className="text-gray-600">Calcule o valor das parcelas e o total financiado</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-xl shadow border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <img src={vehicleImage} alt={vehicleName} className="w-24 h-24 object-cover rounded-lg" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{vehicleName}</h2>
                <p className="text-sm text-gray-600">Valor do Veículo: R$ {vehicleValue.toFixed(2)}</p>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); calculateFinancing(); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entrada (R$)</label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={handleDownPaymentChange}
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prazo (meses)</label>
                  <input
                    type="number"
                    value={term}
                    onChange={handleTermChange}
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Taxa de Juros (%)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">Calcular</Button>
              </div>
            </form>
            {showResult && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Resultado da Simulação</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Valor da Parcela</p>
                    <p className="text-xl font-bold text-primary">R$ {monthlyPayment.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Financiado</p>
                    <p className="text-xl font-bold text-primary">R$ {totalFinanced.toFixed(2)}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">Simulação realizada com sucesso. Os valores acima são uma estimativa e podem variar conforme as condições do financiamento.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default SimulateFinancing; 