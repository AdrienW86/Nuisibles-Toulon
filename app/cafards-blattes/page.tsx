import BannerService from '@/components/BannerService'
import Sticker from '@/components/Sticker'; 
import LinkSticker from '@/components/LinkSticker';

export default function DeratisationCafardsPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto">
        {/* En-tête SEO */}
        <h1 className="text-4xl font-black text-zinc-900 mb-6">
          Désinsectisation cafards et blattes à Toulon : Éradication totale
        </h1>

        <BannerService 
          imageSrc ='/banner-cafards.png'
          imageAlt='intervention de désinsectisation contre les blattes dans une cuisine'
        />
        
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          La présence de blattes ou de cafards est un signe d'infestation qu'il ne faut pas négliger. 
          Proliférant rapidement dans les endroits chauds et humides, ils contaminent vos 
          denrées alimentaires et nuisent gravement à l'hygiène de votre logement ou de vos locaux professionnels. 
          Nous intervenons discrètement sur <strong>Toulon et ses environs</strong> avec des solutions 
          ciblées pour une élimination rapide et durable.
        </p>

        {/* Section Problématique */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Pourquoi une intervention professionnelle est indispensable ?</h2>
        <div className="bg-brand-green-50 p-6 rounded-xl border-l-4 border-brand-green-600 mb-10">
          <ul className="space-y-3 text-zinc-700">
            <li>🦠 <strong>Risques sanitaires :</strong> Vecteurs de maladies (salmonellose, gastro-entérite) et d'allergies.</li>
            <li>📉 <strong>Prolifération rapide :</strong> Une femelle peut engendrer des dizaines de descendants en quelques semaines.</li>
            <li>🏢 <strong>Impact professionnel :</strong> Pour les restaurants et commerces, une infestation entraîne des risques de fermeture administrative.</li>
          </ul>
        </div>

        {/* Section Solution */}
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nos méthodes de traitement</h2>
        <p className="text-zinc-600 mb-6">
          Expert en désinsectisation dans le Var, nous utilisons des techniques professionnelles 
          qui garantissent la sécurité des occupants tout en éradiquant la colonie :
        </p>
        <ul className="space-y-4 text-zinc-700 mb-10">
          <li>✅ <strong>Gel insecticide professionnel :</strong> Application ciblée, sans odeur et sans évacuation des lieux.</li>
          <li>✅ <strong>Traitements mécaniques et préventifs :</strong> Colmatage des zones d'accès pour éviter la réinfestation.</li>
          <li>✅ <strong>Suivi et diagnostic :</strong> Identification des sources de nourriture et d'humidité pour sécuriser vos espaces.</li>
        </ul>

        {/* Appel à l'action */}
       <LinkSticker 
          link1 = "/cafards-blattes/toulon" description1 = "Désinsectisation à Toulon"
          link2 = "/cafards-blattes/bandol" description2 = "Désinsectisation à Bandol"
        />
        <Sticker />
      </article>
    </div>
  );
}