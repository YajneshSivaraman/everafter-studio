
// Shared footer for the EVERAFTER studio demo.
export default function Footer() {
  // WhatsApp number in international format, without spaces or the + symbol.
  const whatsappNumber = '917010508392'

  // Create a message that is automatically filled in when WhatsApp opens.
  const whatsappMessage = encodeURIComponent(
    'Hi! I came across your wedding photography website and would like to enquire about your services and availability.',
  )

  // Build the complete WhatsApp enquiry link.
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer className="bg-[#29251f] px-6 py-16 text-[#f8f6f1] md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Main contact call to action. */}
        <div
          id="contact"
          className="flex flex-col gap-8 border-b border-white/20 pb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/60">
              Your story starts here
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Let's make something
              <br />
              <span className="italic">worth remembering.</span>
            </h2>
          </div>

          {/* Open WhatsApp with the prefilled enquiry message. */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
           className="w-fit border border-white/50 px-6 py-4 text-xs uppercase tracking-[0.18em] text-[#f8f6f1] transition-colors duration-300 hover:bg-white hover:!text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" >
            Start an enquiry <svg
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
</svg>
          </a>
        </div>

        {/* Brand and internal navigation links. */}
        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="text-lg font-semibold tracking-[0.2em]"
          >
            EVERAFTER
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.15em] text-white/70"
          >
            <a href="#story" className="transition-colors hover:text-white">
              Our story
            </a>

            <a href="#portfolio" className="transition-colors hover:text-white">
              Portfolio
            </a>

            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
          </nav>

          {/* Identify this site honestly as a concept demo. */}
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Everafter Studio · Demo concept
          </p>
        </div>
      </div>
    </footer>
  )
}
