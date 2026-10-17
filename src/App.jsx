// Import the independent sections that make up our website.
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Footer from './components/Footer'

// App composes the individual components into one complete page.
export default function App() {
  return (
    <>
      {/* Navigation overlays the hero image. */}
      <Navbar />

      <main>
        {/* First impression: our photography and brand message. */}
        <Hero />

        {/* Short brand story gives visitors context about the studio. */}
        <section id="story" className="bg-[#eee9df] px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-end">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
              A little about us
            </p>

            <div>
              <h2 className="font-serif text-3xl leading-snug text-stone-900 md:text-5xl">
                We don't just photograph a wedding.
                <span className="italic"> We remember how it felt.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
                We believe the most meaningful photographs are often the
                unplanned ones: a quiet glance, a familiar laugh, a hand
                held just a little tighter. Our approach is thoughtful,
                personal, and centred around your story.
              </p>
            </div>
          </div>
        </section>

        {/* Featured wedding stories rendered from an array of data. */}
        <Portfolio />

        {/* Photography and film offerings. */}
        <Services />
      </main>

      {/* Final enquiry call to action and site navigation. */}
      <Footer />
    </>
  )
}