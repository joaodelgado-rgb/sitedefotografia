import Gallery from '../components/Gallery'
import useScrollReveal from '../hooks/useScrollReveal'
import './Portfolio.css'

export default function Portfolio() {
  const sectionRef = useScrollReveal()

  return (
    <>
      <section className="page-banner">
        <div className="page-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80"
            alt=""
          />
          <div className="page-banner-overlay" />
        </div>
        <div className="container">
          <div className="page-banner-content">
            <span className="section-subtitle">Galeria</span>
            <h1 className="page-banner-title">Portfólio</h1>
            <p className="page-banner-description">
              Navegue por categorias e descubra os trabalhos que mais combinam com você.
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef}>
        <Gallery />
      </section>
    </>
  )
}
