// src/components/Services.jsx

// Store each service as data so packages can be updated independently.
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

// Reusable services section for the studio website.
export default function Services() {
  return (
    <section id="services" className="bg-[#eeebe4] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Introductory heading */}
        <div className="mb-14 max-w-2xl md:mb-20">
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
        </div>

        {/* Responsive service cards */}
        <div className="grid grid-cols-1 border-t border-stone-400 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="border-b border-stone-400 py-8 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              {/* Service number */}
              <p className="text-xs tracking-widest text-stone-500">
                {service.number}
              </p>

              {/* Service name */}
              <h3 className="mt-8 font-serif text-2xl text-stone-900 md:text-3xl">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="mt-4 min-h-20 text-sm leading-7 text-stone-600">
                {service.description}
              </p>

              {/* Short service label */}
              <p className="mt-7 text-xs uppercase tracking-[0.16em] text-stone-800">
                {service.detail}
              </p>

              {/* Lead visitors toward the enquiry section */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 text-sm transition hover:gap-5"
              >
                Discuss your plans <span aria-hidden="true"><svg
  aria-hidden="true"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="inline-block ml-2 h-3.5 w-3.5 align-middle"
>
  <path d="M7 17 17 7" />
  <path d="M8 7h9v9" />
</svg></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}