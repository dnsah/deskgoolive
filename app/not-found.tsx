import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-grid mask-fade-radial absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[24rem] w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-iris/20 blur-[140px]" />
      <p className="text-gradient font-display text-[clamp(6rem,20vw,14rem)] leading-none font-bold">
        404
      </p>
      <h1 className="mt-2 font-display text-2xl font-bold text-mist md:text-4xl">
        This page shipped without a route.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
        The link you followed does not exist — but everything else on this site
        does. Let us get you back.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)]"
      >
        Back to home
      </Link>
    </section>
  );
}
