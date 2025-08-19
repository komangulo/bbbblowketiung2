import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import processImage from "@/assets/process-illustration.jpg";
import SubscriptionPlans from "@/components/SubscriptionPlans";

const Matchmaking = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicio Profesional de Matchmaking y Asesoría de Pareja
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 font-medium">
              Matchmaking: El arte de conectar a las personas
            </p>
          </div>
        </div>
      </section>

      {/* Definición Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-foreground mb-12">
              <p className="text-xl">
                El término "matchmaking" se ha popularizado en todo el mundo y su concepto es simple: conectar a dos personas compatibles con el objetivo de formar una pareja. Si bien la figura del "casamentero" existe desde hace siglos, esta práctica ha experimentado una transformación profesional, ganando gran relevancia en la última década, especialmente en Estados Unidos y Europa.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Cómo funciona nuestro método de Matchmaking?
              </h2>
              <div className="prose prose-lg text-foreground mb-8">
                <p>
                  En nuestra agencia, nos dedicamos a encontrar la pareja ideal para quienes buscan una relación seria y duradera. Entendemos que la vida moderna es ajetreada y que encontrar a esa persona especial puede ser un desafío. Por eso, ofrecemos un servicio discreto y confidencial que te ahorra tiempo y esfuerzo.
                </p>
                <p className="mt-4">
                  Utilizamos una metodología similar a la de los "headhunters", pero aplicada a las relaciones personales. Nuestro proceso se basa en una búsqueda minuciosa y personalizada para identificar a tu pareja perfecta, alineada con tus valores, gustos y aspiraciones.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mt-10 mb-6">
                Haz realidad tus sueños de amor
              </h3>
              <p className="text-lg text-foreground mb-6">
                El amor verdadero está más cerca de lo que piensas. Te invitamos a dar un paso diferente y explorar nuevas posibilidades. Con nuestro apoyo, no tendrás que depender de la suerte.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 mt-6"
              >
                <Link to="/contacto">
                  Encontrar tu ilusión
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">📱 Aplicaciones de Citas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Basadas en fotos y swipes rápidos</li>
                  <li>• Sin filtros de compatibilidad real</li>
                  <li>• Conversaciones superficiales</li>
                  <li>• Sin seguimiento profesional</li>
                  <li>• Pérdida de tiempo y energía</li>
                </ul>
              </div>

              <div className="bg-gradient-subtle border-2 border-primary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">💎 Matchmaking Profesional</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Evaluación profunda de personalidad y valores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Selección manual de candidatos compatibles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Coaching continuo y feedback personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Confidencialidad y discreción absoluta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Enfoque en relaciones serias y duraderas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 relative animate-fade-in max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={processImage} 
                alt="Proceso de matchmaking profesional Madrid"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Historias reales de personas que encontraron el amor con nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 - Mujer */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ana M.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 34 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Después de años en aplicaciones de citas sin éxito, probé el matchmaking. En solo 3 meses conocí a mi actual pareja. El proceso es completamente diferente y mucho más efectivo."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonio 2 - Mujer */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">María J.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 29 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Lo que más valoro es la seriedad del proceso. No son citas al azar, cada persona con la que me presentaron encajaba con lo que buscaba. Hoy estoy felizmente comprometida."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonio 3 - Hombre */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    C
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Carlos R.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 41 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Como hombre profesional, no tenía tiempo para buscar pareja. El servicio de matchmaking me permitió conocer a alguien increíble sin tener que invertir horas en aplicaciones."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonio 4 - Mujer */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sofía L.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 36 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Me encantó el trato personalizado. Sentí que realmente me escucharon y entendieron lo que buscaba. La primera cita que tuve a través de ellos fue con mi actual pareja."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonio 5 - Hombre */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    D
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">David M.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 45 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Después de un divorcio, no sabía cómo volver a conocer a alguien. El equipo me ayudó a recuperar la confianza y conocí a una persona maravillosa. Totalmente recomendable."
                </p>
              </CardContent>
            </Card>
            
            {/* Testimonio 6 - Mujer */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl mr-4">
                    E
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Elena G.</h4>
                    <p className="text-sm text-muted-foreground">Madrid, 31 años</p>
                  </div>
                </div>
                <p className="text-foreground">
                  "Lo mejor es que te presentan a personas que realmente buscan una relación seria. No hay pérdida de tiempo. Encontré a mi pareja ideal y estamos planeando nuestro futuro juntos."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Valor del Servicio */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              El valor del matchmaking profesional en Madrid
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro servicio va más allá de presentar personas. Te acompañamos en cada paso hacia una relación estable y feliz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Búsqueda Específica",
                description: "Encontramos exactamente lo que buscas según tus criterios únicos"
              },
              {
                icon: Shield,
                title: "Proceso Confidencial",
                description: "Tu privacidad es nuestra prioridad. Discreción garantizada"
              },
              {
                icon: Users,
                title: "Red Exclusiva",
                description: "Acceso a solteros profesionales verificados en Madrid"
              },
              {
                icon: Heart,
                title: "Compatibilidad Real",
                description: "Evaluamos valores, metas y estilo de vida compatible"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quién Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Para quién es nuestro servicio de matchmaking?
              </h2>
              <p className="text-xl text-muted-foreground">
                Nuestro servicio está diseñado para personas que buscan una relación seria y comprometida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Perfil Ideal</h3>
                  <ul className="space-y-3">
                    {[
                      "Profesionales exitosos de 30-55 años",
                      "Solteros que buscan una relación seria",
                      "Personas con poco tiempo para citas tradicionales",
                      "Quienes valoran la calidad sobre la cantidad",
                      "Individuos que buscan discreción y privacidad",
                      "Personas que han intentado otras opciones sin éxito"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Beneficios Emocionales</h3>
                  <ul className="space-y-3">
                    {[
                      "Confianza en el proceso de búsqueda",
                      "Reducción del estrés y ansiedad",
                      "Apoyo emocional continuo",
                      "Desarrollo de habilidades de relación",
                      "Mayor autoestima y autoconocimiento",
                      "Claridad sobre lo que realmente quieres"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Heart className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Estás listo para el matchmaking profesional?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Descubre cómo nuestro método exclusivo puede transformar tu búsqueda de pareja en Madrid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/proceso">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-luxury"
                >
                  Conoce nuestro proceso
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matchmaking;