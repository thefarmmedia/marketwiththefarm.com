'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    stars: 5,
    quote: "Before The Farm, I was spending $3,000/month on ads and getting maybe 4–5 leads. Now I'm getting 40+ leads a month and my cost per lead dropped to under $30. These guys actually know what they're doing.",
    name: 'Marcus T.',
    company: 'Marcus T. Concrete Coatings',
    location: 'Springfield, MO',
    result: '40+ leads/mo',
  },
  {
    stars: 5,
    quote: "Our Google reviews went from 11 to 94 in four months. We're now the highest-rated HVAC company in our market. The phone doesn't stop ringing from April through September.",
    name: 'Derek W.',
    company: 'Westside Heating & Cooling',
    location: 'Joplin, MO',
    result: '94 Google reviews',
  },
  {
    stars: 5,
    quote: "I tried two other agencies before finding The Farm. The difference is night and day. They built us a website that actually converts, got us ranking on Google Maps, and set up follow-up automations that close jobs while I'm on the roof.",
    name: 'Ryan K.',
    company: 'K-Roofing Solutions',
    location: 'Nixa, MO',
    result: '#1 in Google Maps',
  },
  {
    stars: 5,
    quote: "We went from zero online presence to 38 booked jobs in our first month with The Farm. I was skeptical about marketing but now I turn down work because we're too busy. That's a good problem to have.",
    name: 'James O.',
    company: 'OzarkShine Pressure Washing',
    location: 'Republic, MO',
    result: '38 jobs in month 1',
  },
  {
    stars: 5,
    quote: "The CRM automation alone was worth every penny. We used to lose leads because nobody followed up fast enough. Now every lead gets a text in under a minute, and our close rate went from 22% to 41%.",
    name: 'Chris M.',
    company: 'Metro Electric',
    location: 'Springfield, MO',
    result: 'Close rate: 22% → 41%',
  },
]

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect) }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Subtle bg accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,95,0,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
              <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">What Contractors Say</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.05] tracking-tight">
              Don&apos;t Take<br />
              <span className="gradient-text">Our Word For It.</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-500 text-lg leading-relaxed max-w-md lg:ml-auto">
              Real contractors. Real markets. Real results they&apos;ll tell you about themselves.
            </p>
            {/* Nav arrows */}
            <div className="flex items-center gap-3 mt-6 lg:justify-end">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:border-[#FF5F00] hover:text-[#FF5F00] transition-all duration-200 disabled:opacity-30"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:border-[#FF5F00] hover:text-[#FF5F00] transition-all duration-200 disabled:opacity-30"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden -mx-2" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-none w-[90vw] sm:w-[480px] lg:w-[440px]"
              >
                <div className="h-full bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl p-7 flex flex-col hover:border-[#FF5F00]/20 transition-all duration-300 group card-hover">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array(t.stars).fill(null).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-[#FF5F00] text-[#FF5F00]" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 text-[1.0625rem] leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Result badge */}
                  <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-lg px-3 py-1.5 mb-5 self-start">
                    <span className="text-[#FF5F00] text-xs font-bold uppercase tracking-wider">{t.result}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-[#1E1E1E] pt-5">
                    <div className="w-10 h-10 rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#FF5F00] font-black text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{t.name}</div>
                      <div className="text-gray-600 text-xs">{t.company} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full ${
                selectedIndex === i
                  ? 'w-6 h-2 bg-[#FF5F00]'
                  : 'w-2 h-2 bg-[#2A2A2A] hover:bg-[#FF5F00]/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
