export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-30 text-center mt-10">
      <p className="font-medium">
        © {new Date().getFullYear()} Veterinaria PetCare — Todos los derechos reservados
      </p>
    </footer>
  );
}
