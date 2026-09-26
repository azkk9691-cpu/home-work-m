import React from 'react'
import hero from '../assets/hero.png'
import spending from '../assets/spending.png'
import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'
import client5 from '../assets/client-5.png'
import client6 from '../assets/client-6.png'
import client7 from '../assets/client-7.png'

const clients = [
  { src: client1, alt: 'Client logo 1' },
  { src: client2, alt: 'Client logo 2' },
  { src: client3, alt: 'Client logo 3' },
  { src: client4, alt: 'Client logo 4' },
  { src: client5, alt: 'Client logo 5' },
  { src: client6, alt: 'Client logo 6' },
  { src: client7, alt: 'Client logo 7' },
]

const communityCards = [
  {
    title: 'Boardlists',
    text: 'Organize your contacts into lists and boards for better outreach and collaboration.',
    icon: (
      <path
        d="M4 6h16M4 12h16M4 18h10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Analytics',
    text: 'Track engagement, spot trends and see exactly what keeps your community active.',
    icon: (
      <>
        <path d="M4 20h16" strokeLinecap="round" />
        <path
          d="M7 20v-6M12 20V8M17 20v-9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    title: 'Integrations',
    text: 'Connect the tools you already use and bring your whole workflow in one place.',
    icon: (
      <path
        d="M9 3v5M15 3v5M6 8h12v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8ZM12 19v3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

const Main = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-14 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-[34px] font-semibold leading-[1.2] tracking-tight text-ink md:text-[44px] lg:text-[52px]">
              Lessons and insights
              <br className="hidden lg:block" />{' '}
              <span className="inline-block rounded-md bg-brand-200 px-3 py-1">
                from 8 years
              </span>
            </h1>
            <p className="mt-7 max-w-[520px] text-base leading-relaxed text-ink-soft md:text-[17px]">
              Join HubSpot's community of 30,000+ entrepreneurs. Get the latest
              insights on marketing, sales and business growth, and learn from
              people who have been there before.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={hero}
              alt="Illustration of people learning together"
              className="w-full max-w-[540px] select-none object-contain"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section id="community" className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-shell-dark" />
            <h2 className="text-base font-semibold tracking-wide text-ink-soft md:text-lg">
              Our Clients
            </h2>
            <span className="h-px flex-1 bg-shell-dark" />
          </div>

          <ul className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-9 sm:grid-cols-4 lg:grid-cols-7 lg:gap-8">
            {clients.map((client) => (
              <li key={client.alt} className="flex items-center justify-center">
                <img
                  src={client.src}
                  alt={client.alt}
                  loading="lazy"
                  className="max-h-9 w-auto max-w-[110px] object-contain opacity-60 transition-opacity duration-200 hover:opacity-100 md:max-h-11"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="features" className="py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="max-w-[520px] text-[28px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
            Manage your entire community in one place
          </h2>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
            {communityCards.map((card) => (
              <li key={card.title}>
                <article className="h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-shell text-ink transition-colors duration-200 hover:bg-brand-100">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      aria-hidden="true"
                    >
                      {card.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {card.text}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="blog" className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 rounded-3xl bg-shell px-7 py-12 text-center md:py-16 lg:flex-row lg:gap-16 lg:px-16 lg:text-left">
            <div className="flex-1">
              <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink md:text-[36px]">
                Pixelgrade information
              </h2>
              <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-ink-soft md:text-base">
                Create, share and track your spending in a single workspace.
                Pixelgrade keeps your team's budgets, invoices and reports
                organized, so you always know where your money goes.
              </p>
              <a
                href="#features"
                className="mt-8 inline-block rounded-full bg-brand-400 px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-500"
              >
                Learn More
              </a>
            </div>

            <div className="flex-1">
              <img
                src={spending}
                alt="Illustration of spending and budgeting"
                loading="lazy"
                className="mx-auto w-full max-w-[520px] select-none object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
