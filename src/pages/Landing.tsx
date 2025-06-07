
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Car, Phone, MessageCircle, MapPin, Award, Target, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (mockado)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header com NavBar fixa */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-primary">TALENTO</h2>
                <p className="text-xs text-muted-foreground">Veículos Premium</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('comprar')} className="text-foreground hover:text-brand-primary transition-colors">
                Comprar
              </button>
              <button onClick={() => scrollToSection('vender')} className="text-foreground hover:text-brand-primary transition-colors">
                Vender
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-brand-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('programas')} className="text-foreground hover:text-brand-primary transition-colors">
                Programas
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-brand-primary transition-colors">
                Contato
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-brand-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('unidade')} className="text-foreground hover:text-brand-primary transition-colors">
                Unidade
              </button>
            </div>

            <Button onClick={() => navigate('/login')} variant="outline">
              Login
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary pt-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            TALENTO VEÍCULOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A sua melhor opção para comprar e vender automóveis e motocicletas de alto padrão
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => navigate('/vehicles')}
            >
              <Car className="w-5 h-5 mr-2" />
              Comprar Veículo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-8 py-6"
              onClick={() => navigate('/schedule-evaluation')}
            >
              <Award className="w-5 h-5 mr-2" />
              Vender Meu Carro
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Talento Veículos */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              SOBRE A TALENTO VEÍCULOS
            </h2>
            <h3 className="text-2xl font-semibold text-brand-secondary mb-6">
              AGÊNCIA DE COMPRA E VENDAS AUTOMOTIVAS
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A Talento Veículos é a sua melhor opção para comprar e vender automóveis e motocicletas.
              Trabalhamos com veículos de alto padrão e modelos de entrada, sempre priorizando a qualidade
              e satisfação dos nossos clientes. Nossa expertise no mercado automotivo garante as melhores
              oportunidades e negociações justas para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-brand-primary">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Oferecer atendimento diferenciado na realização de sonhos automotivos,
                  conectando pessoas aos veículos ideais com transparência e confiança.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-brand-secondary">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ser referência no mercado automotivo através do amor ao próximo e
                  atendimento personalizado que supera expectativas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-brand-primary">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gentileza, honestidade e compromisso em superar expectativas,
                  construindo relacionamentos duradouros baseados na confiança.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programas Talento */}
      <section id="programas" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              PROGRAMAS TALENTO
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Talento Extreme</CardTitle>
                <CardDescription className="text-white/90">
                  Programa de Indicações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Transforme suas indicações em renda! Ganhe comissões por cada cliente
                  que você indicar para a Talento Veículos.
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2">
                  <li>Comissões atrativas por vendas concretizadas</li>
                  <li>Acompanhamento em tempo real</li>
                  <li>Suporte completo da equipe</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Talento VIP</CardTitle>
                <CardDescription className="text-white/90">
                  Parcerias Especiais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Parcerias exclusivas para manutenção, reparos e serviços automotivos
                  com as melhores oficinas da região.
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2">
                  <li>Descontos especiais em manutenções</li>
                  <li>Rede de parceiros qualificados</li>
                  <li>Atendimento prioritário</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              ENTRE EM CONTATO!
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Fale com a nossa equipe.
            </p>
            <p className="text-lg text-muted-foreground">
              Estamos à disposição para falar com você.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 flex-1"
                  onClick={() => window.open('https://wa.me/5561999999999', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar conversa no WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('tel:+5561999999999', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (61) 99999-9999
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envie uma mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <textarea
                    className="w-full min-h-[100px] px-3 py-2 border border-input bg-background rounded-md"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              FAQ - DÚVIDAS FREQUENTES
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona o processo de compra?</AccordionTrigger>
                <AccordionContent>
                  Entre em contato via WhatsApp ou consulte a seção de Contatos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Vocês aceitam financiamento?</AccordionTrigger>
                <AccordionContent>
                  Entre em contato via WhatsApp ou consulte a seção de Contatos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como vender meu carro para vocês?</AccordionTrigger>
                <AccordionContent>
                  Entre em contato via WhatsApp ou consulte a seção de Contatos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Oferecem garantia nos veículos?</AccordionTrigger>
                <AccordionContent>
                  Entre em contato via WhatsApp ou consulte a seção de Contatos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Unidade Física */}
      <section id="unidade" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">
              NOSSA UNIDADE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Visite nossa loja física em Brasília
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => window.open('https://maps.google.com/?q=Talento+Veículos+Brasília', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://waze.com/ul?q=Talento+Veículos+Brasília', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Abrir no Waze
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">TALENTO</h3>
                  <p className="text-xs text-white/80">Veículos Premium</p>
                </div>
              </div>
              <p className="text-white/80">
                Sua melhor opção para comprar e vender veículos de qualidade.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('sobre')}>Sobre</button></li>
                <li><button onClick={() => scrollToSection('programas')}>Programas</button></li>
                <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
                <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-white/80">
                <li>Compra de Veículos</li>
                <li>Venda de Veículos</li>
                <li>Avaliação Gratuita</li>
                <li>Financiamento</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-white/80">
                <li>(61) 99999-9999</li>
                <li>contato@talentoveiculos.com.br</li>
                <li>Brasília - DF</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 Talento Veículos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
