import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Qué es Matchmaking", href: "/matchmaking" },
    { name: "Cómo Trabajamos", href: "/proceso" },
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Estilo de Vida", href: "/blog" },
  ];

  const isActive = (href: string) => location.pathname === href || 
    (href !== '/' && location.pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Agencia Matchmaking</h1>
              <p className="text-sm font-medium text-gray-900">Madrid</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-gray-900 font-semibold bg-amber-100 border-b-2 border-amber-500"
                    : "text-white hover:bg-gray-800/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold text-base px-6 py-3 rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 text-base font-semibold rounded-md transition-all duration-300 hover:text-accent hover:bg-accent/10 ${
                    isActive(item.href) 
                      ? "text-accent bg-accent/10" 
                      : "text-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold text-base py-3 rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-md"
                >
                  Consulta Gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;