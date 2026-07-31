'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
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
      console.error(err);
      setStatus('error');
    }
  };

  const inputClasses = "w-full px-4 py-3 text-zinc-900 placeholder-zinc-400 rounded-lg border border-zinc-300 outline-none focus:border-brand-green-500 focus:ring-1 focus:ring-brand-green-500 transition-all";

  // Affichage en cas de succès
  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-12 rounded-3xl text-center">
        <div className="text-5xl mb-6">✅</div>
        <h3 className="text-2xl font-black text-green-900 mb-2">Demande envoyée !</h3>
        <p className="text-green-700">Merci pour votre confiance. Nous revenons vers vous très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Nom</label>
          <input required name="name" type="text" className={inputClasses} placeholder="Jean Dupont" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Téléphone</label>
          <input required name="phone" type="tel" className={inputClasses} placeholder="06 00 00 00 00" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
          <input required name="email" type="email" className={inputClasses} placeholder="jean@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Ville</label>
          <input required name="city" type="text" className={inputClasses} placeholder="Nantes" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">Type de nuisible</label>
        <select name="subject" className="w-full px-4 py-3 text-zinc-900 rounded-lg border border-zinc-300 bg-white outline-none focus:border-brand-green-500 transition-all">
          <option value="Rats/Souris">Rats ou Souris</option>
          <option value="Guêpes/Frelons">Guêpes ou Frelons</option>
          <option value="Cafards/Blattes">Cafards ou Blattes</option>
          <option value="Punaises">Punaises de lit</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">Votre message</label>
        <textarea required name="message" rows={4} className={`${inputClasses} resize-none`} placeholder="Décrivez votre situation..."></textarea>
      </div>

      <button 
        disabled={status === 'loading'}
        type="submit"
        className="w-full bg-brand-green-600 text-white font-bold py-3 rounded-lg hover:bg-brand-green-700 transition"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
          <p className="text-red-700 font-bold text-sm">Une erreur est survenue. Veuillez réessayer plus tard.</p>
        </div>
      )}
    </form>
  );
}