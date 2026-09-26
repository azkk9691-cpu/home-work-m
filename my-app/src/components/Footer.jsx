import React from 'react'
import logo from '../assets/logo.png'

const columns = [
  {
    title: 'Product',
    links: ['Boardlists', 'Huddle', 'Email Digest', 'Analytics', 'Integrations'],
  },
  {
    title: 'Services',
    links: [
      'Community Management',
      'Content Creation',
      'Social Media Management',
      'SEO',
    ],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Resource Library', 'Help Center', 'Guidelines'],
  },
  {
    title: 'Get a demo',
    links: ['Book a demo', 'Careers', 'Privacy policy', 'Terms and conditions'],
  },
]

const socials = [
  {
    name: 'Facebook',
    path: 'M13.5 9H16V6h-2.5C11 6 9.5 7.5 9.5 10v2H7v3h2.5v6h3v-6H15l.5-3h-3v-2c0-.5.5-1 1-1z',
  },
  {
    name: 'Twitter',
    path: 'M18.9 3H21l-6.6 7.5L22 21h-6.1l-4.2-5.5L6.8 21H4.7l7-8L3 3h6.2l3.8 5 5.9-5zm-1 16h1.2L7.2 4.7H5.9L17.9 19z',
  },
  {
    name: 'Instagram',
    path: 'M12 7.8a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4zm0 6.9a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4zM17.3 7.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM20 12c0-2.2-.2-3.5-.5-4.4a2.3 2.3 0 0 0-.8-1.1 2.3 2.3 0 0 0-1.1-.8C16.7 4 15.4 4 12 4s-4.7 0-6.6.5a2.3 2.3 0 0 0-1.1.8 2.3 2.3 0 0 0-.8 1.1C4 8.5 4 9.8 4 12s0 3.5.5 4.4a2.3 2.3 0 0 0 .8 1.1 2.3 2.3 0 0 0 1.1.8c1.9.7 4.3.7 6.6.7s4.7 0 6.6-.7a2.3 2.3 0 0 0 1.1-.8 2.3 2.3 0 0 0 .8-1.1c.3-.9.5-2.2.5-4.4zm-2 4.6a1.3 1.3 0 0 1-.7.7c-1.6.6-4.2.4-5.3.4s-3.7.2-5.3-.4a1.3 1.3 0 0 1-.7-.7c-.6-1.6-.4-4.2-.4-5.3s-.2-3.7.4-5.3a1.3 1.3 0 0 1 .7-.7c1.6-.6 4.2-.4 5.3-.4s3.7-.2 5.3.4a1.3 1.3 0 0 1 .7.7c.6 1.6.4 4.2.4 5.3s.2 3.7-.4 5.3z',
  },
  {
    name: 'LinkedIn',
    path: 'M6.9 8.5v10H3.7v-10h3.2zM5.3 7.2a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7zM20.3 12.7c0-2.7-1.5-4-3.4-4-1.6 0-2.3.9-2.7 1.5v-1.2h-3.2v10h3.2v-5.5c0-1.4.3-2.8 2-2.8s1.8 1.7 1.8 2.9v5.4h3.3v-5.3z',
  },
]

const Footer = () => {
  return (
    <footer id="pricing" className="bg-shell">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <img src={logo} alt="Nexcent" className="h-9 w-auto" />
            <p className="mt-5 max-w-[240px] text-[15px] leading-relaxed text-ink-soft">
              Make the most of your digital life.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href="#home"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors duration-200 hover:bg-brand-400 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[15px] font-semibold text-ink">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-[15px] text-ink-soft transition-colors duration-200 hover:text-brand-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-shell-dark pt-6 text-sm text-ink-muted md:flex-row">
          <p>&copy; 2026 Nexcent. All rights reserved.</p>
          <p>Designed with care for growing communities.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
