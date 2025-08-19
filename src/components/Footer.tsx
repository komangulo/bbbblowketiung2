import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-accent rounded-full">
                <Heart className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent">Agencia Matchmaking</h3>
                <p className="text-sm text-muted-foreground">Madrid</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              La agencia matrimonial líder en Madrid. Conectamos personas que buscan 
              relaciones estables y duraderas a través de nuestro servicio de matchmaking personalizado.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Madrid, España</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+34 91 000 0000</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contacto@amormadrid.es</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/matchmaking" className="text-muted-foreground hover:text-primary transition-colors">
                  Matchmaking Profesional
                </Link>
              </li>
              <li>
                <Link to="/proceso" className="text-muted-foreground hover:text-primary transition-colors">
                  Coaching de Relaciones
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Asesoría Personalizada
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Búsqueda de Pareja
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Agencia Matchmaking Madrid. Todos los derechos reservados. 
            Agencia matrimonial profesional en Madrid.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Matchmaking Madrid | Coaching de Relaciones | Encontrar Pareja Estable Madrid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;