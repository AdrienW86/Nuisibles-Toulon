import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';

export default function DesinsectisationPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Désinsectisation fourmis et araignées à Toulon : Protection de votre habitat
        </h1>

        <BannerService 
          imageSrc='/banner-desinsectisation.png'
          imageAlt="Intervention professionnelle de désinsectisation"
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          Envahis par des colonies de fourmis dans votre cuisine ou dérangés par une présence accrue d'araignées ? 
          Si ces insectes ne sont pas toujours dangereux, ils deviennent rapidement une nuisance insupportable. 
          Nous proposons des solutions de <strong>désinsectisation ciblées sur Toulon et ses environs</strong> pour 
          assainir durablement vos espaces intérieurs et extérieurs.
        </p>

        {/* Section Problématique */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi agir contre les nuisibles rampants ?</h2>
        <div className="bg-brand-green-50 p-6 rounded-xl border-l-4 border-brand-green-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>🐜 <strong>Fourmis :</strong> Attirées par les réserves alimentaires, elles forment des colonnades difficiles à déloger sans traitement approprié.</li>
            <li>🕷️ <strong>Araignées :</strong> Bien qu'utiles à l'écosystème, leur prolifération à l'intérieur génère des toiles persistantes et peut causer une gêne psychologique.</li>
            <li>🏠 <strong>Confort :</strong> Retrouvez la sérénité dans votre foyer grâce à une barrière protectrice efficace contre les intrusions récurrentes.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Notre approche professionnelle</h2>
        <p className="text-zinc-600 mb-6">
          Nous intervenons avec des méthodes respectueuses de votre environnement tout en assurant une éradication précise :
        </p>
        <ul className="space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Barrière protectrice :</strong> Application de traitements rémanents sur les points d'entrée stratégiques.</li>
          <li>✅ <strong>Solutions ciblées :</strong> Appâts spécifiques pour les fourmilières et traitement des recoins pour les araignées.</li>
          <li>✅ <strong>Conseils préventifs :</strong> Préconisations pour éviter le retour des nuisibles (colmatage, gestion des accès).</li>
        </ul>

        {/* Appel à l'action */}
        <LinkSticker 
          link1="/desinsectisation/toulon" description1="Intervention sur toulon"
          link2="/desinsectisation/toulon-nord" description2="Intervention Nord-Toulon"
        />
        <Sticker />
      </article>
    </div>
  );
}