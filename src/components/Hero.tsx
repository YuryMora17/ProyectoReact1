export default function HeroS() {
  return (
    <div className="min-h-screen bg-gradient-to-b  to-blue-500 via-blue-900 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Sección de Texto */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Cuidamos la salud y el bienestar de tu mascota con amor, experiencia y dedicación.          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua enim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
          </p>
        </div>

        {/* Mosaico de Imágenes */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Columna Izquierda */}
          <div className="space-y-4">
            {/* Imagen 1 - Mediana */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://www.polisura.edu.co/wp-content/uploads/2024/02/Auxiliar-Veterinaria-2.jpg" 
                alt="Mujer trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Imagen 2 - Grande */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://universidadeuropea.com/resources/media/images/medicina-veterinaria-1200x630.original.jpg" 
                alt="Oficina moderna"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-4 mt-8">
            {/* Imagen 3 - Grande */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://rufftoys.mx/cdn/shop/articles/2149198636.jpg?v=1720832525" 
                alt="Equipo colaborando"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Imagen 4 - Mediana */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://okvet.co/wp-content/uploads/2020/06/que-es-una-veterinaria.jpg" 
                alt="Hombre trabajando"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}