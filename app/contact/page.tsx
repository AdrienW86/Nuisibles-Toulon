import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-[#F8F9F8] py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de la page */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-zinc-900 mb-4">
            Contact et <span className="text-brand-green-600">Devis Gratuit</span>
          </h1>
          <p className="text-lg text-zinc-600">
            Une urgence ? Un besoin de prévention ? Contactez nos techniciens certifiés pour une intervention rapide sur Toulon et sa région.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
          
          {/* Colonne Gauche : Informations de contact */}
          <div className="bg-brand-green-600 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Informations Pratiques</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-brand-green-400 text-2xl">📞</div>
                  <div>
                    <p className="text-sm text-zinc-400">Téléphone (Intervention 7j/7)</p>
                    <a href="tel:+33762240168" className="text-xl font-bold hover:text-brand-green-400 transition">
                      07 62 24 01 68
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-green-400 text-2xl">✉️</div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <a href="mailto:contact@nuisibles-nantes.fr" className="text-lg font-medium hover:text-brand-green-400 transition">
                      contact@nuisibles-toulon.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-green-400 text-2xl">📍</div>
                  <div>
                    <p className="text-sm text-zinc-400">Zone d'intervention</p>
                    <p className="text-lg font-medium">Toulon et 50km aux alentours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-green-400 text-2xl">⏱️</div>
                  <div>
                    <p className="text-sm text-zinc-400">Horaires d'ouverture</p>
                    <p className="text-lg font-medium">Lun - Sam : 8h00 - 20h00</p>
                    <p className="text-sm text-zinc-400 mt-1">Urgences soirs et dimanches possibles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réassurance supplémentaire */}
            <div className="mt-12 p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
              <p className="text-sm text-zinc-300">
                Nos techniciens possèdent la certification <strong>Certibiocide</strong>. Tous nos devis sont gratuits et détaillés avant toute intervention.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Envoyez-nous un message</h2>
            
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}