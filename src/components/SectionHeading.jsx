// Reusable heading for the portfolio, services, and story sections.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {/* Small uppercase label above the main heading. */}
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-stone-500">
        {eyebrow}
      </p>

      {/* Main editorial heading passed in through props. */}
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-6xl">
        {title}
      </h2>

      {/* Optional supporting description. */}
      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}