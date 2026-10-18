
import ScrollReveal from './ScrollReveal'
import { useEffect, useState } from 'react'

// Featured wedding stories shown in the portfolio gallery.
const stories = [
  {
    number: '01',
    title: 'A day in the hills',
    category: 'Destination wedding',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=90',
    alt: 'Bride and groom celebrating their wedding',
    layout: 'large',
  },
  {
    number: '02',
    title: 'The quiet in-between',
    category: 'Intimate moments',
    image:
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=90',
    alt: 'A couple sharing a moment on their wedding day',
    layout: 'small',
  },
  {
    number: '03',
    title: 'Golden hour, always',
    category: 'Couple portraits',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90',
    alt: 'Romantic wedding portrait',
    layout: 'small',
  },
]

// Reusable arrow icon for gallery links and buttons.
function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2 inline-block h-3.5 w-3.5 align-middle"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

// Portfolio gallery and full-screen photograph viewer.
export default function Portfolio() {
  // Null means the lightbox is closed; otherwise, store the selected story index.
  const [activeStoryIndex, setActiveStoryIndex] = useState(null)

  // Get the selected story for the lightbox.
  const activeStory =
    activeStoryIndex === null ? null : stories[activeStoryIndex]

  // Support keyboard navigation while the lightbox is open.
  useEffect(() => {
    if (activeStoryIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveStoryIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveStoryIndex(
          (current) => (current + 1) % stories.length,
        )
      }

      if (event.key === 'ArrowLeft') {
        setActiveStoryIndex(
          (current) =>
            (current - 1 + stories.length) % stories.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Clean up the listener when the lightbox closes.
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeStoryIndex])

  // Navigate forward through the photographs.
  const showNext = () => {
    setActiveStoryIndex(
      (current) => (current + 1) % stories.length,
    )
  }

  // Navigate backward through the photographs.
  const showPrevious = () => {
    setActiveStoryIndex(
      (current) =>
        (current - 1 + stories.length) % stories.length,
    )
  }

  return (
    <>
      {/* Main portfolio section. */}
      <section
        id="portfolio"
        className="bg-[#f8f6f1] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Portfolio introduction. */}
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
                A collection of stories
              </p>

              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                Every love story
                <br />
                deserves to be{' '}
                <span className="italic">remembered.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Real feelings, thoughtful frames, and the fleeting
              moments that become part of your story.
            </p>
          </div>

          {/* Responsive gallery: one wide story and two smaller stories. */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {stories.map((story, index) => (
              <ScrollReveal
                key={story.number}
                as="article"
                delay={index * 120}
                className={`portfolio-card ${
                  story.layout === 'large' ? 'md:col-span-2' : ''
                }`}
              >
                {/* Clicking an image opens the full-screen viewer. */}
                <button
                  type="button"
                  onClick={() => setActiveStoryIndex(index)}
                  aria-label={`Enlarge photograph: ${story.title}`}
                  className="portfolio-image-frame group block w-full bg-stone-200 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-800"
                >
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    className={`w-full object-cover ${
                      story.layout === 'large'
                        ? 'h-[260px] sm:h-[360px] md:h-[560px]'
                        : 'h-[280px] sm:h-[320px] md:h-[420px]'
                    }`}
                  />

                  {/* Gradient improves the number's readability. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent"
                  />

                  <span className="pointer-events-none absolute left-5 top-5 text-xs tracking-widest text-white">
                    {story.number}
                  </span>

                  {/* Appears when the image is hovered or keyboard-focused. */}
                  <span className="pointer-events-none absolute bottom-5 right-5 z-10 translate-y-2 border border-white/70 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    View photograph
                    <ArrowIcon />
                  </span>
                </button>

                {/* Photograph title and category. */}
                <div className="portfolio-caption flex items-start justify-between gap-4 py-5">
                  <div>
                    <h3 className="font-serif text-2xl text-stone-900 md:text-3xl">
                      {story.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                      {story.category}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pt-1 text-xl text-stone-500 transition-transform duration-300"
                  >
                    <ArrowIcon />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Link to the contact section. */}
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block border-b border-stone-400 pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:border-stone-900"
            >
              Enquire about your wedding
              <ArrowIcon />
            </a>
          </div>

          {/* Identify this as a concept portfolio. */}
          <p className="mt-10 text-[10px] uppercase tracking-[0.18em] text-stone-400">
            Selected imagery · Concept portfolio
          </p>
        </div>
      </section>

      {/* Full-screen photograph viewer. */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photograph viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/95 p-3 backdrop-blur-sm sm:p-5 md:p-10"
          onClick={() => setActiveStoryIndex(null)}
        >
          <div
            className="flex h-[calc(100dvh-1.5rem)] max-h-[900px] w-full max-w-6xl flex-col sm:h-[calc(100dvh-2.5rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button. */}
            <div className="flex w-full shrink-0 justify-end pb-2">
              <button
                type="button"
                onClick={() => setActiveStoryIndex(null)}
                aria-label="Close photograph viewer"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/40 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ×
              </button>
            </div>

            {/* Image stage with previous and next controls. */}
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              <img
                src={activeStory.image}
                alt={activeStory.alt}
                className="h-auto w-auto max-h-full max-w-full object-contain"
              />

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photograph"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/50 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-3 md:-left-14"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next photograph"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/50 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3 md:-right-14"
              >
                ›
              </button>
            </div>

            {/* Caption and current photograph position. */}
            <div className="flex w-full shrink-0 items-end justify-between gap-4 pt-3 text-white sm:pt-5">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {activeStory.number} /{' '}
                  {String(stories.length).padStart(2, '0')}
                </p>

                <h3 className="mt-1 break-words font-serif text-xl sm:text-2xl md:text-3xl">
                  {activeStory.title}
                </h3>

                <p className="mt-1 text-xs tracking-wider text-white/60">
                  {activeStory.category}
                </p>
              </div>

              <p className="shrink-0 pb-1 text-xs text-white/60">
                {activeStoryIndex + 1} of {stories.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
