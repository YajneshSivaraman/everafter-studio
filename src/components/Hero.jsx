import { useEffect, useState } from 'react'
/* Display the main introduction and cinematic background photograph. */
export default function Hero() {
  // Track hero visibility so its headline can replay on re-entry.
const [heroVisible, setHeroVisible] = useState(true)

useEffect(() => {
  const hero = document.getElementById('home')
  if (!hero) return

  const observer = new IntersectionObserver(
    ([entry]) => setHeroVisible(entry.isIntersecting),
    { threshold: 0.25 },
  )

  observer.observe(hero)
  return () => observer.disconnect()
}, [])
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-end overflow-hidden bg-stone-800 md:min-h-screen"
    >
      {/* Background photograph slowly zooms out as the hero appears. */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85"
        alt="A couple celebrating their wedding"
        className="everafter-hero-image absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay protects the text contrast. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />

      {/* Hero content sits above the photograph and overlay. */}
      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 pb-20 pt-36 text-white md:px-12 md:pb-28">
        {/* Small introductory label appears first. */}
        <p className="everafter-intro mb-6 text-xs uppercase tracking-[0.3em] text-white/80">
          Wedding photography &amp; films
        </p>

        {/* Each headline line rises through its own vertical mask. */}
        <h1  key={heroVisible ? 'hero-visible' : 'hero-hidden'}
  className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="everafter-title-mask">
            <span className="everafter-title-line">
              For the moments
            </span>
          </span>

          <span className="everafter-title-mask">
            <span className="everafter-title-line">
              that become <span className="italic">forever.</span>
            </span>
          </span>
        </h1>

        {/* Supporting copy follows the headline entrance. */}
        <div className="everafter-intro everafter-delay-2 mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm leading-7 text-white/80 md:text-base">
              Honest stories, beautiful light, and the little moments you&apos;ll
              remember long after the day is over.
            </p>

            {/* A fine line draws in beneath the supporting copy. */}
            <div className="everafter-hero-rule mt-5 h-px bg-white/60" />
          </div>

          {/* Portfolio link with a subtle arrow movement on hover. */}
          <a
            href="#portfolio"
            className="group w-fit border-b border-white/70 pb-2 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-white"
          >
            Explore our work
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 inline-block h-3.5 w-3.5 align-middle transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
