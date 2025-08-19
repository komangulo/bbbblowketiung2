import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import blogErrores from "@/assets/blog-errores-madrid.jpg";
import blogComunicacion from "@/assets/blog-comunicacion.jpg";
import blogCoaching from "@/assets/blog-coaching.jpg";
import blogDesarrollo from "@/assets/blog-desarrollo-personal.jpg";
import blogProfesionales from "@/assets/blog-profesionales.jpg";
import blogPsicologia from "@/assets/blog-psicologia.jpg";
import blogPrimeraCita from "@/assets/blog-primera-cita.jpg";

const Blog = () => {
  const featuredPost = {
    title: "5 errores comunes al buscar pareja en Madrid",
    excerpt: "Descubre los errores más frecuentes que cometen los solteros en Madrid y cómo evitarlos para encontrar una relación duradera.",
    author: "Elena Martínez",
    date: "15 de Diciembre, 2024",
    readTime: "8 min lectura",
    category: "Consejos",
    image: blogErrores,
    url: "/blog/5-errores-comunes-buscar-pareja-madrid"
  };

  const blogPosts = [
    {
      title: "5 Mitos sobre las Agencias de Citas en Madrid que Debes Dejar de Creer",
      excerpt: "Descubre la verdad detrás de los mitos más comunes sobre las agencias de citas en Madrid y por qué el matchmaking profesional es la elección inteligente.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "18 de Agosto, 2025",
      readTime: "8 min lectura",
      category: "Consejos",
      image: blogProfesionales,
      url: "/blog/5-mitos-agencias-citas-madrid"
    },
    {
      title: "Historias de Éxito: Parejas que Encontraron el Amor en Nuestra Agencia",
      excerpt: "Conoce las inspiradoras historias de profesionales que, como tú, buscaban una relación seria y significativa en Madrid.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "18 de Agosto, 2025",
      readTime: "7 min lectura",
      category: "Relaciones",
      image: blogComunicacion,
      url: "/blog/historias-exito-parejas-encontraron-amor"
    },
    {
      title: "Matchmaking de Lujo: La Opción Discreta para Profesionales Exigentes en Madrid",
      excerpt: "Descubre cómo nuestro servicio premium de matchmaking ofrece discreción, calidad y resultados excepcionales para profesionales exitosos.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "17 de Agosto, 2025",
      readTime: "8 min lectura",
      category: "Consejos",
      image: blogProfesionales,
      url: "/blog/matchmaking-lujo-madrid"
    },
    {
      title: "¿Qué es el Coaching de Relaciones y Cómo te Ayuda a Encontrar Pareja?",
      excerpt: "Aprende cómo el coaching de relaciones puede ayudarte a superar obstáculos y a estar preparado para una relación significativa.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "17 de Agosto, 2025",
      readTime: "7 min lectura",
      category: "Coaching",
      image: blogCoaching,
      url: "/blog/coaching-relaciones-encontrar-pareja"
    },
    {
      title: "Cómo Encontrar a tu Pareja Ideal: Consejos de una Agencia Matrimonial en Madrid",
      excerpt: "Estrategias probadas para encontrar una relación seria y duradera en la bulliciosa ciudad de Madrid.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "17 de Agosto, 2025",
      readTime: "8 min lectura",
      category: "Consejos",
      image: blogDesarrollo,
      url: "/blog/como-encontrar-pareja-ideal-madrid"
    },
    {
      title: "¿Cansado de Apps de Citas? Descubre el Matchmaking Profesional en Madrid",
      excerpt: "Si estás harto de deslizamientos sin sentido, descubre cómo el matchmaking profesional en Madrid ofrece una alternativa privada y efectiva.",
      author: "Equipo Agencia Matchmaking Madrid",
      date: "17 de Agosto, 2025",
      readTime: "7 min lectura",
      category: "Consejos",
      image: blogProfesionales,
      url: "/blog/cansado-apps-citas-matchmaking-madrid"
    },

  ];

  const categories = [
    { name: "Todos", count: 6 },
    { name: "Consejos", count: 4 },
    { name: "Relaciones", count: 1 },
    { name: "Coaching", count: 1 },
    { name: "Desarrollo Personal", count: 0 },
    { name: "Psicología", count: 0 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Estilo de <span className="text-primary">Vida</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Consejos, noticias y guías para construir relaciones exitosas y encontrar el amor verdadero en Madrid.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4">Artículo Destacado</Badge>
              <h2 className="text-2xl font-bold text-foreground">Lo más leído esta semana</h2>
            </div>
            
            <Card className="border-0 shadow-elegant overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Link to={featuredPost.url}>
                    <Button className="group">
                      Leer artículo completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Últimos artículos
              </h2>
              <p className="text-xl text-muted-foreground">
                Consejos expertos para mejorar tu vida amorosa y encontrar relaciones significativas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const cardContent = (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-shadow duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge variant="secondary" className="mb-3 self-start">{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <span className="text-primary inline-flex items-center text-sm">
                          Leer más
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );

                return post.url ? (
                  <Link 
                    to={post.url} 
                    key={index}
                    className="block h-full hover:no-underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {cardContent}
                  </Link>
                ) : cardContent;
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar más artículos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant bg-gradient-hero text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Suscríbete a nuestro newsletter
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Recibe consejos semanales sobre relaciones, amor y crecimiento personal directamente en tu bandeja de entrada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Tu email"
                    className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-accent"
                  />
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Suscribirse
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  Sin spam. Cancela tu suscripción en cualquier momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;