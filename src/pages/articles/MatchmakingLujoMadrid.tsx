import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Star, CheckCircle, Lock, User, Briefcase, Heart } from 'lucide-react';

const MatchmakingLujoMadrid: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const benefits = [
    {
      title: "Privacidad absoluta",
      description: "Tu información personal y búsqueda son completamente confidenciales. Nuestros acuerdos de confidencialidad garantizan tu privacidad en todo momento.",
      icon: <Lock className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Selección exclusiva",
      description: "Accede a una red de profesionales de alto nivel, cuidadosamente seleccionados y verificados, que comparten tu estilo de vida y aspiraciones.",
      icon: <User className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Ahorro de tiempo",
      description: "Deja que nuestro equipo se encargue de todo el proceso de búsqueda y selección, presentándote solo a personas que cumplen con tus criterios esenciales.",
      icon: <Briefcase className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Asesoramiento experto",
      description: "Recibe orientación personalizada de nuestros expertos en relaciones, que te ayudarán a navegar el proceso de encontrar una pareja compatible.",
      icon: <Heart className="h-6 w-6 text-amber-600" />
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Helmet>
        <title>Matchmaking de Lujo: La Opción Discreta para Profesionales Exigentes en Madrid | Agencia Matchmaking Madrid</title>
        <meta name="description" content="Descubre nuestro exclusivo servicio de matchmaking de lujo en Madrid, diseñado para profesionales exitosos que valoran su privacidad y buscan una relación seria y significativa." />
        <meta name="keywords" content="matchmaking de lujo, agencia matrimonial exclusiva, citas para profesionales, servicio discreto matchmaking, alto perfil citas madrid, agencia citas ejecutivos, encontrar pareja exitosa" />
      </Helmet>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Matchmaking de Lujo: La Opción <span className="text-amber-600">Discreta para Profesionales Exigentes</span> en Madrid
        </h1>
        
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
            <Shield className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="font-medium text-foreground">Equipo de Agencia Matchmaking Madrid</p>
            <p className="text-sm text-muted-foreground">Expertos en matchmaking de alto nivel</p>
          </div>
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="text-xl text-muted-foreground mb-8">
          En el acelerado mundo de los negocios y las altas esferas profesionales, encontrar tiempo para una vida personal satisfactoria puede ser un desafío. 
          Para aquellos que valoran su privacidad y buscan una relación significativa con alguien que comparta su estilo de vida y aspiraciones, 
          el matchmaking de lujo se ha convertido en la solución preferida en Madrid.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            ¿Qué hace único a nuestro servicio de matchmaking de lujo?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para experimentar el matchmaking de lujo en Madrid?</h2>
          <p className="mb-6">
            Nuestro servicio exclusivo está diseñado para profesionales exitosos que valoran su tiempo y buscan una relación significativa con alguien que comparta su estilo de vida y aspiraciones.
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-center"
          >
            Solicitar información
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </section>
      </div>
    </article>
  );
};

export default MatchmakingLujoMadrid;
