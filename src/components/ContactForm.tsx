import { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    horario: "",
    fechaNacimiento: "",
    genero: "",
    busca: "",
    estadoCivil: "",
    nacionalidad: "",
    ciudad: "",
    provincia: "",
    estudios: "",
    profesion: "",
    sobreTi: "",
    antecedentes: false,
    privacidad: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xldlyegv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Tipo de formulario': 'Miembro Privado',
          'Nombre': formData.nombre,
          'Apellidos': formData.apellidos,
          'Email': formData.email,
          'Teléfono': formData.telefono,
          'Horario de contacto': formData.horario,
          'Fecha de Nacimiento': formData.fechaNacimiento,
          'Género': formData.genero,
          'Qué busco': formData.busca,
          'Estado Civil': formData.estadoCivil,
          'Nacionalidad': formData.nacionalidad,
          'Ciudad': formData.ciudad,
          'Provincia': formData.provincia,
          'Nivel de Estudios': formData.estudios,
          'Profesión': formData.profesion,
          'Sobre ti': formData.sobreTi,
          'Acepta condiciones': formData.antecedentes ? 'Sí' : 'No',
          'Acepta política de privacidad': formData.privacidad ? 'Sí' : 'No'
        }),
      });

      if (response.ok) {
        alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');
        onClose();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Formulario de Contacto
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Cerrar formulario"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <p className="mb-6 text-muted-foreground">
            Nuestro objetivo es presentarte a esa persona genuina, atractiva e interesante que al igual que tú desee encontrar el amor y la estabilidad en su vida.
          </p>
          
          <p className="font-medium mb-6">
            Rellena el Formulario para Conocerte un Poco Mejor
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4" action="https://formspree.io/f/xldlyegv" method="POST">
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
                <label htmlFor="genero" className="block text-sm font-medium text-foreground mb-1">
                  Género <span className="text-red-500">*</span>
                </label>
                <select
                  id="genero"
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                >
                  <option value="">Selecciona tu género</option>
                  <option value="mujer">Mujer</option>
                  <option value="hombre">Hombre</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="busca" className="block text-sm font-medium text-foreground mb-1">
                  Qué busco <span className="text-red-500">*</span>
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
            
            <div>
              <label htmlFor="sobreTi" className="block text-sm font-medium text-foreground mb-1">
                Háblanos de ti y de tus deseos
              </label>
              <p className="text-sm text-muted-foreground mb-2">
                Cuánto más nos cuentes, más información tendremos para poder ayudarte.
              </p>
              <textarea
                id="sobreTi"
                name="sobreTi"
                value={formData.sobreTi}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="antecedentes"
                    name="antecedentes"
                    type="checkbox"
                    checked={formData.antecedentes}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="antecedentes" className="font-medium text-foreground">
                    IMPORTANTE
                  </label>
                  <p className="text-muted-foreground">
                    Declaro y confirmo que no tengo antecedentes penales en España o cualquier otro país del mundo.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacidad"
                    name="privacidad"
                    type="checkbox"
                    checked={formData.privacidad}
                    onChange={handleChange}
                    className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacidad" className="font-medium text-foreground">
                    He leído y acepto la <a href="/politica-privacidad" className="text-amber-600 hover:underline">Política de Privacidad</a>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 py-6 text-lg"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
