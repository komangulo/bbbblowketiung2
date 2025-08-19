import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Search, Users, Heart, ArrowRight, Clock, Shield, Target } from "lucide-react";
import SubscriptionPlans from "@/components/SubscriptionPlans";

const Process = () => {
  const steps = [
    {
      icon: User,
      title: "1. Primera Consulta",
      description: "Conócenos y cuéntanos tu historia",
      details: [
        "Nos reunimos contigo, ya sea de forma presencial o virtual",
        "Conocemos tu historia, estilo de vida y expectativas",
        "Identificamos qué buscas en una relación",
        "Establecemos la base para entender quién eres"
      ],
      duration: "90-120 minutos"
    },
    {
      icon: Search,
      title: "2. Búsqueda y Selección",
      description: "Activamos nuestra red para encontrar a tu pareja ideal",
      details: [
        "Estrategia de búsqueda personalizada",
        "Nuestros expertos analizan múltiples canales",
        "Búsqueda proactiva más allá de nuestra base de datos",
        "Ampliamos tus posibilidades de éxito"
      ],
      duration: "1-3 semanas"
    },
    {
      icon: Users,
      title: "3. Entrevistas Personales",
      description: "Selección rigurosa de candidatos compatibles",
      details: [
        "Entrevistas en profundidad a cada posible match",
        "Evaluación de compatibilidad integral",
        "Análisis de valores y disponibilidad emocional",
        "Selección de perfiles con alta probabilidad de afinidad"
      ],
      duration: "Variable según candidatos"
    },
    {
      icon: Heart,
      title: "4. Presentaciones y Citas",
      description: "El emocionante momento del encuentro",
      details: [
        "Organización de la primera presentación",
        "Entorno seguro y agradable para ambos",
        "Tú te concentras en la conexión personal",
        "Nosotros nos encargamos de los detalles"
      ],
      duration: "1-2 horas por cita"
    },
    {
      icon: ArrowRight,
      title: "5. Seguimiento y Feedback",
      description: "Aprendizaje continuo para tu éxito amoroso",
      details: [
        "Seguimiento después de cada cita",
        "Feedback objetivo de nuestro equipo",
        "Reflexión para crecimiento personal",
        "Ajustes para futuras presentaciones"
      ],
      duration: "Continuo durante el proceso"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestro Método de Matchmaking: Cómo Trabajamos
            </h1>
            <p className="text-2xl text-muted-foreground font-medium mb-8">
              Coaching, Confidencialidad y Éxito
            </p>
            <div className="prose prose-lg text-muted-foreground text-left max-w-3xl mx-auto mt-8">
              <p className="text-foreground">
                En nuestra agencia, somos especialistas en el matchmaking exclusivo para personas que, como tú, buscan relaciones serias y duraderas. No solo te ayudamos a encontrar a tu pareja ideal, sino que también te preparamos para esa relación. Nuestro equipo de profesionales, que incluye expertos en headhunting, realiza una selección minuciosa y precisa para garantizar la máxima compatibilidad.
              </p>
              <p className="text-foreground mt-4">
                Además, contamos con coaches de relaciones para guiarte en tu viaje. Creemos firmemente en la importancia de estar emocionalmente preparado para el amor. Nuestros coaches te acompañan desde el primer momento, ofreciéndote herramientas y técnicas emocionales para que encuentres a la persona que siempre has soñado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* El Proceso Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              El Proceso de 5 Pasos para el Éxito
            </h2>
            <p className="text-xl text-muted-foreground">
              Nuestro método se basa en la afinidad y la compatibilidad. Buscamos conectar a personas que compartan valores, objetivos de vida, aficiones y experiencias, para que la relación no solo sea emocionante, sino también duradera y significativa.
            </p>
            <p className="text-xl text-muted-foreground mt-4">
              El proceso es sencillo y transparente, diseñado para que te sientas cómodo y seguro en cada etapa:
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="animate-slide-up">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-accent">Paso {index + 1}</span>
                        <h2 className="text-3xl font-bold text-foreground">{step.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6">{step.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Duración: {step.duration}</span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="border-0 shadow-elegant bg-gradient-subtle">
                      <CardContent className="p-12 text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-hero rounded-full mb-6">
                          <step.icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantías Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestras garantías y compromiso contigo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tu tranquilidad y satisfacción son nuestra prioridad durante todo el proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Confidencialidad Absoluta",
                description: "Tu privacidad está protegida en cada etapa del proceso. Discreción garantizada."
              },
              {
                icon: Target,
                title: "Proceso Personalizado",
                description: "Cada búsqueda es única y adaptada específicamente a tus necesidades y objetivos."
              },
              {
                icon: Heart,
                title: "Apoyo Continuo",
                description: "Te acompañamos desde el primer día hasta que encuentres tu relación ideal."
              }
            ].map((guarantee, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <guarantee.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{guarantee.title}</h3>
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* Compromiso Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¡Permítete encontrar el amor!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              En cada paso del camino, nuestro equipo estará contigo, asegurando que tu experiencia sea excepcional y que cada presentación tenga el máximo potencial de convertirse en una conexión significativa.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 px-8 py-6 text-lg"
            >
              Comienza tu viaje hacia el amor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestro Compromiso
              </h2>
              <p className="text-xl text-muted-foreground">
                Combinamos psicología, experiencia y un enfoque personalizado para maximizar tus posibilidades de éxito.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Análisis de Compatibilidad</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Valores Fundamentales</h4>
                        <p className="text-sm text-muted-foreground">Evaluamos la compatibilidad en valores de vida, metas y visión de futuro.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Estilo de Vida</h4>
                        <p className="text-sm text-muted-foreground">Analizamos rutinas, intereses y preferencias de estilo de vida.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Personalidad</h4>
                        <p className="text-sm text-muted-foreground">Utilizamos herramientas psicológicas para evaluar compatibilidad de personalidades.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Proceso de Coaching</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Desarrollo Personal</h4>
                        <p className="text-sm text-muted-foreground">Trabajamos en tu crecimiento personal y autoconocimiento.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Habilidades de Comunicación</h4>
                        <p className="text-sm text-muted-foreground">Mejoramos tus habilidades para conectar de manera auténtica.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">Confianza y Seguridad</h4>
                        <p className="text-sm text-muted-foreground">Fortalecemos tu confianza para relaciones exitosas.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comienza tu proceso de matchmaking hoy
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda tu consulta inicial gratuita y descubre cómo nuestro método puede transformar tu vida amorosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-luxury"
              >
                Agenda Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;