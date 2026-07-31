"use client"

import React, { useState } from "react";

export default function CallForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-[#F8F9F8]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 mb-4">Réservez votre appel</h2>
          <p className="text-zinc-600">
            Vous avez des questions ou besoin d'une intervention urgente à Nantes ? 
            Remplissez ce formulaire, nous vous rappelons sous 2h.
          </p>
        </div>
                
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
          {status === 'success' ? (
            // Message de succès plein cadre
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Demande bien reçue !</h3>
              <p className="text-zinc-600">
                Merci ! Un expert vous rappellera dans les 2 prochaines heures.
              </p>
            </div>
          ) : (
            // Formulaire normal
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Nom</label>
                  <input required name="name" className="w-full px-4 py-3 text-zinc-700 rounded-lg border border-zinc-300 outline-none focus:border-brand-green-600" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Téléphone</label>
                  <input required name="phone" className="w-full px-4 py-3 text-zinc-700 rounded-lg border border-zinc-300 outline-none focus:border-brand-green-600" placeholder="06 00 00 00 00" />
                </div>
              </div>
              
              <button 
                disabled={status === 'loading'}
                className="w-full bg-brand-green-600 text-white font-bold py-3 rounded-lg hover:bg-brand-green-700 transition disabled:opacity-70"
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Être rappelé gratuitement'}
              </button>

              {status === 'error' && (
                <p className="text-center text-red-600 font-bold text-sm">Une erreur est survenue, veuillez réessayer.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}