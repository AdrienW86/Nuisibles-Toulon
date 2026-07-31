import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';


export default function DeratisationPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Dératisation à Toulon : Éradication efficace des rats et souris
        </h1>

        <BannerService 
          imageSrc ='/banner-deratisation.png'
          imageAlt='un technicien en train de surveiller un chantier à Toulon'
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          Vous entendez des bruits dans vos combles ou avez remarqué des déjections ? 
          Une invasion de rats ou de souris peut rapidement devenir un danger pour 
          votre santé et la structure de votre habitation. Notre équipe intervient 
          rapidement sur <strong>Toulon et toute son agglomération</strong> pour une 
          dératisation complète et durable.
        </p>

        {/* Section Problématique */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi agir vite ?</h2>
        <div className="bg-brand-green-50 p-6 rounded-xl border-l-4 border-brand-green-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>🐀 <strong>Santé :</strong> Les rongeurs transmettent des maladies graves (leptospirose, salmonellose).</li>
            <li>⚡ <strong>Dommages :</strong> Ils rongent vos câbles électriques (risque d'incendie) et vos isolants.</li>
            <li>📈 <strong>Prolifération :</strong> Une colonie peut se multiplier de façon exponentielle en quelques mois.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Notre méthode de dératisation</h2>
        <p className="text-zinc-600 mb-6">
          En tant que professionnels de la lutte contre les nuisibles à Toulon, nous appliquons 
          une approche en trois étapes :
        </p>
        <ul className="list-decimal list-inside space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Diagnostic :</strong> Identification des zones d'entrée et des points de passage.</li>
          <li>✅ <strong>Traitement :</strong> Mise en place de solutions de lutte ciblées et sécurisées.</li>
          <li>✅ <strong>Prévention :</strong> Conseils pour calfeutrer vos bâtiments et éviter le retour des rongeurs.</li>
        </ul>

        {/* Appel à l'action */}
        
          <LinkSticker 
            link1 = "/deratisation/toulon" description1 = "Dératisation à Toulon"
            link2 = "/deratisation/Bandol" description2 = "Dératisation à Bandol"
          />
          <Sticker />
      </article>
    </div>
  );
}