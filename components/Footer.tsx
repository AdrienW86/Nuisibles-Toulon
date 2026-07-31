import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F7F4] border-t border-zinc-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Colonne 1 : Logo et identité */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-lg ">
              {/* <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z" /></svg> */}
              <Image 
                src="/logo.png"
                alt="Logo Nuisibles Toulon"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            <span className="font-black text-zinc-900">NUISIBLES TOULON</span>
          </div>
          <p className="text-sm text-zinc-600">
            Experts en dératisation et désinsectisation à Toulon et agglomération. Intervention rapide et discrète.
          </p>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-zinc-900 mb-2">Informations</h4>
          <Link href="/mentions-legales" className="text-sm text-zinc-600 hover:text-brand-green-600">Mentions légales</Link>
          <Link href="/confidentialite" className="text-sm text-zinc-600 hover:text-brand-green-600">Politique de confidentialité</Link>
          <Link href="/plan-du-site" className="text-sm text-zinc-600 hover:text-brand-green-600">Plan du site</Link>
        </div>

        {/* Colonne 3 : Contact rapide */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-zinc-900 mb-2">Contact</h4>
          <span className="text-sm text-zinc-600">Toulon, 83000</span>
          <a href="tel:+33762240168" className="text-sm font-bold text-brand-green-600">07 62 24 01 68</a>
        </div>

        {/* Colonne 4 : Branding */}
        <div className="flex flex-col gap-2 justify-end">
          <p className="text-xs text-zinc-500">© {currentYear} Nuisibles Toulon.</p>
          <a 
            href="https://code-v.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-brand-green-600 transition"
          >
            Propulsé par CodeV
          </a>
        </div>
      </div>
    </footer>
  );
}