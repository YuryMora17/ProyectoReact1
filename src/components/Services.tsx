export default function Services() {
  const services = [
    { title: "Consultas Médicas", icon: "🩺" },
    { title: "Vacunación", icon: "💉" },
    { title: "Estética y Baño", icon: "🛁" },
    { title: "Urgencias 24/7", icon: "🚑" },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Nuestros Servicios
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h4 className="text-xl font-semibold text-gray-700">{s.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}