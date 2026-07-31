import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Image de fond (remplacez l'URL par votre image) */}
      <Image 
        src="/banner.png" 
        alt="Expert en lutte contre les nuisibles à Toulon" 
        fill
        priority // À mettre si c'est le premier élément visible (LCP)
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-zinc-900/60" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Votre sérénité, <span className="text-brand-green-400">notre mission.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-100 mb-8">
          Intervention rapide à Toulon et sa région contre tous types de nuisibles. 
          Expertise certifiée et solutions durables.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33762240168" className="bg-brand-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green-700 transition shadow-xl">
            Appeler maintenant
          </a>
          <a href="/contact" className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition shadow-xl">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}