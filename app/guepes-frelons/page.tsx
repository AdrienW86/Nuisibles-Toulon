import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';

export default function GuepesFrelonsPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Destruction de nids de guêpes et frelons à Toulon : Intervention rapide et sécurisée
        </h1>

        <BannerService 
          imageSrc='/banner-guepes.png'
          imageAlt="Intervention spécialisée pour nid de guêpes et frelons"
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          La présence d'un nid de guêpes ou de frelons à proximité de votre domicile représente un danger réel, 
          particulièrement pour les personnes allergiques ou en présence d'enfants. 
          Ne tentez jamais une élimination par vos propres moyens. 
          Nous intervenons en urgence sur <strong>Toulon et ses environs</strong> pour neutraliser 
          les nids, quel que soit leur emplacement (toiture, combles, arbres ou enterrés).
        </p>

        {/* Section Danger/Urgence */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi une intervention professionnelle est cruciale</h2>
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>⚠️ <strong>Danger immédiat :</strong> Les piqûres multiples peuvent entraîner des chocs anaphylactiques graves.</li>
            <li>🛑 <strong>Frelons Asiatiques :</strong> Espèce invasive extrêmement agressive lorsqu'elle se sent menacée près du nid.</li>
            <li>🏠 <strong>Sécurisation :</strong> Une neutralisation professionnelle garantit l'élimination totale de la colonie et la prévention des risques de réinstallation.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Notre protocole d'intervention</h2>
        <p className="text-zinc-600 mb-6">
          La sécurité est notre priorité absolue. Nous utilisons des équipements de protection intégrale et des traitements adaptés :
        </p>
        <ul className="space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Diagnostic rapide :</strong> Identification de l'espèce et localisation précise du nid.</li>
          <li>✅ <strong>Traitement ciblé :</strong> Utilisation de produits biocides professionnels pour une efficacité immédiate.</li>
          <li>✅ <strong>Nettoyage et sécurisation :</strong> Enlèvement du nid lorsque la situation le permet pour éviter les odeurs et le retour d'autres insectes.</li>
        </ul>

        {/* Appel à l'action */}
        <LinkSticker 
          link1="/guepes-frelons/la-seyne-sur-mer" description1="Intervention sur La Seyne-sur-Mer"
          link2="/guepes-frelons/six-fours-les-plages" description2="Invention sur Six-Fours-les-Plages"
        />
        <Sticker />
      </article>
    </div>
  );
}