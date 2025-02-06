import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
              <div className="embla__slide">
                  <div className='bg-yellow-500'></div>
        </div>
        <div className="embla__slide"></div>
        <div className="embla__slide"></div>
      </div>
    </div>
  )
}
