import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-dark-card border border-dark-border hover:border-accent rounded-full shadow-lg transition-all hover:bg-dark-elevated group"
      aria-label="Back to top"
    >
      <FaArrowUp size={14} className="text-dark-muted group-hover:text-accent transition-colors" />
    </button>
  )
}
