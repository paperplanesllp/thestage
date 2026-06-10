import React, { useEffect, useState } from 'react'
import EventDetail from '../eventspage/events_components/EventDetail'
import eventsBackground from '../../assets/5th ed pic.PNG'

const EventsHero = () => {
  const [heroEvent, setHeroEvent] = useState(null)

  useEffect(() => {
    const fetchHeroEvent = async () => {
      try {
        const response = await fetch('/api/admin/public-events')
        if (!response.ok) return

        const data = await response.json()
        if (!data.success || !Array.isArray(data.events)) return

        const now = new Date()
        const upcomingEvents = data.events
          .filter(event => new Date(event.date) > now)
          .sort((a, b) => new Date(a.date) - new Date(b.date))

        if (upcomingEvents.length > 0) {
          const nextEvent = upcomingEvents[0]
          const description =
            nextEvent.sections?.find(s => s.type === 'paragraphs')?.paragraphs?.[0] || ''

          setHeroEvent({
            title: nextEvent.title,
            description,
            date: nextEvent.date,
            time: nextEvent.time,
            location: nextEvent.location,
          })
        }
      } catch {
        // keep hero event blank if fetch fails
      }
    }

    fetchHeroEvent()
  }, [])

  const heroTitle = heroEvent?.title || 'Should art serve a purpose?'
  const heroDescription =
    heroEvent?.description ||
    'A probing conversation on the role of art in society, the artist’s responsibility, and the possibility of meaning beyond function.'
  const heroDate = heroEvent?.date
    ? new Date(heroEvent.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'March 26, 2025'
  const heroTime = heroEvent?.time || '7:30 PM'
  const heroVenue = heroEvent?.location || 'Digital Salon, The Stage'

  return (
    <section className="relative overflow-hidden">
      <img
        src={eventsBackground}
        alt={heroTitle}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-12">
        <div className="max-w-4xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-100">
            Event Spotlight
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            {heroDescription}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[32px] bg-white/10 px-5 py-4 text-sm text-white shadow-xl backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.24em] text-amber-100">
                Date
              </div>
              <div className="mt-2 text-base font-semibold text-white">{heroDate}</div>
            </div>
            <div className="rounded-[32px] bg-white/10 px-5 py-4 text-sm text-white shadow-xl backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.24em] text-amber-100">
                Time
              </div>
              <div className="mt-2 text-base font-semibold text-white">{heroTime}</div>
            </div>
            <div className="rounded-[32px] bg-white/10 px-5 py-4 text-sm text-white shadow-xl backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.24em] text-amber-100">
                Venue
              </div>
              <div className="mt-2 text-base font-semibold text-white">{heroVenue}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Events = () => {
  return (
    <>
      <EventsHero />
      <EventDetail />
    </>
  )
}

export default Events