"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Dératisation', href: '/deratisation' },
    { name: 'Dépigeonnage', href: '/depigeonnage' },
    { name: 'Cafards & Blattes', href: '/cafards-blattes' },
    { name: 'Puces & Punaises', href: '/puces-punaises' },
    { name: 'Désinsectisation', href: '/desinsectisation' },
    { name: 'Guêpes & Frelons', href: '/guepes-frelons' },
  ];

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-lg ">
            {/* <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z" /></svg> */}
            <Image 
              src="/logo.png"
              alt="Logo Nuisibles Toulon"
              width={70}
              height={70}
              className="object-contain"
              />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-zinc-900 leading-tight">NUISIBLES</span>
            <span className="text-[10px] font-bold text-brand-green-600 tracking-[0.2em] uppercase">TOULON</span>
          </div>
        </Link>

        {/* Bouton Hamburger Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-zinc-800">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-zinc-800 font-semibold text-sm hover:text-brand-green-600">Accueil</Link>
          
          {/* Dropdown Services */}
          <div className="relative">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-zinc-800 font-semibold text-sm hover:text-brand-green-600 flex items-center gap-1">
              Nos Services ▾
            </button>
            {isServicesOpen && (
              <div className="absolute top-full mt-2 w-56 bg-white border border-zinc-200 shadow-xl rounded-lg py-2 z-50">
                {services.map((s) => (
                  <Link key={s.name} href={s.href} className="block px-4 py-2 text-sm text-zinc-700 hover:bg-brand-green-50 hover:text-brand-green-700">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/a-propos" className="text-zinc-800 font-semibold text-sm hover:text-brand-green-600">À propos</Link>
          <Link href="/contact" className="text-zinc-800 font-semibold text-sm hover:text-brand-green-600">Contact</Link>
          
          <Link href="tel:+33762240168" className="bg-brand-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-green-700 shadow-md">
            07 62 24 01 68
          </Link>
        </div>
      </nav>

      {/* Menu Mobile avec Services déroulants */}
      {isOpen && (
        <div className="md:hidden bg-[#F4F7F4] text-brand-green-600 w-full absolute left-0 p-6 flex flex-col gap-4 shadow-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <button className="text-left font-bold text-brand-green-400" onClick={() => setIsServicesOpen(!isServicesOpen)}>Services ▾</button>
          {isServicesOpen && services.map(s => (
            <Link key={s.name} href={s.href} className="pl-4 text-brand-green-600 py-1" onClick={() => setIsOpen(false)}>{s.name}</Link>
          ))}
          <Link href="/a-propos" onClick={() => setIsOpen(false)}>À propos</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}