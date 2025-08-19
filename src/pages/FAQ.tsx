import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ArrowRight, Shield, Users, Clock, Heart } from "lucide-react";
import SubscriptionPlans from "@/components/SubscriptionPlans";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Es confidencial el servicio de matchmaking?",
      answer: "Absolutamente. La confidencialidad es la base de nuestro servicio. Tu información personal nunca se comparte sin tu consentimiento expreso. Mantenemos protocolos estrictos de privacidad y todos nuestros clientes firman acuerdos de confidencialidad. Tu identidad está protegida en cada etapa del proceso.",
      category: "Privacidad"
    },
    {
      question: "¿Cuál es el costo del servicio de agencia matrimonial?",
      answer: "Nuestros servicios se personalizan según tus necesidades específicas. Ofrecemos diferentes paquetes que van desde consultas individuales hasta servicios completos de matchmaking. Durante tu consulta gratuita inicial, discutiremos las opciones que mejor se adapten a tu situación y presupuesto. Todos nuestros precios incluyen coaching personalizado y seguimiento continuo.",
      category: "Precios"
    },
    {
      question: "¿Qué diferencia a su agencia de una app de citas?",
      answer: "Nuestra diferencia radica en el enfoque personal y profesional. Mientras las apps se basan en fotos y swipes, nosotros realizamos evaluaciones profundas de compatibilidad. Ofrecemos: selección manual de candidatos, coaching personalizado, seguimiento continuo, máxima discreción, y enfoque en relaciones serias y duraderas. No es un juego, es tu futuro.",
      category: "Diferencias"
    },
    {
      question: "¿Cómo me garantizan que encontraré a alguien?",
      answer: "No prometemos resultados inmediatos, pero sí un proceso profesional y dedicado. Nuestro éxito se basa en la calidad del proceso: evaluación exhaustiva, selección cuidadosa, y coaching continuo. Trabajamos contigo hasta que te sientas seguro y confiado en el proceso de encontrar una relación significativa. Tu satisfacción es nuestro compromiso.",
      category: "Garantías"
    },
    {
      question: "¿Para quién es este servicio de matchmaking?",
      answer: "Nuestro servicio está diseñado para profesionales serios entre 30-55 años que buscan una relación comprometida y duradera. Es ideal para personas con carreras establecidas, poco tiempo para citas tradicionales, que valoran la calidad sobre la cantidad, y que han intentado otras opciones sin el éxito deseado. También para quienes buscan discreción y un enfoque profesional.",
      category: "Perfil"
    },
    {
      question: "¿Cuánto tiempo toma el proceso de matchmaking?",
      answer: "El tiempo varía según cada persona y sus criterios específicos. Algunas personas conectan en las primeras presentaciones, otras pueden tomar varios meses. Lo importante es que no hay prisa - nos enfocamos en encontrar la compatibilidad correcta, no en la velocidad. Durante el proceso, recibirás coaching continuo y apoyo, independientemente del tiempo que tome.",
      category: "Tiempo"
    },
    {
      question: "¿Verifican los perfiles de los candidatos?",
      answer: "Sí, todos nuestros candidatos pasan por un proceso riguroso de verificación. Confirmamos identidad, estado civil, situación profesional, y realizamos evaluaciones de compatibilidad. Solo trabajamos con personas serias que buscan relaciones comprometidas. Esta verificación es parte fundamental de lo que nos diferencia de otras opciones.",
      category: "Verificación"
    },
    {
      question: "¿Ofrecen coaching durante las citas?",
      answer: "Absolutamente. El coaching es una parte integral de nuestro servicio. Te preparamos antes de cada cita, te damos feedback constructivo después, y trabajamos en el desarrollo de tus habilidades de comunicación y confianza. Nuestro objetivo es que cada encuentro sea una oportunidad de crecimiento, independientemente del resultado romántico.",
      category: "Coaching"
    }
  ];

  const categories = [
    { name: "Privacidad", icon: Shield, color: "text-blue-600" },
    { name: "Precios", icon: Clock, color: "text-green-600" },
    { name: "Diferencias", icon: Users, color: "text-purple-600" },
    { name: "Garantías", icon: Heart, color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Resolvemos tus dudas sobre nuestro servicio de matchmaking profesional en Madrid.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-full mb-3">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-medium text-foreground">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-border shadow-sm hover:shadow-card transition-shadow duration-300">
                  <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between text-left">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                          </div>
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                            openItems.includes(index) ? 'transform rotate-180' : ''
                          }`} />
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="border-t border-border pt-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Datos sobre nuestro servicio
              </h2>
              <p className="text-xl text-muted-foreground">
                Información clave sobre nuestra agencia matrimonial en Madrid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  stat: "10+",
                  label: "Años de experiencia",
                  description: "Ayudando a personas a encontrar el amor en Madrid"
                },
                {
                  stat: "85%",
                  label: "Tasa de satisfacción",
                  description: "De nuestros clientes recomiendan nuestro servicio"
                },
                {
                  stat: "100%",
                  label: "Confidencialidad",
                  description: "Discreción absoluta garantizada en cada caso"
                }
              ].map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.label}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-hero rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Aún tienes dudas?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Programa una consulta gratuita y resolvemos todas tus preguntas personalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 shadow-luxury"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>

      <SubscriptionPlans />
    </div>
  );
};

export default FAQ;