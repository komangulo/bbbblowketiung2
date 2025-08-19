import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Heart, MessageSquare, Users, UserCheck, CheckCircle, Star, Target, BarChart2 } from 'lucide-react';

const CoachingRelaciones = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Helmet>
        <title>¿Qué es el Coaching de Relaciones y Cómo te Ayuda a Encontrar Pareja? | Agencia Matchmaking Madrid</title>
        <meta name="description" content="Descubre cómo el coaching de relaciones puede transformar tu vida amorosa y ayudarte a encontrar una pareja compatible en Madrid." />
        <meta name="keywords" content="coaching de relaciones, encontrar pareja, coaching amoroso, relaciones de pareja, crecimiento personal, amor en Madrid" />
      </Helmet>

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          ¿Qué es el <span className="text-amber-600">Coaching de Relaciones</span>?
        </h1>
        <p className="text-xl text-muted-foreground">
          Descubre cómo puede transformar tu búsqueda de amor en Madrid
        </p>
      </header>

      <div className="prose prose-lg max-w-none text-foreground">
        <p className="mb-6">
          El coaching de relaciones es un proceso de acompañamiento profesional que te ayuda a desarrollar habilidades 
          para construir y mantener relaciones saludables. A diferencia de la terapia tradicional, se centra en el presente 
          y futuro, con un enfoque práctico y orientado a resultados.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Beneficios del coaching de relaciones
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-amber-600" />
                Autoconocimiento
              </h3>
              <p className="text-sm text-muted-foreground">
                Identifica claramente qué buscas en una pareja y qué puedes ofrecer en una relación.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-amber-600" />
                Comunicación efectiva
              </h3>
              <p className="text-sm text-muted-foreground">
                Desarrolla habilidades para expresar tus necesidades y escuchar activamente.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para transformar tu vida amorosa?</h2>
          <p className="mb-6">
            Nuestro programa de coaching está diseñado para profesionales que buscan una relación seria en Madrid.
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-center"
          >
            Solicita información
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </section>
      </div>
    </article>
  );
};

export default CoachingRelaciones;
