
import React from 'react';
import { X, Youtube, Instagram } from 'lucide-react';
import Logo from '@/components/Logo';
import SectionTitle from '@/components/SectionTitle';
import CallToAction from '@/components/CallToAction';
import SocialIcon from '@/components/SocialIcon';

// Imagen subida y disponible en '/public/lovable-uploads/999203b9-d60d-4f43-bc9b-953d0c3b65ef.png'
const HEADER_IMAGE = '/lovable-uploads/999203b9-d60d-4f43-bc9b-953d0c3b65ef.png';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="py-8 w-full flex flex-col items-center">
        <Logo />
      </header>
      
      <main className="w-full max-w-4xl mx-auto px-4 pb-16 flex flex-col items-center">
        {/* BJ X MKT Section */}
        <section className="w-full mb-16 text-center">
          <img
            src={HEADER_IMAGE}
            alt="BlowKETING Modelo"
            className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 object-cover rounded-full"
          />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 neon-text">
            BJ X MKT
          </h2>
          
          <p className="max-w-xl mx-auto mb-6 text-sm md:text-base">
            El arte del mejor marketing de Madrid combina el talento y la creatividad para 
            campañas virales. Nuestras modelos trabajan en colaboración 
            exclusiva y todas son +21.
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="h-px bg-blowketing-pink flex-grow max-w-[100px]"></div>
            <span className="text-blowketing-pink font-bold px-2">MADRID</span>
            <div className="h-px bg-blowketing-pink flex-grow max-w-[100px]"></div>
          </div>
        </section>
        
        {/* ManyVids Section */}
        <section className="w-full mb-16 text-center">
          <SectionTitle>VIDEOS PREMIUM EN MANYVIDS</SectionTitle>
          <CallToAction link="https://www.manyvids.com" className="mb-6">
            EXPLORAR AHORA
          </CallToAction>
        </section>
        
        {/* Social Media Section */}
        <section className="w-full mb-16 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="h-px bg-white flex-grow max-w-[80px]"></div>
            <span className="text-white font-bold px-4">TAMBIÉN EN</span>
            <div className="h-px bg-white flex-grow max-w-[80px]"></div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <SocialIcon 
              icon="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" 
              link="https://www.reddit.com" 
              alt="Reddit"
            />
            <SocialIcon 
              icon="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
              link="https://www.onlyfans.com" 
              alt="OnlyFans"
            />
          </div>
        </section>
        
        {/* All Models Section */}
        <section className="w-full mb-16 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-6 neon-purple uppercase tracking-widest">
            TODAS LAS MODELOS AQUÍ
          </h2>
          <CallToAction link="#" className="mb-6">
            VER MODELOS
          </CallToAction>
        </section>
        
        {/* Follow on X Section */}
        <section className="w-full mb-16 text-center">
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2">SÍGUENOS EN</p>
            <X size={32} className="inline-block text-white" />
          </div>
          
          <div className="w-full max-w-md mx-auto mb-6 border border-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                <div className="ml-2">
                  <p className="font-semibold">BlowKETING Madrid</p>
                </div>
              </div>
              <X size={18} className="text-gray-400" />
            </div>
            <div className="mb-2 text-sm">
              Últimas noticias y actualizaciones de BlowKETING Madrid #marketing #contenido #madrid
            </div>
          </div>
        </section>
        
        {/* JOI X MKT Section */}
        <section className="w-full mb-16 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-2 text-white">
            ¿JOI X MKT?
          </h2>
          <CallToAction link="#" className="mt-4">
            DESCUBRIR
          </CallToAction>
        </section>
        
        {/* Model of the Year */}
        <section className="w-full mb-16 text-center">
          <SectionTitle>MODELO DEL AÑO</SectionTitle>
          <div className="mb-4">
            <span className="text-blowketing-pink text-5xl">🏆</span>
          </div>
          <p className="text-sm md:text-base max-w-md mx-auto">
            Cada año elegimos a la modelo que más ha destacado en nuestra agencia.
            Las votaciones están abiertas durante diciembre.
          </p>
        </section>
        
        {/* Live on Kick */}
        <section className="w-full mb-16 text-center">
          <div className="mb-6">
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
            <p className="text-lg font-semibold mb-2">EN VIVO EN</p>
            <h3 className="text-3xl text-blowketing-green font-extrabold">KICK</h3>
          </div>
        </section>
        
        {/* Merch Section */}
        <section className="w-full mb-16 text-center">
          <SectionTitle>MERCHANDISING</SectionTitle>
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
          <CallToAction link="#" className="mb-6">
            COMPRAR
          </CallToAction>
        </section>
        
        {/* YouTube Channel */}
        <section className="w-full mb-16 text-center">
          <SectionTitle>CANAL DE YOUTUBE</SectionTitle>
          <div className="w-full max-w-xl mx-auto bg-gray-900 rounded-lg overflow-hidden mb-6 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?list=PLAFz5ZZJ21wN5FUaLW7kQy6YxEqmzs3am"
              title="Canal de YouTube de BlowKETING"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center">
            <CallToAction link="https://www.youtube.com" className="bg-red-600 hover:bg-white hover:text-red-600 flex items-center">
              <Youtube className="mr-2" size={20} /> SUSCRIBIR
            </CallToAction>
          </div>
        </section>
        
        {/* Casting Section */}
        <section className="w-full mb-16 text-center">
          <SectionTitle>CASTING</SectionTitle>
          <h3 className="text-lg md:text-xl mb-6 text-white">
            ¿ERES CREADOR/A DE CONTENIDO?
          </h3>
          <CallToAction link="#" className="mb-6">
            CONTACTAR
          </CallToAction>
        </section>
        
        {/* Live Stream Section */}
        <section className="w-full mb-16 text-center">
          <p className="text-sm md:text-base mb-2">A VECES ESTAMOS EN VIVO EN</p>
          <a 
            href="https://stripchat.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            stripchat.com
          </a>
        </section>
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">
            <X size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>
        <p>BlowKETING Madrid © 2025. Todos los derechos reservados.</p>
        <p className="mt-2">Solo para mayores de 18 años.</p>
      </footer>
    </div>
  );
};

export default Index;
