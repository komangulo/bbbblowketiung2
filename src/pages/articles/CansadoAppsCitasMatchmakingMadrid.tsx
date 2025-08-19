import { useEffect } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CansadoAppsCitasMatchmakingMadrid = () => {
  useEffect(() => {
    document.title = "¿Cansado de Apps de Citas? Descubre el Matchmaking Profesional en Madrid | Agencia de Matchmaking";
  }, []);

  const publish = {
    author: "Equipo Agencia Matchmaking Madrid",
    date: "17 de Agosto, 2025",
    readTime: "7 min lectura",
  };

  return (
    <div className="min-h-screen pt-20">
      <article className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              ¿Cansado de <span className="text-amber-600">Apps de Citas</span>? Descubre el <span className="text-amber-700">Matchmaking Profesional</span> en Madrid
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Apps de citas, deslizamientos infinitos y conversaciones que no llegan a nada. Si buscas una pareja estable en Madrid, el matchmaking profesional es una alternativa real, confidencial y eficaz.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
              <span className="inline-flex items-center gap-1"><User className="h-4 w-4" /> {publish.author}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {publish.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {publish.readTime}</span>
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90">
            <p>
              En nuestra <strong>agencia de matchmaking en Madrid</strong> ayudamos a hombres y mujeres que se sienten frustrados con las <strong>apps de citas</strong>. Después de invertir tiempo y energía, muchos no encuentran compatibilidad real ni compromiso. Aquí es donde el <strong>matchmaking profesional</strong> marca la diferencia.
            </p>
          </section>

          {/* Problemas de las apps */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Por qué las apps de citas no funcionan para todos</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Falta de filtro y compatibilidad real:</strong> algoritmos basados en fotos o intereses superficiales.</li>
              <li><strong>Tiempo y fatiga digital:</strong> deslizamientos, chats vacíos y citas que no avanzan.</li>
              <li><strong>Privacidad limitada:</strong> tu perfil se expone sin control.</li>
              <li><strong>Intenciones poco claras:</strong> muchas personas buscan algo casual y no una relación estable.</li>
            </ul>
          </section>

          {/* Qué es el matchmaking */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">¿Qué es el matchmaking profesional en Madrid?</h2>
            <p className="text-foreground/90">
              El <strong>matchmaking profesional</strong> aplica la metodología del <em>headhunting</em> al ámbito sentimental. Un experto te conoce en profundidad, define tu perfil y realiza una <strong>búsqueda activa y confidencial</strong> en Madrid para presentarte a personas compatibles que comparten tus valores e intención de pareja estable.
            </p>
          </section>

          {/* Beneficios */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Beneficios frente a las apps de citas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Compatibilidad real</h3>
                <p>Selección humana basada en valores, estilo de vida y objetivos. Sin matches vacíos.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Privacidad y discreción</h3>
                <p>Tu información permanece confidencial. No hay perfiles públicos.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Ahorro de tiempo</h3>
                <p>Nosotros hacemos la búsqueda por ti. Solo conoces candidatos preseleccionados.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Con enfoque local (Madrid)</h3>
                <p>Agenda entrevistas con personas afines en Madrid, listas para una relación seria.</p>
              </div>
            </div>
          </section>

          {/* Cómo trabajamos */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Cómo trabajamos en nuestra agencia en Madrid</h2>
            <ol className="list-decimal pl-6 space-y-2 text-foreground/90">
              <li><strong>Sesión de valoración gratuita</strong> para entender tu historia y objetivos.</li>
              <li><strong>Definición de tu perfil</strong> y criterios de compatibilidad.</li>
              <li><strong>Búsqueda activa</strong> de candidatos en nuestra red privada.</li>
              <li><strong>Presentaciones personalizadas</strong> y feedback tras cada encuentro.</li>
              <li><strong>Coaching de relaciones</strong> para potenciar resultados cuando es necesario.</li>
            </ol>
          </section>

          {/* SEO block */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Agencia matrimonial y matchmaking en Madrid</h2>
            <p className="text-foreground/90">
              Si buscas una <strong>agencia matrimonial en Madrid</strong> o un servicio de <strong>matchmaking en Madrid</strong> que realmente funcione, nuestro equipo puede ayudarte a encontrar una relación estable y duradera con personas afines.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 border-t pt-8">
            <div className="bg-gradient-hero text-white rounded-xl p-8 text-center shadow-elegant">
              <h3 className="text-2xl font-bold mb-2">¿Listo para dejar las apps de citas?</h3>
              <p className="opacity-90 mb-6">Da el paso al <strong>matchmaking profesional en Madrid</strong>. Privado, efectivo y personalizado.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/matchmaking" className="inline-flex items-center px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium">
                  Conoce nuestro servicio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/" className="inline-flex items-center px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/30">
                  Consulta gratuita
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default CansadoAppsCitasMatchmakingMadrid;
