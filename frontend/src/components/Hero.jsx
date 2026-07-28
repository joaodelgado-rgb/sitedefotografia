import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    title: 'Momentos que Viram Eternidade',
    subtitle: 'Fotografia Profissional'
  },
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80',
    title: 'Arte em Cada Detalhe',
    subtitle: 'Casamentos & Eventos'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1600&q=80',
    title: 'Sua História em Imagens',
    subtitle: 'Retratos & Ensaios'
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero" aria-label="Destaque">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? 'hero-slide-active' : ''}`}
          aria-hidden={index !== current}
        >
          <div className="hero-image-wrapper">
            <img
              src={slide.image}
              alt=""
              className="hero-image"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-subtitle">{slides[current].subtitle}</span>
          <h1 className="hero-title">{slides[current].title}</h1>
          <p className="hero-description">
            Capturamos a essência de cada momento com olhar único e sensibilidade artística.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="btn btn-primary">
              Ver Portfólio
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <button
          className="hero-arrow hero-arrow-prev"
          onClick={prev}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === current ? 'hero-dot-active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="hero-arrow hero-arrow-next"
          onClick={next}
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-text">Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}

