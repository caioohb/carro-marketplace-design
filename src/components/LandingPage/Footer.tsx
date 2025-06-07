import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00D2C7] to-[#005357] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white">TALENTO</span>
            </Link>
            <p className="text-gray-400">
              A melhor experiência em compra e venda de veículos premium.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/vehicles"
                  className="text-gray-400 hover:text-[#00D2C7] transition-colors"
                >
                  Comprar
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule-evaluation"
                  className="text-gray-400 hover:text-[#00D2C7] transition-colors"
                >
                  Vender
                </Link>
              </li>
              <li>
                <Link
                  to="/#sobre"
                  className="text-gray-400 hover:text-[#00D2C7] transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/#programas"
                  className="text-gray-400 hover:text-[#00D2C7] transition-colors"
                >
                  Programas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>SHIS QI 13, Conjunto 1, Bloco A, Loja 1</li>
              <li>Lago Sul, Brasília - DF</li>
              <li>CEP: 71635-100</li>
              <li>Tel: (61) 99999-9999</li>
              <li>Email: contato@talento.com.br</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D2C7] transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D2C7] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D2C7] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D2C7] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Talento Veículos. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 