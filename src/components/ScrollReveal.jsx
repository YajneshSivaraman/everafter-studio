
import { useEffect, useRef, useState } from 'react'

// Reveal content whenever it enters the viewport, and hide it again
// when it leaves so the animation can replay on the next visit.
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    // Observe both entry and exit instead of revealing only once.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    observer.observe(element)

    // Clean up when the component is removed.
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
