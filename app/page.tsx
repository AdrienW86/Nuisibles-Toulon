import Banner from '@/components/Banner'
import ServiceGrid from '@/components/ServiceGrid';
import CallForm from '@/components/CallForm';

export default function Home() {
  return (
    <div className="flex flex-col">
      <main>
        <Banner />
        
        {/* Section de réassurance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Point 1 */}
            <div>
              <div className="text-brand-green-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Intervention rapide</h3>
              <p className="text-zinc-600">Nous intervenons dans les 24h à Toulon et ses alentours pour stopper l'invasion.</p>
            </div>

            {/* Point 2 */}
            <div>
              <div className="text-brand-green-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Expertise certifiée</h3>
              <p className="text-zinc-600">Des techniciens qualifiés et formés aux dernières méthodes de lutte raisonnée.</p>
            </div>

            {/* Point 3 */}
            <div>
              <div className="text-brand-green-600 text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Résultats garantis</h3>
              <p className="text-zinc-600">Des solutions durables pour protéger votre foyer ou vos locaux professionnels.</p>
            </div>

          </div>
        </section>
        <ServiceGrid />
        <CallForm />
      </main>
    </div>
  );
}