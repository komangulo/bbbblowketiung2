import React, { useState } from 'react';
import { X, Youtube, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Logo from '@/components/Logo';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import SocialIcon from '@/components/SocialIcon';

// Imagen subida y disponible en 'public/lovable-uploads/e11caf1a-2a18-4996-9c16-32314831ce8a.png'
const HEADER_IMAGE = '/lovable-uploads/e11caf1a-2a18-4996-9c16-32314831ce8a.png';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center max-w-6xl w-full mx-auto px-2">
      <header className="w-full flex flex-col items-center pt-6 pb-2">
        <Logo />
        {/* Imagen decorativa extra-top-image3.png ELIMINADA DEL HEADER */}
      </header>
      
      <main className="w-full px-0 pb-8 flex flex-col items-center">
        {/* Header Image Section */}
        <section className="w-full mb-6 text-center">
          <img
            src="/lovable-uploads/blowketing-anime-girl.png"
            alt="BlowKETING Anime Girl"
            className="mx-auto w-full max-w-md object-contain"
          />
        </section>
        
        {/* BJ X MKT Section */}
        <section className="w-full mb-10 text-center">
          <h2
            className="mb-4 text-5xl"
            style={{
              fontFamily: 'Oswald, Montserrat, Poppins, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '4rem',
              textTransform: 'uppercase',
              color: '#fff',
              textShadow: '0 0 16px #fff, 0 0 32px #fff, 0 0 48px #fff',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
              marginTop: '0.5rem',
              lineHeight: 1.1
            }}
          >
            BJ X MKT
          </h2>
          
          <p className="max-w-2xl mx-auto mb-6 text-gray-300" style={{ fontSize: '26.67px', lineHeight: '37px' }}>
            Filmamos a las modelos en su mejor momento en Madrid, capturando deliciosos Blo***b con caritas adorables y expresiones cautivadoras que llaman la atención. Este contenido se convierte en una poderosa herramienta para promocionar su presencia en plataformas de contenido, ya que en Blowketing no mostramos sus partes íntimas; para obtener contenido sin censura tienes que entrar exclusivamente en la plataforma de la modelo y/o hablar directamente con ella por chat.
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="h-px bg-blowketing-pink flex-grow max-w-[100px]"></div>
            <span className="text-blowketing-pink font-bold px-2">MADRID</span>
            <div className="h-px bg-blowketing-pink flex-grow max-w-[100px]"></div>
          </div>
        </section>
        
        {/* ManyVids Section */}
        <section className="w-full mb-10 text-center">
          <div className="mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="inline-block">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2 8c0-1.105.896-2 2-2s2 .895 2 2c0 1.105-.896 2-2 2s-2-.895-2-2zm-3.5 6c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5zm7 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5zm3.5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5z"/>
            </svg>
            <h2 className="text-2xl font-bold uppercase mt-2 mb-1">MANYVIDS</h2>
            <p className="text-sm text-gray-400 mb-4">PREMIUM VIDEOS</p>
          </div>
          <CallToAction link="https://www.manyvids.com" className="mb-8">
            EXPLORAR AHORA
          </CallToAction>
          {/* Imagen decorativa extra-top-image.png justo debajo del botón */}
          <div className="relative my-6 w-[33.6rem] md:w-[67.2rem] mx-auto">
            <img
              src="/lovable-uploads/extra-top-image.png"
              alt="Decoración rayo"
              className="w-full"
            />
            {/* Rayo.gif centrado absolutamente */}
            <img
              src="/lovable-uploads/rayo.gif"
              alt="Rayo animado"
              className="absolute left-1/2 top-1/2"
              style={{ transform: 'translate(-50%, -50%) rotate(-90deg)', zIndex: 10, width: '20%', height: 'auto', pointerEvents: 'none' }}
            />
          </div>
        </section>
        
        {/* Social Media Section */}
        <section className="w-full mb-10 text-center">
          <div className="flex justify-center items-center mb-2">
            <div className="h-px bg-white flex-grow max-w-[80px]"></div>
            <span className="text-white px-4 text-xs">TAMBIÉN EN</span>
            <div className="h-px bg-white flex-grow max-w-[80px]"></div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <SocialIcon 
              icon="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" 
              link="https://t.me/" 
              alt="Telegram"
              bgColor="bg-blue-500"
            />
            <SocialIcon 
              icon="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" 
              link="https://www.reddit.com" 
              alt="Reddit"
              bgColor="bg-orange-600"
            />
          </div>
        </section>
        
        {/* All Models Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-3xl font-bold uppercase mt-2 mb-4">Encuentra aquí las modelos TOP y más activas</h2>
          <div className="flex justify-center my-6">
            <a href="/modelos" className="transition-transform hover:scale-105 hover:shadow-lg">
              <img
                src="/lovable-uploads/modelos-boton.png"
                alt="Ver más modelos"
                className="w-[72rem] h-auto rounded-lg cursor-pointer"
              />
            </a>
          </div>
        </section>
        
        {/* Follow on X Section */}
        <section className="w-full mb-10 text-center dark-border-box p-4">
          <div className="flex justify-center items-center flex-col">
            <img 
              src="https://placehold.co/100x100/000/fff?text=X"
              alt="X profile"
              className="w-20 h-20 mb-2 rounded-lg"
            />
            <p className="font-semibold mb-1">FOLLOW US ON</p>
            <X size={20} className="text-white mb-2" />
          </div>
        </section>
        
        {/* Anime Girl Section */}
        <section className="w-full mb-10 flex justify-center">
          <div className="relative flex items-center justify-center" style={{ width: '56rem', height: '56rem' }}>
            <img
              src="/lovable-uploads/anime-girl.png"
              alt="Anime Girl"
              className="w-full h-full object-contain"
              style={{ maxWidth: '56rem', maxHeight: '56rem' }}
            />
            <img
              src="/lovable-uploads/onlyfans-mobile.png"
              alt=""
              className="absolute top-1/2 left-1/2 w-40 h-auto pointer-events-none"
              style={{ transform: 'translate(-50%, -50%)', zIndex: 10 }}
              draggable={false}
            />
          </div>
        </section>
        
        {/* Model of the Year */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-3xl font-extrabold uppercase mb-6">MODEL OF THE YEAR</h2>
          <div className="mb-6 flex justify-center items-center">
            <div className="relative" style={{ width: 260, height: 260 }}>
              <img
                src="/lovable-uploads/insta-circle.png"
                alt="Marco Instagram"
                className="w-full h-full absolute top-0 left-0"
                style={{ zIndex: 1 }}
                draggable={false}
              />
              <img
                src="/lovable-uploads/model-of-year.png"
                alt="Model of the Year"
                className="w-[200px] h-[200px] rounded-full object-cover absolute top-1/2 left-1/2"
                style={{ transform: 'translate(-50%, -50%)', zIndex: 2, border: '6px solid white' }}
                draggable={false}
              />
            </div>
          </div>
          <p className="font-extrabold mt-2 text-2xl tracking-wide">LAUUMIAU</p>
          <CallToAction link="#" className="mb-8 button-glow text-xl py-4 px-10">
            SEGUIR
          </CallToAction>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8" style={{ fontSize: '26.67px', lineHeight: '37px' }}>
            Suscríbete al BeFanz de nuestras modelos y accede a todo el contenido ilimitado que tienen para ofrecerte. Además, disfruta de la posibilidad de interactuar con ellas de forma privada para aún más sorpresas y contenido exclusivo.
          </p>
        </section>
        
        {/* BEFANZ Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-2xl font-extrabold text-blowketing-pink mb-4">BEFANZ.COM</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-6" style={{ fontSize: '26.67px', lineHeight: '37px' }}>
            Encuentra todo el contenido exclusivo solo para fans y suscriptores. Somos la agencia número uno en Madrid para creadores de contenido.
          </p>
          <CallToAction link="#" className="mb-8">
            VISITAR AHORA
          </CallToAction>
        </section>
        
        {/* Live on Kick */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-xl mb-4">BLOWKETING.COM</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <div className="w-[30%] aspect-[3/4] bg-gray-800 rounded overflow-hidden">
              <video 
                src="/lovable-uploads/cf3263aad9bb5f88cb27b52b0696bc61.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                onLoadedData={(e) => e.currentTarget.play().catch(e => console.log('Autoplay prevented:', e))}
              />
            </div>
            <div className="w-[30%] aspect-[3/4] bg-gray-800 rounded overflow-hidden">
              <video 
                src="/lovable-uploads/e18c1acc49c35be1a8625404043a6c30.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                onLoadedData={(e) => e.currentTarget.play().catch(e => console.log('Autoplay prevented:', e))}
              />
            </div>
            <div className="w-[30%] aspect-[3/4] bg-gray-800 rounded overflow-hidden">
              <video 
                src="/lovable-uploads/e20a6f8e51fec73cc80b0f9db4f47ccb.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                onLoadedData={(e) => e.currentTarget.play().catch(e => console.log('Autoplay prevented:', e))}
              />
            </div>
          </div>
          <p className="text-lg font-semibold mb-2">LIVE ON</p>
          <h3 className="text-3xl neon-green font-extrabold mb-8">KICK</h3>
        </section>
        
        {/* Casting Section */}
        <section className="w-full mb-10 text-center max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold uppercase mb-2" style={{ fontSize: '26.67px', lineHeight: '37px' }}>CASTING</h2>
          <h3 className="text-lg mb-6 text-gray-300" style={{ fontSize: '26.67px', lineHeight: '37px' }}>
            ¿ERES CREADORA DE CONTENIDO? CONTACTANOS
          </h3>
          
          <ContactForm />
        </section>
        
        {/* Stripchat Section */}
        <section className="w-full mb-10 text-center">
          <p className="text-sm text-gray-400 mb-1">SOMETIMES WE ARE LIVE ON</p>
          <a 
            href="https://stripchat.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            stripchat.com
          </a>
        </section>
      </main>
      
      <footer className="w-full py-6 text-center text-xs text-gray-400 border-t border-gray-800">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-white transition-colors">
            <X size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={18} />
          </a>
        </div>
        <p>Blow4KETING Madrid © 2025</p>
        <p className="mt-1">Solo para mayores de 18 años.</p>
      </footer>
    </div>
  );
};

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xzzvlbrl');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (state.succeeded) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8">
        <p className="font-bold">¡Mensaje enviado!</p>
        <p>Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 text-left text-sm font-medium mb-1">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blowketing-pink"
          placeholder="Tu nombre"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-400 text-xs mt-1 block text-left"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-300 text-left text-sm font-medium mb-1">
          Redes Sociales / Contacto
        </label>
        <input
          id="contact"
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blowketing-pink"
          placeholder="Ej: @usuario, enlace, teléfono..."
        />
        <p className="text-xs text-gray-400 mt-1 text-left">Puedes incluir tu usuario, enlace o teléfono</p>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 text-left text-sm font-medium mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blowketing-pink"
          placeholder="Cuéntanos sobre ti y tu experiencia..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-400 text-xs mt-1 block text-left"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 bg-blowketing-pink hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200 disabled:opacity-70"
      >
        {state.submitting ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            ENVIAR MENSAJE
          </>
        )}
      </button>
      
      <p className="text-xs text-gray-400 mt-3">
        Al enviar este formulario aceptas nuestra política de privacidad.
      </p>
    </form>
  );
};

export default Index;
