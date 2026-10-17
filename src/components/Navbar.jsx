// Import React state and effect hooks.
import { useEffect, useState } from 'react'

// Render a responsive navbar that changes appearance on scroll.
export default function Navbar() {
  // Track whether the mobile menu is open.
  const [menuOpen, setMenuOpen] = useState(false)

  // Track whether the page has scrolled past the hero's top.
  const [scrolled, setScrolled] = useState(false)

  // Watch the scroll position and update navbar styling.
  useEffect(() => {
    // Check if the page has moved down from the top.
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    // Register the scroll listener.
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Set the initial state and remove the listener when unmounted.
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the menu whenever a navigation link is selected.
  const closeMenu = () => setMenuOpen(false)

  // Keep the rest of your existing JSX below.
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#f8f6f1]/95 text-stone-900 shadow-sm backdrop-blur-md'
      : 'bg-transparent text-white'
  }`}>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        {/* Studio wordmark */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-20 text-xl font-semibold tracking-[0.2em]"
        >
          EVERAFTER
        </a>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] md:flex">
          <a href="#story" className="transition hover:text-white/70">
            Our Story
          </a>
          <a href="#portfolio" className="transition hover:text-white/70">
            Portfolio
          </a>
          <a href="#services" className="transition hover:text-white/70">
            Services
          </a>
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden border border-white/70 px-4 py-3 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black md:inline-block"
        >
          Let's Talk
        </a>

        {/* Mobile hamburger button */}
       {/* Mobile menu button: transforms into a clear X when opened. */}
<button
  type="button"
  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
  className={`relative z-20 flex h-11 w-11 shrink-0 items-center justify-center border transition-colors md:hidden ${
    scrolled
      ? 'border-stone-400 text-stone-900'
      : 'border-white/80 text-white'
  }`}
>
  {/* Three lines rotate into a properly aligned X. */}
  <span
    className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
      menuOpen ? 'rotate-45' : '-translate-y-1.5'
    }`}
  />

  <span
    className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 ${
      menuOpen ? 'opacity-0' : 'translate-y-0'
    }`}
  />

  <span
    className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 ${
      menuOpen ? '-rotate-45' : 'translate-y-1.5'
    }`}
  />
</button>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="absolute inset-x-0 top-full border-t border-white/20 bg-[#f8f6f1] text-stone-900 px-6 py-7 shadow-xl md:hidden">
            <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.2em]">
              <a href="#story" onClick={closeMenu}>
                Our Story
              </a>
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#contact" onClick={closeMenu}>
                Let's Talk <svg
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
          </div>
        )}
      </nav>
    </header>
  )
}