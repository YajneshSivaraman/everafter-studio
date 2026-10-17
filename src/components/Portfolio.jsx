
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

// Render the featured portfolio and interactive lightbox.
export default function Portfolio() {
  // Store the index of the currently enlarged image, or null when closed.
  const [activeStoryIndex, setActiveStoryIndex] = useState(null)

  // Derive the selected story from the current index.
  const activeStory =
    activeStoryIndex === null ? null : stories[activeStoryIndex]

  // Support Escape and arrow keys while the photo viewer is open.
  useEffect(() => {
    if (activeStoryIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveStoryIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveStoryIndex((current) => (current + 1) % stories.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveStoryIndex(
          (current) => (current - 1 + stories.length) % stories.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Remove the listener when the viewer closes or the component unmounts.
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeStoryIndex])

  // Move to the next photograph, wrapping back to the first one.
  const showNext = () => {
    setActiveStoryIndex((current) => (current + 1) % stories.length)
  }

  // Move to the previous photograph, wrapping to the last one.
  const showPrevious = () => {
    setActiveStoryIndex(
      (current) => (current - 1 + stories.length) % stories.length,
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
                deserves to be <span className="italic">remembered.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Real feelings, thoughtful frames, and the fleeting moments that
              become part of your story.
            </p>
          </div>

          {/* Responsive gallery with one featured image and two smaller stories. */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {stories.map((story, index) => (
              <article
                key={story.number}
                className={
                  story.layout === 'large'
                    ? 'md:col-span-2'
                    : ''
                }
              >
                {/* The image button opens the selected photograph in the viewer. */}
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
                        ? 'h-[320px] md:h-[560px]'
                        : 'h-[320px] md:h-[420px]'
                    }`}
                  />

                  {/* Soft gradient keeps the image number readable. */}
                  <span className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

                  {/* Story number in the upper-left corner. */}
                  <span className="absolute left-5 top-5 text-xs tracking-widest text-white">
                    {story.number}
                  </span>

                  {/* Reveal a subtle view-photo label on hover. */}
                  <span className="absolute bottom-5 right-5 translate-y-2 border border-white/70 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    View photograph ↗
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
                    className="pt-1 text-xl text-stone-500 transition-transform duration-300 hover:translate-x-1"
                  >
                    ↗
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
              Enquire about your wedding ↗
            </a>
          </div>

          {/* Honest disclosure that this portfolio is a concept demo. */}
          <p className="mt-10 text-[10px] uppercase tracking-[0.18em] text-stone-400">
            Selected imagery · Concept portfolio
          </p>
        </div>
      </section>

      {/* Full-screen photograph viewer, rendered only when a photo is selected. */}
      {activeStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photograph viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setActiveStoryIndex(null)}
        >
          {/* Viewer content stops backdrop clicks from closing it. */}
          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close button. */}
            <button
              type="button"
              onClick={() => setActiveStoryIndex(null)}
              aria-label="Close photograph viewer"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-white/40 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 md:-top-14"
            >
              ×
            </button>

            {/* Previous photograph control. */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photograph"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/20 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 md:-left-14"
            >
              ‹
            </button>

            {/* Next photograph control, vertically centered on the image. */}
<button
  type="button"
  onClick={showNext}
  aria-label="Next photograph"
  className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/50 bg-black/40 text-2xl text-white transition-colors hover:bg-white hover:text-stone-900 md:-right-14"
>
  ›
</button>

            {/* Enlarged image fits the available screen height. */}
            <img
              src={activeStory.image}
              alt={activeStory.alt}
              className="max-h-[72vh] w-full object-contain md:max-h-[78vh]"
            />

            {/* Caption updates as the selected image changes. */}
            <div className="mt-5 flex w-full items-end justify-between gap-4 text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {activeStory.number} / 0{stories.length}
                </p>

                <h3 className="mt-1 font-serif text-2xl md:text-3xl">
                  {activeStory.title}
                </h3>

                <p className="mt-1 text-xs tracking-wider text-white/60">
                  {activeStory.category}
                </p>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  )
}
