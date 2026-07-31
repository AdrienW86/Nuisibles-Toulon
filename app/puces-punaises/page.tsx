import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';

export default function PucesPunaisesLitPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Traitement des puces et punaises de lit à Toulon : Retrouvez la sérénité
        </h1>

        <BannerService 
          imageSrc='/banner-punaises.png'
          imageAlt='traitement professionnel contre les punaises de lit dans une chambre'
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          La découverte de punaises de lit ou d'une invasion de puces est une expérience stressante. 
          Ces nuisibles, experts en dissimulation, colonisent vos matelas, canapés et textiles, 
          rendant vos nuits difficiles. Leur capacité de résistance aux produits grand public 
          rend une intervention spécialisée indispensable. 
          Nous intervenons avec réactivité sur <strong>Toulon et ses environs</strong> pour neutraliser 
          ces nuisibles et assainir durablement votre intérieur.
        </p>

        {/* Section Problématique */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi faire appel à un spécialiste ?</h2>
        <div className="bg-brand-red-50 p-6 rounded-xl border-l-4 border-brand-red-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>🩸 <strong>Piqûres multiples :</strong> Causent des démangeaisons intenses, des réactions allergiques et des troubles du sommeil.</li>
            <li>🏠 <strong>Invasion invisible :</strong> Les punaises de lit se cachent dans les moindres fissures et recoins, rendant leur détection complexe.</li>
            <li>⚠️ <strong>Résistance :</strong> Les méthodes classiques (aspirateur, bombes du commerce) sont souvent insuffisantes pour éradiquer les œufs et les nymphes.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nos protocoles de désinsectisation</h2>
        <p className="text-zinc-600 mb-6">
          Spécialistes du traitement contre les insectes piqueurs à Toulon, nous déployons 
          des solutions adaptées pour un résultat définitif :
        </p>
        <ul className="space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Traitement thermique ou chimique :</strong> Utilisation de produits ciblés ou de vapeur sèche pour détruire les œufs et les adultes.</li>
          <li>✅ <strong>Inspection approfondie :</strong> Repérage des points de regroupement (sommiers, plinthes, prises électriques).</li>
          <li>✅ <strong>Conseils post-intervention :</strong> Accompagnement sur le nettoyage des textiles et les mesures de prévention pour éviter toute nouvelle introduction.</li>
        </ul>

        {/* Appel à l'action */}
       <LinkSticker 
          link1="/puces-punaises/toulon" description1="Traitement punaises à Toukon"
          link2="/puces-punaises/bandol" description2="Traitement punaises à Bandol"
        />
        <Sticker />
      </article>
    </div>
  );
}