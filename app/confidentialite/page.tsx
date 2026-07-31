export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto text-zinc-700">
        
        <h1 className="text-4xl font-black text-zinc-900 mb-10">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Préambule</h2>
            <p>
              La protection de vos données personnelles est une priorité pour <strong>Nuisibles Toulon</strong>. Cette politique de confidentialité détaille les informations que nous collectons lors de votre navigation sur notre site et l'usage que nous en faisons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Collecte des données</h2>
            <p>
              Nous collectons uniquement les informations nécessaires au traitement de vos demandes. Ces données sont recueillies lorsque vous remplissez notre formulaire de contact ou lorsque vous nous contactez par email ou téléphone. Les informations collectées incluent :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Adresse postale (si nécessaire pour un devis)</li>
              <li>Toute information complémentaire précisée dans votre message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Utilisation des données</h2>
            <p>
              Les données recueillies sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de devis ou d'intervention</li>
              <li>Assurer le suivi de nos prestations</li>
              <li>Vous contacter dans le cadre de notre relation commerciale</li>
            </ul>
            <p className="mt-4">
              Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers à des fins commerciales sans votre consentement explicite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées le temps nécessaire à la réalisation de votre demande et pour répondre aux obligations légales de conservation des documents commerciaux (factures, devis).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants sur vos données :
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données.</li>
              <li><strong>Droit de rectification :</strong> Corriger vos informations.</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données.</li>
              <li><strong>Droit d'opposition :</strong> Refuser le traitement de vos informations.</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@nuisibles-toulon.fr</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques pour protéger vos données contre tout accès, modification ou divulgation non autorisée.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}