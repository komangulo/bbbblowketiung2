import { useState } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";
import FreeMemberForm from "./FreeMemberForm";

const SubscriptionPlans = () => {
  const [isPrivateFormOpen, setIsPrivateFormOpen] = useState(false);
  const [isFreeFormOpen, setIsFreeFormOpen] = useState(false);

  const openPrivateForm = () => {
    setIsPrivateFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePrivateForm = () => {
    setIsPrivateFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openFreeForm = () => {
    setIsFreeFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFreeForm = () => {
    setIsFreeFormOpen(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Elige cómo quieres conocernos
          </h2>
          <p className="text-xl text-muted-foreground">
            Encuentra la opción que mejor se adapte a lo que buscas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Miembro Privado */}
          <div className="bg-white border-2 border-amber-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-8">
              <div className="text-center mb-6">
                <p className="text-amber-600 font-medium mb-2">¡Este es el primer paso para tu nuevo futuro!</p>
                <h3 className="text-2xl font-bold text-foreground mb-2">MIEMBRO PRIVADO</h3>
                <p className="text-amber-700 font-medium">CONSTRUIMOS TU FUTURO</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-foreground">
                  Nuestros MIEMBROS PRIVADOS obtendrán una búsqueda activa y personalizada. Tendremos una primera entrevista personal para asegurarnos de conocer sus necesidades. Nuestro objetivo es presentarle a esa persona genuina, atractiva e interesante que al igual que usted desee encontrar el amor y la estabilidad en su vida.
                </p>
                <p className="font-medium text-foreground">
                  Rellena el Formulario para Conocerte un Poco Mejor
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Personas seleccionadas personalmente",
                  "Servicio de Matchmaker personalizado durante 8 meses",
                  "Búsqueda proactiva",
                  "Servicio mensual de asesoramiento",
                  "Acceso a nuestra base de datos",
                  "Seguimiento personalizado después de cada presentación",
                  "Servicio en tu ciudad o a nivel nacional"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <p className="text-lg font-medium">
                  Si deseas invertir en encontrar la pareja de tu vida, solicita ser uno de nuestros Miembros Privados y exclusivos completando el formulario.
                </p>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 py-6 text-lg"
                size="lg"
                onClick={openPrivateForm}
              >
                ILUSIONATE
              </Button>
              
              {isPrivateFormOpen && <ContactForm onClose={closePrivateForm} />}
            </div>
          </div>

          {/* Miembro Gratuito */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">MIEMBRO GRATUITO</h3>
              </div>
              
              <p className="text-lg font-medium mb-6">Trabajamos por y para ti</p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <p className="text-amber-800 font-medium">
                  Ser miembro gratuito no garantiza la búsqueda de la persona deseada
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Permanecerás en nuestra base de datos",
                  "Podrás ser emparejado con miembros privados si coincide con su perfil",
                  "Registro pasivo del perfil",
                  "Sin garantía de ser emparejados"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <p className="text-lg font-medium mb-4">
                  ¡PERO TE DAMOS LA OPORTUNIDAD DE CONOCER A LOS MEJORES!
                </p>
                <p className="text-muted-foreground">
                  Sólo tienes que rellenar un pequeño formulario y cuando tu perfil sea válido para uno de nuestros Miembros Privados, contactaremos contigo.
                </p>
              </div>

              <Button 
                className="w-full bg-gray-100 text-foreground hover:bg-gray-200 py-6 text-lg border border-gray-200"
                variant="outline"
                size="lg"
                onClick={openFreeForm}
              >
                INSCRÍBETE
              </Button>
              
              {isFreeFormOpen && <FreeMemberForm onClose={closeFreeForm} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
