// Display the main introduction and background photograph.
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-end overflow-hidden bg-stone-800 md:min-h-screen"
    >
      {/* Background photograph with a dark overlay for readable text. */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85"
        alt="A couple celebrating their wedding"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay adds contrast while keeping the image visible. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />

      {/* Hero content */}
      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 pb-20 pt-36 text-white md:px-12 md:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/80">
          Wedding photography & films
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          For the moments
          <br />
          that become <span className="italic">forever.</span>
        </h1>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-white/80 md:text-base">
            Honest stories, beautiful light, and the little moments you'll
            remember long after the day is over.
          </p>

          <a
            href="#portfolio"
            className="w-fit border-b border-white/70 pb-2 text-xs uppercase tracking-[0.2em] transition hover:border-white"
          >
            Explore our work ↗
          </a>
        </div>
      </div>
    </section>
  )
}