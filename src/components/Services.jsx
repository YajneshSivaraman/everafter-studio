
/* Store each service as data so packages can be updated independently. */
const services = [
  {
    number: '01',
    title: 'Wedding photography',
    description:
      'The ceremony, the celebrations, and every little moment in between—documented with care.',
    detail: 'Full-day storytelling',
  },
  {
    number: '02',
    title: 'Wedding films',
    description:
      'A thoughtfully crafted film that brings the voices, movement, and feeling of your day back to life.',
    detail: 'Cinematic films',
  },
  {
    number: '03',
    title: 'Pre-wedding stories',
    description:
      'Relaxed portraits that celebrate your connection before the wedding day arrives.',
    detail: 'Location-based sessions',
  },
]

/* Reusable services section with cinematic scroll animations. */
import ScrollReveal from './ScrollReveal'

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#eeebe4] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Reveal the heading and introduction together. */}
        <ScrollReveal className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
            What we do
          </p>

          <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            Made for the moments
            <br />
            <span className="italic">that matter.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-stone-600">
            Thoughtful photography and films, shaped around your people,
            your traditions, and the way you want to remember it all.
          </p>
        </ScrollReveal>

        {/* Reveal each service independently with a slight delay. */}
        <div className="grid grid-cols-1 border-t border-stone-400 md:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.number}
              as="article"
              delay={index * 140}
              className="group border-b border-stone-400 py-8 transition-transform duration-500 hover:-translate-y-1 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              {/* Service number becomes slightly darker on hover. */}
              <p className="text-xs tracking-widest text-stone-500 transition-colors duration-300 group-hover:text-stone-900">
                {service.number}
              </p>

              {/* Service title remains elegant and readable. */}
              <h3 className="mt-8 font-serif text-2xl text-stone-900 md:text-3xl">
                {service.title}
              </h3>

              {/* Service description. */}
              <p className="mt-4 min-h-20 text-sm leading-7 text-stone-600">
                {service.description}
              </p>

              {/* Short service label. */}
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-stone-800">
                {service.detail}
              </p>

              {/* Contact link with a smooth arrow movement on hover. */}
              <a
                href="#contact"
                className="group/link mt-8 inline-flex items-center gap-3 text-sm"
              >
                Discuss your plans
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
