'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    stars: 5,
    quote: "Before The Farm, I was spending money on ads and had no idea where my leads were coming from. Now I know exactly what's working, my cost per lead dropped dramatically, and the phone actually rings. These guys know the epoxy business.",
    name: 'Show Me Epoxy',
    company: 'Show Me Epoxy',
    location: 'Missouri',
    result: 'Leads up, cost down',
  },
  {
    stars: 5,
    quote: "The website they built for us converts way better than anything we had before. We're ranking on Google Maps, the reviews keep coming in automatically, and we stay booked out weeks in advance now.",
    name: 'HH Next Level Epoxy',
    company: 'HH Next Level Epoxy',
    location: 'Missouri',
    result: 'Booked weeks out',
  },
  {
    stars: 5,
    quote: "I tried running ads on my own and wasted thousands. The Farm rebuilt everything from the ground up — website, Google profile, ads — and within 60 days we had more leads than we could handle.",
    name: 'Twin Lakes Epoxy',
    company: 'Twin Lakes Epoxy',
    location: 'Missouri',
    result: 'More leads than we could handle',
  },
  {
    stars: 5,
    quote: "The Farm understands the concrete coating business. They didn't just build a generic website — they built something that speaks directly to homeowners ready to buy. Our close rate went up because the leads are better quality.",
    name: 'Crete Creations LLC',
    company: 'Crete Creations LLC',
    location: 'Missouri',
    result: 'Higher quality leads',
  },
  {
    stars: 5,
    quote: "Working with The Farm was a game changer. They handled the marketing side completely so we could focus on the work. The automation means no lead ever falls through the cracks — every inquiry gets followed up instantly.",
    name: 'Shippmates Epoxy',
    company: 'Shippmates Epoxy',
    location: 'Missouri',
    result: 'Zero leads lost',
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
