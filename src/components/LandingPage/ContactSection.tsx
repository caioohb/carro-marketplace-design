import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005357] mb-4">
            ENTRE EM CONTATO!
          </h2>
          <p className="text-xl text-[#006F75] mb-2">
            Fale com a nossa equipe.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos à disposição para falar com você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 border-[#00D2C7]/20 focus:border-[#00D2C7]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-[#00D2C7]/20 focus:border-[#00D2C7]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-2 border-[#00D2C7]/20 focus:border-[#00D2C7] min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#00D2C7] hover:bg-[#005357] text-white"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                Outras formas de contato
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5561999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#005357] hover:text-[#00D2C7] transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Iniciar conversa no WhatsApp</span>
                </a>
                <a
                  href="tel:+5561999999999"
                  className="flex items-center gap-3 text-[#005357] hover:text-[#00D2C7] transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>(61) 99999-9999</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#005357] mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-gray-600">
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 