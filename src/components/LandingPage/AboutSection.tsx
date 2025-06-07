import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005357] mb-4">
            SOBRE A TALENTO VEÍCULOS
          </h2>
          <p className="text-xl text-[#006F75] mb-2">
            AGÊNCIA DE COMPRA E VENDAS AUTOMOTIVAS
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A Talento Veículos é a sua melhor opção para comprar e vender automóveis e motocicletas.
            Trabalhamos com veículos de alto padrão e modelos de entrada, sempre oferecendo a melhor
            experiência para nossos clientes.
          </p>
        </div>

        {/* Mission, Vision and Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card className="border-2 border-[#00D2C7]/20 hover:border-[#00D2C7] transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005357] mb-3">Missão</h3>
              <p className="text-gray-600">
                Oferecer um atendimento diferenciado, realizando sonhos através da compra e venda
                de veículos com qualidade e transparência.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 border-[#00D2C7]/20 hover:border-[#00D2C7] transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005357] mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser referência em atendimento personalizado e amor ao próximo, construindo
                relacionamentos duradouros com nossos clientes.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="border-2 border-[#00D2C7]/20 hover:border-[#00D2C7] transition-colors">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#005357] mb-3">Valores</h3>
              <p className="text-gray-600">
                Gentileza, honestidade, transparência e compromisso em superar as expectativas
                de nossos clientes em cada atendimento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 