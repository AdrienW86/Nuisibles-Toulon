export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-12 px-6">
      <article className="max-w-4xl mx-auto text-zinc-700">
        
        <h1 className="text-4xl font-black text-zinc-900 mb-10">
          Mentions Légales
        </h1>

        <div className="space-y-8 leading-relaxed">
          
          {/* Section 1 : Éditeur */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 border-b pb-2">
              1. Éditeur du site
            </h2>
            <p className="mb-4">
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, 
              il est précisé aux utilisateurs du site internet l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-none space-y-2 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
              <li><strong>Propriétaire et Éditeur :</strong> Hospice Michel (Entrepreneur Individuel)</li>
              <li><strong>Nom commercial :</strong> Nuisibles Toulon (enregistré sous Hospice Michel)</li>
              <li><strong>Siège social :</strong> 88 CHEMIN DES CHARRETTES, 66380 PIA, FRANCE</li>
              <li><strong>SIREN :</strong> 483 160 420</li>
              <li><strong>SIRET :</strong> 483 160 420 00012</li>
              <li><strong>Téléphone :</strong> 07 62 24 01 68</li>
              <li><strong>Email :</strong> contact@nuisibles-toulon.fr</li>
              <li><strong>Directeur de la publication :</strong> Hospice Michel</li>
            </ul>
          </section>

          {/* Section 2 : Hébergement */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 border-b pb-2">
              2. Hébergement du site
            </h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
              Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              Site web : <a href="https://vercel.com" className="text-brand-green-600 hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
            </p>
          </section>

          {/* Section 3 : Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 border-b pb-2">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'entreprise Hospice Michel est propriétaire des droits de propriété intellectuelle et détient 
              les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, 
              images, graphismes, logos, vidéos, architecture, icônes et sons.
            </p>
            <p className="mt-2">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation 
              écrite préalable. Toute exploitation non autorisée du site ou de l’un quelconque des éléments 
              qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément 
              aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          {/* Section 4 : Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4 border-b pb-2">
              4. Gestion des données personnelles
            </h2>
            <p>
              L'utilisateur est informé des réglementations concernant la communication marketing, la loi du 
              21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 
              06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
            </p>
            <p className="mt-2">
              Les informations recueillies via les formulaires de contact sont destinées exclusivement au 
              traitement de votre demande par nos services. Conformément à la loi « informatique et libertés », 
              vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en 
              contactant : <strong>contact@nuisibles-toulon.fr</strong>.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
}