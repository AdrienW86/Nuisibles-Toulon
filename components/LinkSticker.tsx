import Link from "next/link"

// 1. On définit le type des données attendues
interface LinkStickerProps {
  link1: string;
  description1: string;
  link2: string;
  description2: string;
}

// 2. On applique le type au composant
export default function LinkSticker({ link1, description1, link2, description2 }: LinkStickerProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Interventions proches de chez vous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link 
            href={link1}
            className="flex items-center justify-center bg-brand-green-500 text-white py-4 rounded-xl font-bold hover:bg-brand-green-600 transition-colors duration-300 shadow-md"
          >
            {description1}
          </Link>
          <Link 
            href={link2}
            className="flex items-center justify-center bg-brand-green-500 text-white py-4 rounded-xl font-bold hover:bg-brand-green-600 transition-colors duration-300 shadow-md"
          >
            {description2}
          </Link>
        </div>
    </div>
  )
}