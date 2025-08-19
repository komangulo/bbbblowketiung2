import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, CheckCircle, XCircle, ArrowRight, Heart, User, Clock, Calendar, MessageSquare } from 'lucide-react';
import blogErrores from '@/assets/blog-errores-madrid.jpg';

const ErroresComunesBuscarPareja: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const errors = [
    {
      id: 1,
      title: "No tener claro lo que buscas",
      description: "Muchas personas inician su búsqueda sin una idea clara de lo que realmente quieren en una pareja, lo que lleva a relaciones insatisfactorias.",
      solution: "Tómate el tiempo para reflexionar sobre tus valores, metas y las cualidades que son verdaderamente importantes para ti en una relación a largo plazo.",
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />
    },
    {
      id: 2,
      title: "Centrarse solo en la apariencia física",
      description: "Dar prioridad exclusiva al atractivo físico puede hacer que pases por alto conexiones significativas con personas compatibles.",
      solution: "Valora la compatibilidad de valores, intereses y metas a largo plazo, no solo la química inicial o el aspecto físico.",
      icon: <User className="h-5 w-5 text-amber-600" />
    },
    {
      id: 3,
      title: "Tener expectativas poco realistas",
      description: "Buscar la perfección o esperar que una persona cumpla con una larga lista de requisitos específicos puede ser contraproducente.",
      solution: "Sé flexible y realista sobre lo que realmente importa en una relación duradera. Nadie es perfecto, incluyéndote a ti.",
      icon: <XCircle className="h-5 w-5 text-amber-600" />
    },
    {
      id: 4,
      title: "No salir de tu zona de confort",
      description: "Limitar tus opciones a un tipo específico de persona o a los mismos entornos sociales reduce significativamente tus posibilidades de encontrar pareja.",
      solution: "Sé abierto a conocer personas de diferentes orígenes y en diversos entornos. El amor puede aparecer donde menos lo esperas.",
      icon: <Heart className="h-5 w-5 text-amber-600" />
    },
    {
      id: 5,
      title: "Tener prisa por encontrar a alguien",
      description: "La desesperación por estar en una relación puede llevar a decisiones apresuradas y a ignorar señales de alerta importantes.",
      solution: "Disfruta del proceso de conocer a alguien nuevo sin presiones. Las mejores relaciones se construyen con tiempo y paciencia.",
      icon: <Clock className="h-5 w-5 text-amber-600" />
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Helmet>
        <title>5 Errores Comunes al Buscar Pareja en Madrid | Agencia Matchmaking Madrid</title>
        <meta name="description" content="Descubre los 5 errores más comunes que cometen los solteros en Madrid al buscar pareja y cómo evitarlos para encontrar una relación significativa y duradera." />
        <meta name="keywords" content="errores buscar pareja, citas en madrid, consejos relaciones, matchmaking madrid, encontrar pareja madrid, citas serias, agencia matrimonial madrid" />
        <meta property="og:title" content="5 Errores Comunes al Buscar Pareja en Madrid | Agencia Matchmaking Madrid" />
        <meta property="og:description" content="Evita estos errores comunes que cometen los solteros en Madrid al buscar pareja y aumenta tus posibilidades de encontrar una relación significativa." />
        <meta property="og:type" content="article" />
        <meta name="author" content="Equipo de Agencia Matchmaking Madrid" />
        <meta name="date" content="2025-08-18" />
      </Helmet>

      <header className="mb-12">
        <div className="flex items-center text-sm text-amber-600 mb-4">
          <span>Consejos</span>
          <span className="mx-2">•</span>
          <time dateTime="2025-08-18">18 de Agosto, 2025</time>
          <span className="mx-2">•</span>
          <span>7 min lectura</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          5 Errores Comunes al Buscar Pareja en <span className="text-amber-600">Madrid</span>
        </h1>
        
        <div className="flex items-center mt-8">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="font-medium text-foreground">Equipo de Agencia Matchmaking Madrid</p>
            <p className="text-sm text-muted-foreground">Expertos en relaciones de pareja</p>
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-foreground">
        <figure className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={blogErrores} 
            alt="Errores comunes al buscar pareja en Madrid" 
            className="w-full h-96 object-cover"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            Evita estos errores comunes para aumentar tus posibilidades de encontrar una relación significativa en Madrid
          </figcaption>
        </figure>

        <p className="text-xl text-muted-foreground mb-8">
          Encontrar pareja en una ciudad tan grande y diversa como Madrid puede ser todo un desafío. 
          A lo largo de los años, hemos identificado patrones comunes que dificultan a los solteros 
          establecer conexiones significativas. En este artículo, te revelamos los 5 errores más frecuentes 
          al buscar pareja en Madrid y cómo evitarlos.
        </p>

        <div className="space-y-12 mb-12">
          {errors.map((error) => (
            <div key={error.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center mr-4 mt-0.5">
                    {error.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      Error #{error.id}: {error.title}
                    </h2>
                    <div className="flex items-start mb-4">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium">El problema:</span> {error.description}
                      </p>
                    </div>
                    <div className="flex items-start bg-amber-50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <span className="font-medium">La solución:</span> {error.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Consejos adicionales para encontrar pareja en Madrid
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-amber-600" />
                Participa en eventos sociales
              </h3>
              <p className="text-sm text-muted-foreground">
                Asiste a eventos y actividades que te interesen. No solo aumentarás tus posibilidades de conocer a alguien afín, sino que tendrás temas en común desde el principio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-amber-600" />
                Sé auténtico
              </h3>
              <p className="text-sm text-muted-foreground">
                La mejor estrategia es ser tú mismo desde el principio. Las relaciones basadas en la autenticidad tienen más posibilidades de prosperar a largo plazo.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para encontrar una relación significativa en Madrid?</h2>
          <p className="mb-6">
            Si estás cansado de cometer estos errores y quieres un enfoque más efectivo para encontrar pareja en Madrid, 
            nuestro servicio de matchmaking profesional puede ayudarte. Conocemos los desafíos únicos de las citas en 
            la capital y podemos guiarte hacia relaciones más satisfactorias.
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-center"
          >
            Descubre cómo podemos ayudarte
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/matchmaking-lujo-madrid" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">Matchmaking de Lujo: La Opción Discreta para Profesionales Exigentes en Madrid</h4>
                <p className="text-sm text-muted-foreground mt-1">Descubre cómo nuestro servicio premium puede ayudarte a encontrar una relación significativa</p>
              </div>
            </a>
            <a href="/blog/5-mitos-agencias-citas-madrid" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">5 Mitos sobre las Agencias de Citas en Madrid que Debes Dejar de Creer</h4>
                <p className="text-sm text-muted-foreground mt-1">Desmontamos los mitos más comunes sobre las agencias de citas profesionales</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ErroresComunesBuscarPareja;
