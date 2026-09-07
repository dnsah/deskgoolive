"use client";

const BRANDS = [
  "Northwind",
  "ACME Corp",
  "Lumina",
  "Vertex Labs",
  "Kite & Co",
  "Momentum",
  "Foxglove",
  "Atlas Retail",
  "Beacon",
  "Solstice",
];

function BrandLogo({ name }: { name: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 px-8">
      {/* abstract mark so the strip reads as logos, not plain text */}
      <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-iris via-orchid to-aqua opacity-70 [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]" />
      <span className="font-display text-xl font-bold tracking-tight text-fog transition-colors duration-300 hover:text-mist">
        {name}
      </span>
    </span>
  );
}

export default function Brands() {
  const row = [...BRANDS, ...BRANDS];

  return (
    <section className="relative border-t border-line py-16 md:py-20">
      <p className="mb-10 text-center text-xs tracking-[0.3em] text-fog/60 uppercase">
        Trusted by teams at
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <BrandLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
