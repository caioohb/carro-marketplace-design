import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o processo de compra?",
      answer:
        "O processo de compra é simples e transparente. Você escolhe o veículo, faz uma visita para conhecer o carro, realiza o teste drive e, se gostar, fechamos o negócio com as melhores condições de pagamento.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos diversas formas de pagamento, incluindo dinheiro, transferência bancária, financiamento e consórcio. Trabalhamos com as principais instituições financeiras do mercado.",
    },
    {
      question: "Como funciona a avaliação do meu veículo?",
      answer:
        "A avaliação é feita por nossa equipe técnica especializada, que analisa todos os aspectos do veículo, incluindo mecânica, documentação e estado de conservação. O valor é definido com base em critérios técnicos e de mercado.",
    },
    {
      question: "Vocês oferecem garantia nos veículos?",
      answer:
        "Sim, todos os veículos comercializados pela Talento Veículos possuem garantia legal e adicional, conforme a legislação vigente. Além disso, realizamos uma vistoria completa antes da entrega.",
    },
    {
      question: "Como posso agendar uma visita?",
      answer:
        "Você pode agendar uma visita através do nosso site, WhatsApp ou telefone. Nossa equipe está pronta para atender você no melhor horário.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#005357] mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-[#00D2C7]/20 rounded-lg mb-4 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-[#005357] hover:text-[#00D2C7] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-gray-600 mt-8">
            Não encontrou sua dúvida? Entre em contato via WhatsApp ou consulte a
            seção de Contatos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 