import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Heart, Quote, Star, Calendar, MapPin, Users, MessageSquare } from 'lucide-react';

const HistoriasExito: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const testimonials = [
    {
      id: 1,
      quote: "Después de años intentándolo por mi cuenta, encontré a mi pareja ideal gracias a la agencia. Su enfoque personalizado hizo toda la diferencia.",
      author: "Ana M., 34 años",
      location: "Madrid Centro",
      profession: "Abogada",
      featured: true
    },
    {
      id: 2,
      quote: "Como empresario, valoré especialmente la discreción y la calidad de los perfiles que me presentaron. Hoy estoy comprometido gracias a su trabajo.",
      author: "Carlos R., 42 años",
      location: "Pozuelo de Alarcón",
      profession: "Empresario"
    },
    {
      id: 3,
      quote: "El proceso de matching fue excepcional. Me sentí comprendida y acompañada en todo momento. ¡Recomiendo totalmente sus servicios!",
      author: "Laura G., 38 años",
      location: "Las Rozas",
      profession: "Médica"
    },
    {
      id: 4,
      quote: "Increíble experiencia. El equipo supo exactamente qué tipo de persona necesitaba en mi vida. Llevamos un año juntos y todo va genial.",
      author: "Sofía L., 31 años",
      location: "Chamberí, Madrid",
      profession: "Arquitecta"
    },
    {
      id: 5,
      quote: "Como profesional de la banca, no tenía tiempo para citas sin futuro. La agencia me presentó a mi actual pareja en la tercera cita.",
      author: "Javier M., 45 años",
      location: "Salamanca, Madrid",
      profession: "Director Bancario"
    },
    {
      id: 6,
      quote: "Tras un divorcio complicado, no creía volver a encontrar el amor. Gracias a su profesionalismo y sensibilidad, hoy soy felizmente casada de nuevo.",
      author: "Elena V., 50 años",
      location: "La Moraleja",
      profession: "Psicóloga"
    }
  ];

  return (
    <article className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <Helmet>
        <title>Historias de Éxito: Parejas que Encontraron el Amor | Agencia Matchmaking Madrid</title>
        <meta name="description" content="Descubre historias reales de parejas que encontraron el amor a través de nuestra agencia de matchmaking en Madrid. Testimonios de profesionales que lograron su felicidad." />
        <meta name="keywords" content="historias de éxito, agencia matrimonial, testimonios de parejas, matchmaking madrid, encontrar pareja, citas serias, amor verdadero" />
        <meta property="og:title" content="Historias de Éxito: Parejas que Encontraron el Amor en Nuestra Agencia Matrimonial" />
        <meta property="og:description" content="Conoce las historias reales de profesionales que encontraron el amor gracias a nuestro servicio de matchmaking en Madrid." />
        <meta property="og:type" content="article" />
        <meta name="author" content="Equipo de Agencia Matchmaking Madrid" />
        <meta name="date" content="2025-08-18" />
      </Helmet>

      <header className="mb-12 text-center">
        <div className="flex justify-center items-center text-sm text-amber-600 mb-4">
          <span>Estilo de Vida</span>
          <span className="mx-2">•</span>
          <time dateTime="2025-08-18">18 de Agosto, 2025</time>
          <span className="mx-2">•</span>
          <span>7 min lectura</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Historias de Éxito: <span className="text-amber-600">Parejas que Encontraron el Amor</span> en Nuestra Agencia
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground">
            Descubre las inspiradoras historias de profesionales que, como tú, buscaban una relación seria y significativa en Madrid.
          </p>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-foreground">
        <section className="mb-16">
          <div className="bg-amber-50 p-8 rounded-2xl mb-12 border border-amber-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Más de 200 parejas formadas en los últimos 5 años</h2>
              <p className="text-lg mb-6">
                Nuestro mayor orgullo es ver cómo las conexiones que facilitamos se transforman en relaciones duraderas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">72%</div>
                  <div className="text-sm text-muted-foreground">Parejas juntas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Valoración</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">3</div>
                  <div className="text-sm text-muted-foreground">Bebés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow ${testimonial.featured ? 'md:col-span-2' : ''}`}>
                <div className="p-6">
                  <div className="mb-4 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 inline-block fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.profession} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para escribir tu propia historia de éxito?</h2>
            <p className="mb-6">
              Nuestro equipo de expertos en relaciones está listo para ayudarte a encontrar a esa persona especial con la que compartir tu vida.
            </p>
            <a 
              href="/contacto" 
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
            >
              Comienza tu viaje
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/coaching-relaciones" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">¿Qué es el Coaching de Relaciones y Cómo te Ayuda a Encontrar Pareja?</h4>
                <p className="text-sm text-muted-foreground mt-1">Descubre cómo el coaching puede transformar tu búsqueda de pareja</p>
              </div>
            </a>
            <a href="/blog/matchmaking-lujo-madrid" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">Matchmaking de Lujo: La Opción Discreta para Profesionales Exigentes en Madrid</h4>
                <p className="text-sm text-muted-foreground mt-1">Conoce los beneficios del servicio premium de matchmaking</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HistoriasExito;
