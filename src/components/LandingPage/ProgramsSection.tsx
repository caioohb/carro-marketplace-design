import { Card, CardContent } from "@/components/ui/card";
import { Star, Crown } from "lucide-react";

const ProgramsSection = () => {
  return (
    <section id="programas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005357] mb-4">
            Programas WHITE
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça nossos programas exclusivos e aproveite benefícios especiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WHITE Extreme */}
          <Card className="border-2 border-[#00D2C7]/20 hover:border-[#00D2C7] transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                WHITE Extreme
              </h3>
              <p className="text-gray-600 mb-6">
                Indique amigos e ganhe comissões por cada venda realizada através de suas indicações.
                Um programa de renda extra para quem ama carros e tem uma boa rede de contatos.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Comissões atrativas por indicação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Acompanhamento em tempo real
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Pagamentos rápidos e seguros
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* WHITE VIP */}
          <Card className="border-2 border-[#00D2C7]/20 hover:border-[#00D2C7] transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                WHITE VIP
              </h3>
              <p className="text-gray-600 mb-6">
                Acesso a benefícios exclusivos em manutenção, reparos e serviços automotivos.
                Parcerias com as melhores oficinas e prestadores de serviços da região.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Descontos em manutenção
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Prioridade no atendimento
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00D2C7] rounded-full" />
                  Serviços exclusivos
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 