import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:h-24 lg:px-8">
        <a href="#home" onClick={closeMenu} className="shrink-0" aria-label="Nexcent home">
          <img src={logo} alt="Nexcent" className="h-8 w-auto md:h-10" />
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-11">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-ink-soft transition-colors duration-200 hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-full bg-brand-400 px-7 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-500 sm:inline-block"
          >
            Register Now
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-shell lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
            >
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-shell bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-6 py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-shell py-4 text-base font-medium text-ink-soft transition-colors duration-200 hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            onClick={closeMenu}
            className="mt-5 block rounded-full bg-brand-400 px-7 py-3.5 text-center text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-brand-500 sm:hidden"
          >
            Register Now
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
