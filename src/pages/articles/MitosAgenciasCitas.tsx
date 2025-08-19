import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, CheckCircle, XCircle, ArrowRight, Heart, Users, Lock, Calendar, MessageSquare } from 'lucide-react';
import blogProfesionales from '@/assets/blog-profesionales.jpg';

const MitosAgenciasCitas: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const myths = [
    {
      id: 1,
      myth: "Las agencias de citas son solo para personas desesperadas",
      truth: "Nada más lejos de la realidad. La mayoría de nuestros clientes son profesionales exitosos que valoran su tiempo y buscan una relación seria de manera eficiente.",
      icon: <Users className="h-5 w-5 text-amber-600" />
    },
    {
      id: 2,
      myth: "No respetan la privacidad de los clientes",
      truth: "En nuestra agencia, la confidencialidad es sagrada. Utilizamos acuerdos de confidencialidad estrictos y nunca compartimos información personal sin consentimiento expreso.",
      icon: <Lock className="h-5 w-5 text-amber-600" />
    },
    {
      id: 3,
      myth: "Es muy caro y solo para millonarios",
      truth: "Ofrecemos diferentes paquetes adaptados a diversas necesidades y presupuestos. La inversión en encontrar una relación significativa es accesible para profesionales con diferentes capacidades económicas.",
      icon: <AlertCircle className="h-5 w-5 text-amber-600" />
    },
    {
      id: 4,
      myth: "Te obligan a salir con personas con las que no tienes nada en común",
      truth: "Nuestro proceso de matching es minucioso y se basa en múltiples criterios de compatibilidad. Solo te presentamos a personas que cumplen con tus preferencias y valores fundamentales.",
      icon: <Heart className="h-5 w-5 text-amber-600" />
    },
    {
      id: 5,
      myth: "Los resultados no están garantizados",
      truth: "Aunque ningún servicio puede garantizar el amor, nuestro método probado y personalizado maximiza significativamente tus posibilidades de encontrar una relación exitosa, como demuestran nuestras historias de éxito.",
      icon: <CheckCircle className="h-5 w-5 text-amber-600" />
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Helmet>
        <title>5 Mitos sobre las Agencias de Citas en Madrid que Debes Dejar de Creer</title>
        <meta name="description" content="Descubre la verdad detrás de los mitos más comunes sobre las agencias de citas en Madrid. Aprende por qué nuestro servicio de matchmaking profesional es la elección inteligente para encontrar el amor." />
        <meta name="keywords" content="agencias de citas, mitos, Madrid, matchmaking profesional, citas serias, encontrar pareja, amor verdadero, citas en madrid" />
        <meta property="og:title" content="5 Mitos sobre las Agencias de Citas en Madrid que Debes Dejar de Creer" />
        <meta property="og:description" content="Desmontamos los mitos más comunes sobre las agencias de citas en Madrid y te mostramos cómo nuestro servicio de matchmaking puede ayudarte a encontrar una relación seria y significativa." />
        <meta property="og:type" content="article" />
        <meta name="author" content="Equipo de Agencia Matchmaking Madrid" />
        <meta name="date" content="2025-08-18" />
      </Helmet>

      <header className="mb-12">
        <div className="flex items-center text-sm text-amber-600 mb-4">
          <span>Estilo de Vida</span>
          <span className="mx-2">•</span>
          <time dateTime="2025-08-18">18 de Agosto, 2025</time>
          <span className="mx-2">•</span>
          <span>8 min lectura</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          5 Mitos sobre las <span className="text-amber-600">Agencias de Citas en Madrid</span> que Debes Dejar de Creer
        </h1>
        
        <div className="flex items-center mt-8">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
            <AlertCircle className="h-6 w-6 text-amber-600" />
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
            src={blogProfesionales} 
            alt="Desmontando mitos sobre las agencias de citas en Madrid" 
            className="w-full h-96 object-cover"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            La verdad detrás de los mitos más comunes sobre las agencias de citas profesionales
          </figcaption>
        </figure>

        <p className="text-xl text-muted-foreground mb-8">
          En la era digital, las agencias de citas profesionales en Madrid han evolucionado significativamente, 
          pero aún persisten muchos mitos que pueden disuadir a las personas de aprovechar sus beneficios. 
          En este artículo, desmontamos los 5 mitos más comunes sobre las agencias de citas y te mostramos 
          la realidad de nuestro servicio de matchmaking profesional.
        </p>

        <div className="space-y-12 mb-12">
          {myths.map((myth) => (
            <div key={myth.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center mr-4 mt-0.5">
                    {myth.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      Mito #{myth.id}: {myth.myth}
                    </h2>
                    <div className="flex items-start mb-4">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        <span className="font-medium">Lo que se cree:</span> {myth.myth}
                      </p>
                    </div>
                    <div className="flex items-start bg-amber-50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">
                        <span className="font-medium">La realidad:</span> {myth.truth}
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
            ¿Por qué elegir una agencia de citas profesional en Madrid?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-amber-600" />
                Ahorro de tiempo
              </h3>
              <p className="text-sm text-muted-foreground">
                Nuestro equipo se encarga de todo el proceso de búsqueda y selección, presentándote solo a personas que realmente encajan contigo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-amber-600" />
                Asesoramiento experto
              </h3>
              <p className="text-sm text-muted-foreground">
                Te ofrecemos consejos y orientación profesional para mejorar tus habilidades sociales y de comunicación en las citas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-8 rounded-xl border border-amber-100 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para vivir una experiencia de citas diferente en Madrid?</h2>
          <p className="mb-6">
            Ahora que conoces la realidad sobre las agencias de citas profesionales, ¿por qué no dar el primer paso hacia una relación significativa? 
            Nuestro equipo está listo para ayudarte a encontrar a esa persona especial que estás buscando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contacto" 
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-center"
            >
              Solicita una consulta sin compromiso
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="/blog/historias-exito" 
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors text-center"
            >
              Ver historias de éxito
            </a>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/guia-solteros" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">Guía Completa para Solteros: Por Qué Invertir en tu Futura Pareja</h4>
                <p className="text-sm text-muted-foreground mt-1">Descubre por qué merece la pena invertir en encontrar una relación significativa</p>
              </div>
            </a>
            <a href="/blog/matchmaking-lujo-madrid" className="group">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors">
                <h4 className="font-medium text-foreground group-hover:text-amber-600">Matchmaking de Lujo: La Opción Discreta para Profesionales Exigentes</h4>
                <p className="text-sm text-muted-foreground mt-1">Conoce nuestro servicio premium para quienes buscan excelencia en sus relaciones</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MitosAgenciasCitas;
