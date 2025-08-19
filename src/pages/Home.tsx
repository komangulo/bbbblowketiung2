import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Award, ArrowRight, CheckCircle, Star, Lock, UserCheck, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-couple.jpg";
import matchmakerImage from "@/assets/matchmaker-professional.jpg";
import SubscriptionPlans from "@/components/SubscriptionPlans";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Encuentra tu pareja ideal en <span className="text-accent">Madrid</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Matchmaking profesional y coaching de relaciones. Tu camino hacia una relación estable y duradera empieza aquí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-luxury animate-elegant-pulse"
              >
                Empieza tu camino hoy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-amber-400 hover:bg-amber-400/20 hover:border-amber-300 text-lg px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
              >
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir nuestro servicio de matchmaking?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Más que una simple cita. Un proceso personalizado, confidencial y enfocado en la compatibilidad real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compatibilidad Real",
                description: "Evaluamos la compatibilidad profunda, no solo atracciones superficiales"
              },
              {
                icon: Shield,
                title: "Máxima Discreción",
                description: "Proceso completamente confidencial y profesional"
              },
              {
                icon: Users,
                title: "Ahorro de Tiempo",
                description: "Encuentra personas realmente compatibles sin perder tiempo"
              },
              {
                icon: Award,
                title: "Profesionalidad",
                description: "Expertos en relaciones con años de experiencia"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Qué es Agencia Matchmaking? Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Qué es Agencia Matchmaking? <span className="text-amber-600">La 1ª Agencia de Matchmaking en Madrid</span>
            </h2>
            <h3 className="text-2xl text-amber-700 font-medium mb-8">
              Somos tus Headhunters Sentimentales
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              El matchmaking es un servicio profesional que aplica la rigurosa metodología del headhunting al mundo de las relaciones personales. Es la solución ideal para quienes buscan una pareja estable de manera privada y confidencial. Esta práctica, muy arraigada y exitosa en Estados Unidos y el norte de Europa desde hace más de una década, está demostrando ser la forma más eficaz de encontrar una conexión auténtica.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Si buscas a esa persona especial y estás cansado de las apps de citas, has llegado al lugar correcto. Mientras que un headhunter tradicional busca al candidato perfecto para un puesto de trabajo, nuestros headhunters emocionales se dedican a una misión más importante: encontrar a la persona ideal para ti. En nuestra agencia de matchmaking, analizamos tus preferencias y valores para presentarte a la mejor candidata o candidato.
            </p>
            <p className="text-xl font-medium text-foreground">
              Encuentra a tu persona especial. En la Agencia de Matchmaking donde sí funciona.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué Ofrecemos? Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué Ofrecemos en Nuestra Agencia de Matchmaking?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro servicio exclusivo se centra en un único objetivo: relaciones serias y duraderas. Te ofrecemos un enfoque fiable, seguro y lleno de ilusión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Exclusividad</h3>
                  <p className="text-muted-foreground">Nuestros miembros son, en su mayoría, personas exitosas y decididas que valoran su tiempo. Saben exactamente lo que quieren y confían en la experiencia de nuestros profesionales para la búsqueda de su pareja.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <UserCheck className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personalización</h3>
                  <p className="text-muted-foreground">Tu futura pareja es seleccionada manualmente, ajustándonos a tus criterios. Utilizamos el headhunting emocional para asegurar la máxima compatibilidad en valores, intereses y preferencias.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Privacidad</h3>
                  <p className="text-muted-foreground">Tu privacidad, discreción y confidencialidad son nuestra máxima prioridad. Nunca compartiremos tus datos sin tu consentimiento previo. Tú decides quién ve tu perfil y cuándo.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seguridad</h3>
                  <p className="text-muted-foreground">Cada miembro es entrevistado y sus datos son verificados meticulosamente antes de ser aceptados, garantizando un entorno seguro para ti.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Sparkles className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ilusión</h3>
                  <p className="text-muted-foreground">Si valoras tu tiempo y deseas una pareja estable, ponte en contacto con nosotros. Te ayudaremos a encontrar a personas afines que, como tú, están ilusionadas por encontrar a alguien especial.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestras Modalidades de Membresía
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elige la opción que mejor se adapte a lo que estás buscando
            </p>
          </div>
          <SubscriptionPlans />
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tus expertos en relaciones en Madrid
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Con más de una década de experiencia ayudando a personas a encontrar el amor verdadero, 
                nuestra agencia matrimonial se ha convertido en la referencia de matchmaking profesional en Madrid.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Proceso personalizado y único para cada cliente",
                  "Red exclusiva de solteros profesionales en Madrid",
                  "Coaching continuo durante todo el proceso",
                  "Garantía de confidencialidad absoluta"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/matchmaking">
                <Button size="lg" className="bg-gradient-hero shadow-elegant">
                  Conoce nuestro método
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={matchmakerImage} 
                  alt="Experta en matchmaking Madrid - Agencia matrimonial profesional"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-blue/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para encontrar a tu pareja ideal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda una consulta gratuita y descubre cómo nuestro servicio de matchmaking 
              puede cambiar tu vida amorosa para siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-luxury"
              >
                Consulta Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                +34 91 000 0000
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;