import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold text-[#005357]">WHITE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("comprar")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Comprar
            </button>
            <button
              onClick={() => scrollToSection("vender")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Vender
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("programas")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Programas
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("unidade")}
              className="text-[#005357] hover:text-[#00D2C7] transition-colors"
            >
              Unidade
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#005357]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("comprar")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Comprar
              </button>
              <button
                onClick={() => scrollToSection("vender")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Vender
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("programas")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("unidade")}
                className="text-[#005357] hover:text-[#00D2C7] transition-colors text-left"
              >
                Unidade
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 