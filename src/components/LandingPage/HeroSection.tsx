import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Encontre o Carro dos Seus Sonhos
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          A Talento Veículos oferece a melhor experiência em compra e venda de veículos premium
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/vehicles">
            <Button
              size="lg"
              className="bg-[#00D2C7] hover:bg-[#005357] text-white px-8 py-6 text-lg"
            >
              Comprar
            </Button>
          </Link>
          <Link to="/schedule-evaluation">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#005357] px-8 py-6 text-lg"
            >
              Vender
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 