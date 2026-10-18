
/* Import React hooks for scroll tracking and mobile menu state. */
import { useEffect, useState } from 'react'

/* Render a responsive navbar with subtle cinematic interactions. */
export default function Navbar() {
  // Track whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false)

  // Track whether the page has scrolled away from the top.
  const [scrolled, setScrolled] = useState(false)

  // Update the navbar appearance while scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    // Remove the listener when the navbar unmounts.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu after a navigation link is selected.
  const closeMenu = () => setMenuOpen(false)

  // Shared styling for desktop navigation links.
  const navLinkClass =
    'everafter-nav-link transition-colors duration-300 hover:opacity-70'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f6f1]/95 text-stone-900 shadow-sm backdrop-blur-md'
          : 'bg-transparent text-white'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        {/* Studio wordmark. */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-20 text-xl font-semibold tracking-[0.2em] transition-opacity duration-300 hover:opacity-70"
        >
          EVERAFTER
        </a>

        {/* Desktop navigation with animated underline effects. */}
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          <a href="#story" className={navLinkClass}>
            Our Story
          </a>
          <a href="#portfolio" className={navLinkClass}>
            Portfolio
          </a>
          <a href="#services" className={navLinkClass}>
            Services
          </a>
        </div>

        {/* Desktop contact button with a smooth color transition. */}
        

{/* Desktop contact button with explicit, readable hover colors. */}
<a
  href="#contact"
  className={`hidden border px-4 py-3 text-xs uppercase tracking-widest transition-colors duration-300 md:inline-block ${
    scrolled
      ? 'border-stone-900 bg-transparent text-stone-900 hover:!bg-stone-900 hover:!text-white'
      : 'border-white/70 bg-transparent text-white hover:!bg-white hover:!text-stone-900'
  }`}
>
  Let&apos;s Talk
</a>



        {/* Mobile hamburger button transforms into an X when opened. */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-20 flex h-11 w-11 shrink-0 items-center justify-center border border-current/60 transition-colors duration-300 md:hidden"
        >
          {/* Three lines animate into the close icon. */}
          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
              menuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          />

          <span
            className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <span
            className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
              menuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          />
        </button>

        {/* Mobile navigation panel slides down and fades into view. */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-full border-t border-stone-300 bg-[#f8f6f1] px-6 text-stone-900 shadow-xl transition-[opacity,transform,visibility] duration-300 ease-out md:hidden ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0'
          }`}
        >
          <div
            className={`flex flex-col gap-6 py-7 text-xs uppercase tracking-[0.2em] transition-[opacity,transform] duration-300 ${
              menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
          >
            <a href="#story" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              Our Story
            </a>
            <a href="#portfolio" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              Portfolio
            </a>
            <a href="#services" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              Services
            </a>
            <a href="#contact" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              Let&apos;s Talk
              {/* Small arrow adds a consistent visual detail. */}
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
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
