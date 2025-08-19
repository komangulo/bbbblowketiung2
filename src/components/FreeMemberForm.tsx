import { useState } from "react";
import { Button } from "./ui/button";
import { X, ArrowRight } from "lucide-react";

interface FreeMemberFormProps {
  onClose: () => void;
}

const FreeMemberForm = ({ onClose }: FreeMemberFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Step 1
    nombre: "",
    apellidos: "",
    sexo: "",
    busca: "",
    fechaNacimiento: "",
    estadoCivil: "",
    nacionalidad: "",
    ciudad: "",
    provincia: "",
    email: "",
    telefono: "",
    horario: "",
    estudios: "",
    profesion: "",
    // Step 2
    sobreTi: "",
    intereses: "",
    // Step 3
    buscaEnPareja: "",
    queNoAceptas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xldlyegv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Tipo de formulario': 'Miembro Gratuito',
          'Nombre': formData.nombre,
          'Apellidos': formData.apellidos,
          'Sexo': formData.sexo,
          'Qué busco': formData.busca,
          'Fecha de Nacimiento': formData.fechaNacimiento,
          'Estado Civil': formData.estadoCivil,
          'Nacionalidad': formData.nacionalidad,
          'Ciudad': formData.ciudad,
          'Provincia': formData.provincia,
          'Email': formData.email,
          'Teléfono': formData.telefono,
          'Horario de contacto': formData.horario,
          'Nivel de Estudios': formData.estudios,
          'Profesión': formData.profesion,
          'Sobre ti': formData.sobreTi,
          'Intereses': formData.intereses,
          'Qué busca en pareja': formData.buscaEnPareja,
          'Qué no aceptas': formData.queNoAceptas
        }),
      });

      if (response.ok) {
        alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
        onClose();
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="apellidos" className="block text-sm font-medium text-foreground mb-1">
            Apellidos <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="sexo" className="block text-sm font-medium text-foreground mb-1">
            Sexo <span className="text-red-500">*</span>
          </label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Selecciona tu sexo</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="busca" className="block text-sm font-medium text-foreground mb-1">
            ¿Qué busco? <span className="text-red-500">*</span>
          </label>
          <select
            id="busca"
            name="busca"
            value={formData.busca}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Selecciona lo que buscas</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            <option value="ambos">Ambos</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-foreground mb-1">
            Fecha de Nacimiento <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="estadoCivil" className="block text-sm font-medium text-foreground mb-1">
            Estado Civil <span className="text-red-500">*</span>
          </label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Selecciona tu estado civil</option>
            <option value="soltero">Solter@</option>
            <option value="divorciado">Divorciad@</option>
            <option value="viudo">Viud@</option>
            <option value="separado">Separad@</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="nacionalidad" className="block text-sm font-medium text-foreground mb-1">
            Nacionalidad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="ciudad" className="block text-sm font-medium text-foreground mb-1">
            Ciudad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="provincia" className="block text-sm font-medium text-foreground mb-1">
            Provincia <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={formData.provincia}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="horario" className="block text-sm font-medium text-foreground mb-1">
            Horario de contacto <span className="text-red-500">*</span>
          </label>
          <select
            id="horario"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Selecciona un horario</option>
            <option value="09:00 - 15:00">09:00 - 15:00</option>
            <option value="15:00 - 20:00">15:00 - 20:00</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="estudios" className="block text-sm font-medium text-foreground mb-1">
            Nivel de Estudios <span className="text-red-500">*</span>
          </label>
          <select
            id="estudios"
            name="estudios"
            value={formData.estudios}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          >
            <option value="">Selecciona tu nivel de estudios</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="bachillerato">Bachillerato</option>
            <option value="grado">Grado Universitario</option>
            <option value="master">Máster/Doctorado</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="profesion" className="block text-sm font-medium text-foreground mb-1">
            Profesión <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="profesion"
            name="profesion"
            value={formData.profesion}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="sobreTi" className="block text-sm font-medium text-foreground mb-2">
          Cuéntanos más sobre ti <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-muted-foreground mb-3">
          Háblanos de tus aficiones, intereses y estilo de vida.
        </p>
        <textarea
          id="sobreTi"
          name="sobreTi"
          value={formData.sobreTi}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="intereses" className="block text-sm font-medium text-foreground mb-2">
          ¿Cuáles son tus principales intereses? <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-muted-foreground mb-3">
          Ej: Viajar, deportes, lectura, cine, gastronomía, etc.
        </p>
        <input
          type="text"
          id="intereses"
          name="intereses"
          value={formData.intereses}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="buscaEnPareja" className="block text-sm font-medium text-foreground mb-2">
          ¿Qué buscas en una pareja? <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-muted-foreground mb-3">
          Describe las cualidades que valoras en una relación.
        </p>
        <textarea
          id="buscaEnPareja"
          name="buscaEnPareja"
          value={formData.buscaEnPareja}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="queNoAceptas" className="block text-sm font-medium text-foreground mb-2">
          ¿Qué no estás dispuesto/a a aceptar en una relación? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="queNoAceptas"
          name="queNoAceptas"
          value={formData.queNoAceptas}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>
      
      <div className="flex items-start pt-4">
        <div className="flex items-center h-5">
          <input
            id="privacidad"
            name="privacidad"
            type="checkbox"
            required
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="privacidad" className="font-medium text-foreground">
            He leído y acepto la <a href="/politica-privacidad" className="text-amber-600 hover:underline">Política de Privacidad</a> <span className="text-red-500">*</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Hazte miembro de Forma Gratuita
              </h2>
              <p className="text-amber-700 font-medium">
                PARA CONOCER A NUESTROS MIEMBROS PRIVADOS
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Cerrar formulario"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <p className="mb-6 text-muted-foreground">
            Convertirse en nuestro MIEMBRO GRATUITO no garantiza la búsqueda de la persona deseada, pero si le damos la oportunidad de permanecer en nuestra base de datos.
          </p>
          <p className="mb-6 text-muted-foreground">
            Si es compatible con alguno de nuestros exclusivos clientes, nos pondremos inmediatamente en contacto con usted para iniciar el proceso y concertar una primera entrevista.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Rellena el Formulario para Conocerte un Poco Mejor
            </h3>
            
            {/* Progress Steps */}
            <div className="flex justify-between mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      currentStep >= step ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-xs mt-2 text-center">
                    {step === 1 ? '¡Comencemos!' : step === 2 ? 'Cuéntanos más sobre ti' : 'Tu pareja ideal?'}
                  </span>
                </div>
              ))}
            </div>
            
            <form onSubmit={currentStep === 3 ? handleSubmit : nextStep}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              
              <div className="flex justify-between pt-6">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-gray-300 text-foreground"
                    >
                      Anterior
                    </Button>
                  )}
                </div>
                
                <div>
                  {currentStep < 3 ? (
                    <Button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                    >
                      Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                    >
                      Enviar solicitud
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeMemberForm;
