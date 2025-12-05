import { useState } from 'react';
//importamos useState para manejar el estado del menú
//exportamos el componente Navbar
import logoVeterinaria from '../assets/Logo_veterinaria.png';

export default function Navbar() {
  //declaramos el estado del menú
  //open es el estado del menú
  //setOpen es la función para cambiar el estado del menú
  //false es el estado inicial del menú
  //true es el estado del menú abierto
  const [open, setOpen] = useState(false);
  //retornamos el componente nav
  return (
    //retornamos el componente nav con la clase bg-white shadow-md que es el fondo y el sombreado del navbar
    <nav className="bg-white shadow-md">
      {/* Contenedor principal con la clase mx-auto max-w-6xl px-4 py-4 flex items-center justify-between que es el contenedor principal del navbar */}
 
      <div className="pl-4 pr-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <img 
            src={logoVeterinaria} 
            alt="Logo Veterinaria PetCare" 
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-blue-700">
            Veterinaria PetCare
          </h1>
        </div>

        {/* Menú desktop */}
        <ul className="mx-auto max-w-8xl hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
          <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <ul className="flex flex-col gap-2 px-4 py-3 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
            <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
            <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
