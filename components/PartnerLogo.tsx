import Image from 'next/image';

export default function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center rounded-card border border-black/[0.06] bg-white px-8 mx-3">
      <div className="relative h-9 w-full  opacity-70 transition-all duration-300 hover:grayscale-100 hover:opacity-100">
        <Image
          src={logo}
          alt={`${name} — Indra Solar Tech brand partner`}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}