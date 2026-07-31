import Link from 'next/link';

export default function SitemapPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-black text-zinc-900 mb-8">Plan du site</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Navigation Principale : Services */}
        <div>
          <h2 className="text-xl font-bold text-brand-green-600 mb-4 border-b pb-2">Nos Services</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-brand-green-600">Accueil</Link></li>
            <li><Link href="/deratisation" className="hover:text-brand-green-600">Dératisation</Link></li>
            <li><Link href="/depigeonnage" className="hover:text-brand-green-600">Dépigeonnage</Link></li>
            <li><Link href="/cafards-blattes" className="hover:text-brand-green-600">Cafards & Blattes</Link></li>
            <li><Link href="/puces-punaises" className="hover:text-brand-green-600">Puces & Punaises</Link></li>
            <li><Link href="/desinsectisation" className="hover:text-brand-green-600">Désinsectisation</Link></li>
            <li><Link href="/guepes-frelons" className="hover:text-brand-green-600">Guêpes & Frelons</Link></li>
          </ul>
        </div>

        {/* SEO Local : Zones d'intervention */}
        <div>
          <h2 className="text-xl font-bold text-brand-green-600 mb-4 border-b pb-2">Zones d'intervention</h2>
          <ul className="space-y-3">
            <li><Link href="/deratisation/toulon" className="hover:text-brand-green-600">Toulon Centre</Link></li>
            <li><Link href="/bandol" className="hover:text-brand-green-600">Bandol</Link></li>
            <li><Link href="/intervention/sanary-sur-Mer" className="hover:text-brand-green-600">Sanary-sur-Mer</Link></li>
            <li><Link href="/intervention/six-fours-les-plages" className="hover:text-brand-green-600">Six-Fours-les-Plages</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green-600 font-bold mt-4 block">Demander une intervention</Link></li>
          </ul>
        </div>

        {/* Pages Informations et Légales */}
        <div>
          <h2 className="text-xl font-bold text-brand-green-600 mb-4 border-b pb-2">Informations</h2>
          <ul className="space-y-3">
            <li><Link href="/a-propos" className="hover:text-brand-green-600">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green-600">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-brand-green-600">Mentions légales</Link></li>
            <li><Link href="/confidentialite" className="hover:text-brand-green-600">Politique de confidentialité</Link></li>
            <li><Link href="/plan-du-site" className="hover:text-brand-green-600">Plan du site</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}