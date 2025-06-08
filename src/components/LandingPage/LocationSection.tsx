import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="unidade" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005357] mb-4">
            Nossa Unidade
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar e conhecer nosso espaço
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1234567890123!2d-47.12345678901234!3d-15.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA3JzI0LjUiUyA0N8KwMDcnMjQuNSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                Endereço
              </h3>
              <p className="text-gray-600">
                SHIS QI 13, Conjunto 1, Bloco A, Loja 1
                <br />
                Lago Sul, Brasília - DF
                <br />
                CEP: 71635-100
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                Como chegar
              </h3>
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=WHITE+Veículos+Brasília"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-[#00D2C7] text-[#005357] hover:bg-[#00D2C7] hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </a>
                <a
                  href="https://waze.com/ul?ll=-15.12345678901234,-47.12345678901234&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block ml-4"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-[#00D2C7] text-[#005357] hover:bg-[#00D2C7] hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Waze
                  </Button>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                Estacionamento
              </h3>
              <p className="text-gray-600">
                Oferecemos estacionamento gratuito para nossos clientes.
                <br />
                Vagas disponíveis na frente da loja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 