import Link from 'next/link';

const services = [
  { name: 'Dératisation', href: '/deratisation', icon: '🐀' },
  { name: 'Dépigeonnage', href: '/depigeonnage', icon: '🐦' },
  { name: 'Cafards & Blattes', href: '/cafards-blattes', icon: '🪳' },
  { name: 'Puces & Punaises', href: '/puces-punaises', icon: '🪲' },
  { name: 'Désinsectisation', href: '/desinsectisation', icon: '🐜' },
  { name: 'Guêpes & Frelons', href: '/guepes-frelons', icon: '🐝' },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-[#F4F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre et Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Titre en vert pour le mettre en valeur */}
          <h2 className="text-3xl font-black text-brand-green-600 mb-4">Nos Services</h2>
          <p className="text-zinc-600">
            Nos équipes sont formées et <strong>certifiées Certibiocide</strong>, garantissant une maîtrise 
            totale des traitements. Nous privilégions des solutions respectueuses de l'environnement, 
            efficaces contre les nuisibles tout en assurant la sécurité de vos enfants et de vos animaux 
            de compagnie.
          </p>
        </div>
        
        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.name} 
              href={service.href}
              className="group bg-white p-8 rounded-2xl border border-zinc-200 hover:border-brand-green-500 transition-all shadow-sm hover:shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-brand-green-600 transition">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">En savoir plus →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}