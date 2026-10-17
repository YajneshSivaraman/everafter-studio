
/* Import React state and effects for the interactive photo viewer. */
import { useEffect, useState } from 'react'

// Each object represents one featured wedding story.
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

// Reusable arrow icon to keep the design consistent.
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

// Render the featured portfolio and interactive lightbox.
export default function Portfolio() {
  // Store the index of the enlarged image, or null when closed.
  const [activeStoryIndex, setActiveStoryIndex] = useState(null)

  // Get the selected story from its index.
  const activeStory =
    activeStoryIndex === null ? null : stories[activeStoryIndex]

  // Support Escape, ArrowRight, and ArrowLeft while the viewer is open.
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

    // Remove the listener when the viewer closes or unmounts.
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeStoryIndex])

  // Move to the next photograph, wrapping to the first one.
  const showNext = () => {
    setActiveStoryIndex(
      (current) => (current + 1) % stories.length,
    )
  }

  // Move to the previous photograph, wrapping to the last one.
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
          {/* Editorial introduction to the gallery. */}
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

          {/* Responsive gallery with one featured image and two smaller stories. */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {stories.map((story, index) => (
              <article
                key={story.number}
                className={story.layout === 'large' ? 'md:col-span-2' : ''}
              >
                {/* Clicking a photograph opens the full-screen viewer. */}
                <button
                  type="button"
                  onClick={() => setActiveStoryIndex(index)}
                  aria-label={`Enlarge photograph: ${story.title}`}
                  className="group relative block w-full overflow-hidden bg-stone-200 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-800"
                >
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                      story.layout === 'large'
                        ? 'h-[260px] sm:h-[360px] md:h-[560px]'
                        : 'h-[280px] sm:h-[320px] md:h-[420px]'
                    }`}
                  />

                  {/* Soft gradient keeps the story number readable. */}
                  <span className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

                  {/* Story number in the upper-left corner. */}
                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white">
                    {story.number}
                  </span>

                  {/* Reveal a subtle view-photo label on hover or keyboard focus. */}
                  <span className="absolute bottom-5 right-5 translate-y-2 border border-white/70 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    View photograph
                    <ArrowIcon />
                  </span>
                </button>

                {/* Story title and category below each image. */}
                <div className="flex items-start justify-between gap-4 py-5">
                  <div>
                    <h3 className="font-serif text-2xl text-stone-900 md:text-3xl">
                      {story.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-500">
                      {story.category}
                    </p>
                  </div>

                  {/* Decorative arrow. */}
                  <span
                    aria-hidden="true"
                    className="pt-1 text-xl text-stone-500 transition-transform duration-300"
                  >
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Contact link for prospective wedding clients. */}
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block border-b border-stone-400 pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:border-stone-900"
            >
              Enquire about your wedding
              <ArrowIcon />
            </a>
          </div>

          {/* Disclosure that this is a concept portfolio. */}
          <p className="mt-10 text-[10px] uppercase tracking-[0.18em] text-stone-400">
            Selected imagery · Concept portfolio
          </p>
        </div>
      </section>

      {/* Full-screen photograph viewer, shown after an image is selected. */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photograph viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/95 p-3 backdrop-blur-sm sm:p-5 md:p-10"
          onClick={() => setActiveStoryIndex(null)}
        >
          {/* Keep the entire viewer within the available viewport height. */}
          <div
            className="flex h-[calc(100dvh-1.5rem)] max-h-[900px] w-full max-w-6xl flex-col sm:h-[calc(100dvh-2.5rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button stays inside the visible screen. */}
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

            {/* Image stage anchors the previous and next buttons. */}
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
              {/* Scale the photograph without cropping or overflowing the screen. */}
              <img
                src={activeStory.image}
                alt={activeStory.alt}
                className="h-auto w-auto max-h-full max-w-full object-contain"
              />

              {/* Previous photograph button. */}
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photograph"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/50 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-3 md:-left-14"
              >
                ‹
              </button>

              {/* Next photograph button. */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Next photograph"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/50 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3 md:-right-14"
              >
                ›
              </button>
            </div>

            {/* Caption and image position remain visible below the photograph. */}
            <div className="flex w-full shrink-0 items-end justify-between gap-4 pt-3 text-white sm:pt-5">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {activeStory.number} / {String(stories.length).padStart(2, '0')}
                </p>

                <h3 className="mt-1 break-words font-serif text-xl sm:text-2xl md:text-3xl">
                  {activeStory.title}
                </h3>

                <p className="mt-1 text-xs tracking-wider text-white/60">
                  {activeStory.category}
                </p>
              </div>

              {/* Compact position indicator. */}
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
