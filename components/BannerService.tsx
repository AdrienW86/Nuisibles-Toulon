import Image from 'next/image';

interface BannerProps {
  imageSrc: string;
  imageAlt: string;
}

export default function Banner({ imageSrc, imageAlt }: BannerProps) {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-3xl mb-10 shadow-lg">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* Overlay sombre discret */}
      <div className="absolute inset-0 bg-zinc-900/20" />
    </div>
  );
}