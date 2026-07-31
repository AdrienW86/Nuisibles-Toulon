import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';

export default function DepigeonnagePage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Dépigeonnage à Toulon : Solutions efficaces contre les pigeons
        </h1>

        <BannerService 
          imageSrc ='/banner-depigeonnage.png'
          imageAlt='un technicien en train de surveiller un chantier à Toulon'
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          Les pigeons peuvent rapidement causer des dégradations irréversibles sur vos façades, 
          balcons et toitures. Leurs fientes acides détériorent les matériaux et nuisent à 
          l'hygiène de votre bâtiment. Nous intervenons sur <strong>Toulon et ses environs</strong> 
          pour installer des systèmes de protection discrets et durables.
        </p>

        {/* Section Problématique */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi agir contre les nuisances aviaires ?</h2>
        <div className="bg-brand-green-50 p-6 rounded-xl border-l-4 border-brand-green-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>🏛️ <strong>Dégradation :</strong> Les fientes sont acides et attaquent la pierre, le zinc et les peintures.</li>
            <li>🩺 <strong>Hygiène :</strong> Porteurs de parasites et de germes, les pigeons présentent un risque sanitaire.</li>
            <li>🔊 <strong>Nuisances :</strong> Les roucoulements incessants et l'accumulation de nids polluent votre quotidien.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nos solutions de dépigeonnage</h2>
        <p className="text-zinc-600 mb-6">
          Expert en lutte aviaire à Toulon, nous adaptons nos dispositifs à la configuration 
          de votre bâtiment pour un résultat invisible :
        </p>
        <ul className="space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Pics anti-pigeons :</strong> Pour protéger les rebords de fenêtres et corniches.</li>
          <li>✅ <strong>Filets de protection :</strong> Pour condamner les accès aux cours intérieures ou toits.</li>
          <li>✅ <strong>Systèmes d'effarouchement :</strong> Solutions éthiques pour éloigner les colonies.</li>
        </ul>

        {/* Appel à l'action */}
       <LinkSticker 
          link1 = "/depigeonnage/toulon" description1 = "Dépigeonnage à Toulon"
          link2 = "/depigeonnage/bandol" description2 = "Dépigeonnage à Bandol"
        />
        <Sticker />
      </article>
    </div>
  );
}