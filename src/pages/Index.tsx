import React, { useState } from 'react';
import { Mail, Heart, Globe, Gift, Plane, Lock } from 'lucide-react';
import Logo from '@/components/Logo';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    contact: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      const response = await fetch('https://formspree.io/f/xnnzykpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          description: formData.description,
          contact: formData.contact,
          _subject: 'Nuevo mensaje de contacto',
          _format: 'plain',
          _language: 'es',
        }),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.');
        setFormData({
          name: '',
          age: '',
          description: '',
          contact: '',
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/luxury-background.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            <span className="text-gold-400">Sugar Daddy Madrid</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Generosidad, Experiencias y Compañía Exclusiva
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Para mujeres jóvenes que buscan un hombre maduro (36 años), exitoso y generoso que valore tu compañía y esté dispuesto a ofrecerte un estilo de vida de lujo junto a alguien dominante y experimentado.
          </p>
          <a 
            href="#contacto" 
            className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
          >
            <Mail className="mr-2" size={20} /> Contáctame
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-gold-500 w-64 h-64 mx-auto">
              <img 
                src="/lovable-uploads/msd681f9ad7b6f843.87503140.jpg" 
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Tu Sugar Daddy en Madrid</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy un caballero maduro (36 años), exitoso y generoso que busca relacionarse con una joven encantadora. 
              Con una carrera exitosa y una vida estable, estoy en la posición de ofrecerte un estilo de vida excepcional a cambio de tu compañía y afecto.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Disfruto de viajes de lujo, cenas en restaurantes exclusivos y eventos de alta sociedad. Soy alguien experimentado, dominante y con mucha experiencia. 
              Busco una chica especial con quien compartir estas experiencias a cambio de su tiempo y compañía.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Plane className="mr-2" size={16} /> Viajes Exclusivos
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Gift className="mr-2" size={16} /> Estilo de Vida de Lujo
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Lock className="mr-2" size={16} /> Discreción Garantizada
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <span className="mr-2">👑</span> Dominante
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo Que Ofrezco</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una relación donde disfrutarás de experiencias de lujo junto a un hombre exitoso, experimentado y dominante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane size={40} className="text-gold-500 mb-4" />,
                title: 'Estilo de Vida Premium',
                description: 'Viajes de lujo, cenas en restaurantes con estrellas Michelin y acceso a eventos exclusivos de alto nivel.'
              },
              {
                icon: <Gift size={40} className="text-gold-500 mb-4" />,
                title: 'Relación Dominante',
                description: 'Una relación donde disfrutas de ser dominante y de ser completamente sometida y controlada por un hombre con más de 14 años de experiencia en este aspecto.'
              },
              {
                icon: <Heart size={40} className="text-gold-500 mb-4" />,
                title: 'Compañía Exclusiva',
                description: 'Encuentros discretos donde serás la única prioridad, con atención y detalles personalizados.'
              },
              {
                icon: <Globe size={40} className="text-gold-500 mb-4" />,
                title: 'Conexiones Exclusivas',
                description: 'Acceso a una red de contactos influyentes que pueden abrirte puertas en el mundo profesional.'
              },
              {
                icon: <Lock size={40} className="text-gold-500 mb-4" />,
                title: 'Discreción Total',
                description: 'Confidencialidad garantizada en todo momento, con respeto absoluto por tu privacidad.'
              },
              {
                icon: <Mail size={40} className="text-gold-500 mb-4" />,
                title: 'Términos Claros',
                description: 'Acuerdos mutuos claros desde el inicio, con límites y expectativas bien definidos.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mi Filosofía</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">El Lujo y el Deseo de Pertenencia</h3>
              <p className="text-gray-300 leading-relaxed">
                Bienvenida a un mundo donde el lujo y el deseo se entrelazan. Como tu sugar daddy en Madrid, no solo te ofrezco un estilo de vida de lujo con viajes exclusivos y alta cocina, sino que también te invito a explorar una conexión más profunda y significativa.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si eres una chica joven de Madrid que busca ser mimada y consentida, y a la vez anhelas el control y la seguridad de ser la posesión y pertenencia más preciada de alguien y disfrutar de ser sometida y controlada, has llegado al lugar correcto.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Aquí, es solo el inicio donde la confianza y la devoción lo son todo.
              </p>
              <p className="text-gold-400 font-semibold mt-4">
                Háblame.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">La Conexión Mental y la Sumisión Deseada</h3>
              <p className="text-gray-300 leading-relaxed">
                En mi mundo, una relación sugar daddy es más que un simple acuerdo; es una unión de mentes y deseos. Busco una sugar baby en Madrid que entienda la belleza de la sumisión y el poder de la dominación.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si deseas ser mi posesión, mi pertenencia más preciada, que jamás será abandonada, te ofrezco la protección y seguridad que anhelas.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Disfrutaremos de una relación discreta donde la confianza y la comunicación es absoluta.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Aquí, el control y la intimidad mental son tan importantes como el lujo y la exclusividad.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Soy un hombre exitoso, maduro y seguro de lo que quiero, y te ofrezco ser tu mentor, tu caballero, y también tu Dueño.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">Una Relación Única y Absoluta</h3>
              <p className="text-gray-300 leading-relaxed">
                Si eres una chica joven y te atreves a soñar, esta es una invitación a ir más allá de lo superficial. Aquí, tu búsqueda de un sugar daddy en Madrid culmina en una relación en la que te sentirás única y especial.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si te atrae la idea de la posesión y la entrega total, y si deseas que alguien tome las riendas y te guíe, te ofrezco un mundo donde tus ambiciones y metas se cumplen mientras te sientes completamente a salvo.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Esta relación es una experiencia donde la sumisión voluntaria es el camino hacia la libertad y el placer más profundos.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Ven y descubre el beneficio de ser una sugar baby que se siente completa y absolutamente tuya.
              </p>
              <p className="text-gold-400 font-semibold mt-4">
                Atrévete a dar el paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contáctame</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-4"></div>
            <p className="text-gray-300">
              Si buscas una relación de respeto mutuo, generosidad y experiencias inolvidables, 
              estaré encantado de conocerte.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Tu Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">Tu Edad</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tu edad"
                  min="18"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Cuéntame sobre ti</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="¿Qué te hace única? ¿Qué buscas en esta relación?"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-1">Cómo contactarte</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Teléfono, email o usuario de Instagram"
                required
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} /> Enviar Mensaje
              </button>
            </div>
            
            {status && (
              <div className={`p-4 rounded-lg text-center ${status.includes('éxito') ? 'bg-green-900/30 text-green-300' : status.includes('error') ? 'bg-red-900/30 text-red-300' : 'bg-blue-900/30 text-blue-300'}`}>
                {status}
              </div>
            )}
            <p className="text-xs text-gray-500 text-center mt-4">
              Tu privacidad es importante. Toda la información compartida será tratada con la máxima confidencialidad.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-4">
            <Logo />
          </div>
          <p>© {new Date().getFullYear()} Conexión Madrid. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gold-400 transition">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
