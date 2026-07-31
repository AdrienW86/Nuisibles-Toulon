import React from 'react'

export default function Sticker() {
  return (
    <div className="bg-brand-green-50 text-black p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold mb-4">Protégez votre bâtiment dès maintenant</h3>
        <p className="mb-6 opacity-90">Devis et diagnostic gratuit sur Toulon et agglomération.</p>
          <a 
            href="tel:+33762240168" 
            className="inline-block bg-brand-green-500 px-8 py-4 rounded-full font-bold text-white text-lg hover:bg-brand-green-600 transition"
          >
            07 62 24 01 68
          </a>
    </div>
  )
}