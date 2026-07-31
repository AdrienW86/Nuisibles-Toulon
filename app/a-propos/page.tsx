export default function AboutDeratiseurPage() {
  return (
    <div className="bg-white py-16 px-6">
      <article className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-black text-zinc-900 mb-8">
          Votre expert en dératisation à Toulon
        </h1>

        <div className="prose prose-zinc max-w-none text-lg text-zinc-600 leading-relaxed space-y-6">
          <p>
            Depuis plusieurs années, nous intervenons sur <strong>Toulon et tout le Var</strong> pour protéger 
            les foyers, les commerces et les bâtiments professionnels contre les nuisibles. 
            Notre métier va bien au-delà de la simple extermination : il s'agit d'une véritable 
            mission de santé publique et d'assainissement de vos espaces de vie.
          </p>

          <p>
            Face à une infestation de rats ou de souris, la réactivité est primordiale. Nous avons bâti notre 
            réputation sur une approche <strong>discrète, méthodique et humaine</strong>. Nous comprenons 
            le stress qu'une telle situation peut engendrer, c'est pourquoi nous mettons un point d'honneur 
            à intervenir avec pédagogie et efficacité.
          </p>
        </div>

        {/* Section Valeurs / Atouts */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
            <h3 className="font-bold text-zinc-900 mb-2">Intervention locale</h3>
            <p className="text-sm text-zinc-600">Une connaissance parfaite du terrain varois pour une intervention rapide, 7j/7.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
            <h3 className="font-bold text-zinc-900 mb-2">Méthodes durables</h3>
            <p className="text-sm text-zinc-600">Priorité à la prévention, au colmatage et à la sécurisation plutôt qu'à l'usage excessif de produits.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100">
            <h3 className="font-bold text-zinc-900 mb-2">Expertise certifiée</h3>
            <p className="text-sm text-zinc-600">Formés aux dernières techniques de lutte aviaire et anti-rongeurs, respectueux des normes d'hygiène.</p>
          </div>
        </div>

        {/* Section Engagement */}
        <div className="bg-brand-green-50 p-8 rounded-2xl border-l-4 border-brand-green-600">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">Notre engagement envers vous</h2>
          <p className="text-zinc-700 leading-relaxed">
            Chez <strong>Nuisibles Toulon</strong>, nous pensons que la confiance est la base de notre travail. 
            C'est pourquoi nous assurons un suivi complet : du diagnostic initial jusqu'à la sécurisation 
            totale de vos accès. Nous ne partons que lorsque le problème est résolu et que vous 
            retrouvez la sérénité.
          </p>
        </div>

        {/* Appel à l'action */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-6 italic">Besoin d'un conseil ou d'une intervention rapide ?</p>
          <a 
            href="/contact" 
            className="inline-block bg-zinc-900 text-white font-bold py-3 px-10 rounded-lg hover:bg-zinc-700 transition"
          >
            Contactez notre équipe
          </a>
        </div>
      </article>
    </div>
  );
}