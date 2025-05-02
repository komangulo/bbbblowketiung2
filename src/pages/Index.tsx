
import React from 'react';
import { X, Youtube } from 'lucide-react';
import Logo from '@/components/Logo';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import SocialIcon from '@/components/SocialIcon';

// Imagen subida y disponible en 'public/lovable-uploads/e11caf1a-2a18-4996-9c16-32314831ce8a.png'
const HEADER_IMAGE = '/lovable-uploads/e11caf1a-2a18-4996-9c16-32314831ce8a.png';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center max-w-lg mx-auto">
      <header className="w-full flex flex-col items-center pt-6 pb-2">
        <Logo />
      </header>
      
      <main className="w-full px-4 pb-8 flex flex-col items-center">
        {/* Header Image Section */}
        <section className="w-full mb-8 text-center">
          <img
            src={HEADER_IMAGE}
            alt="BlowKETING Anime Girl"
            className="w-40 h-40 mx-auto object-contain"
          />
        </section>
        
        {/* BJ X MKT Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">
            BJ X MKT
          </h2>
          
          <p className="max-w-md mx-auto mb-6 text-sm text-gray-300">
            El arte del mejor marketing de Madrid combina el talento y la creatividad para 
            campañas virales. Nuestras modelos trabajan en colaboración 
            exclusiva y todas son +21.
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
          <p className="text-sm mb-1 text-gray-400">Find the OF and check videos here</p>
          <div className="flex justify-center mb-8">
            <img 
              src="https://placehold.co/400x150/000/fff?text=MODELOS" 
              alt="Modelos" 
              className="w-full max-w-sm"
            />
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
        
        {/* JOI X MKT Section */}
        <section className="w-full mb-10 text-center dark-border-box p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">
              ¿JOI X MKT?
            </h2>
            <div className="flex space-x-2 mb-4">
              <img 
                src="https://placehold.co/60x60/000/fff?text=iOS" 
                alt="iOS App" 
                className="w-10 h-10"
              />
              <img 
                src="https://placehold.co/60x60/000/fff?text=Android" 
                alt="Android App" 
                className="w-10 h-10"
              />
              <img 
                src="https://placehold.co/60x60/000/fff?text=Web" 
                alt="Web App" 
                className="w-10 h-10"
              />
            </div>
            <div className="relative w-full">
              <img 
                src="https://placehold.co/200x200/000/fff?text=AnimeGirl" 
                alt="Anime Girl" 
                className="w-32 h-32 object-cover mx-auto"
              />
              <div className="bg-white text-black p-2 rounded-lg inline-block absolute right-4 top-4 max-w-[120px] text-xs anime-girl-bubble">
                ¡Descubre más!
              </div>
            </div>
          </div>
        </section>
        
        {/* Model of the Year */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-xl font-bold uppercase mb-4">MODEL OF THE YEAR</h2>
          <div className="mb-4">
            <img 
              src="https://placehold.co/150x150/000/fff?text=Model" 
              alt="Model of the Year" 
              className="w-32 h-32 rounded-full mx-auto border-2 border-blowketing-pink"
            />
            <p className="font-bold mt-2">CANDIDATO</p>
          </div>
          <CallToAction link="#" className="mb-6 button-glow">
            VOTAR
          </CallToAction>
          <p className="text-xs text-gray-400 max-w-xs mx-auto">
            Cada año elegimos a la modelo que más ha destacado en nuestra agencia.
            Las votaciones están abiertas durante diciembre.
          </p>
        </section>
        
        {/* BEFANZ Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-2xl font-bold text-blowketing-pink mb-4">BEFANZ.COM</h2>
          <p className="text-xs text-gray-400 max-w-xs mx-auto mb-6">
            Encuentra todo el contenido exclusivo solo para fans y suscriptores.
            Somos la agencia número uno en Madrid para creadores de contenido.
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
              <img 
                src="https://placehold.co/300x400/1a1a1a/fff" 
                alt="Live model 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] aspect-[3/4] bg-gray-800 rounded overflow-hidden">
              <img 
                src="https://placehold.co/300x400/1a1a1a/fff" 
                alt="Live model 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[30%] aspect-[3/4] bg-gray-800 rounded overflow-hidden">
              <img 
                src="https://placehold.co/300x400/1a1a1a/fff" 
                alt="Live model 3" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-lg font-semibold mb-2">LIVE ON</p>
          <h3 className="text-3xl neon-green font-extrabold mb-8">KICK</h3>
        </section>
        
        {/* Merch Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-xl font-bold uppercase mb-4">MERCH</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="w-[45%] md:w-[30%] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="https://placehold.co/300x300/1a1a1a/fff" 
                alt="Merch item 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[45%] md:w-[30%] aspect-square bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src="https://placehold.co/300x300/1a1a1a/fff" 
                alt="Merch item 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <CallToAction link="#" className="mb-8">
            COMPRAR
          </CallToAction>
        </section>
        
        {/* YouTube Channel */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-xl font-bold uppercase mb-4">YOUTUBE CHANNEL</h2>
          <div className="w-full max-w-xl mx-auto bg-gray-900 rounded-lg overflow-hidden mb-6 aspect-video">
            <img
              src="https://placehold.co/600x400/1a1a1a/fff?text=YouTube+Video"
              alt="Canal de YouTube de BlowKETING"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center">
            <CallToAction link="https://www.youtube.com" className="bg-red-600 hover:bg-white hover:text-red-600 flex items-center">
              <Youtube className="mr-2" size={20} /> SUSCRIBIR
            </CallToAction>
          </div>
        </section>
        
        {/* Casting Section */}
        <section className="w-full mb-10 text-center">
          <h2 className="text-xl font-bold uppercase mb-2">CASTING</h2>
          <h3 className="text-lg mb-4 text-gray-300">
            ¿ERES CREADOR/A DE CONTENIDO?
          </h3>
          <CallToAction link="#" className="mb-8">
            CONTACTAR
          </CallToAction>
        </section>
        
        {/* Live Stream Section */}
        <section className="w-full mb-10 text-center">
          <p className="text-sm mb-2 text-gray-400">My TTS system is now back</p>
          <p className="text-xs mb-8 text-gray-500">
            It only supports En/Es/Fr right now, more coming soon!
          </p>
          <CallToAction link="#" className="mb-8">
            CHECK TTS DEMO
          </CallToAction>
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
        <p>BlowKETING Madrid © 2025</p>
        <p className="mt-1">Solo para mayores de 18 años.</p>
      </footer>
    </div>
  );
};

export default Index;
