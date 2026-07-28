import { useState, useMemo } from 'react'
import portfolioData, { categories } from '../data/portfolio'
import Lightbox from './Lightbox'
import './Gallery.css'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return portfolioData
    return portfolioData.filter(item => item.category === activeCategory)
  }, [activeCategory])

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const lightboxItems = filteredItems.map(item => ({
    src: item.image,
    caption: item.title,
    description: item.description
  }))

  return (
    <section className="gallery section" id="portfolio">
      <div className="container">
        <div className="gallery-header">
          <span className="section-subtitle">Portfólio</span>
          <h2 className="gallery-title">Meus Trabalhos</h2>
          <p className="gallery-description">
            Explore minha galeria e descubra histórias contadas através das lentes.
          </p>
        </div>

        <div className="gallery-filters" role="tablist" aria-label="Filtrar por categoria">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gallery-filter ${activeCategory === cat.id ? 'gallery-filter-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid" role="tabpanel">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir ${item.title}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <div className="gallery-item-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span className="gallery-item-category">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="gallery-empty">
            <p>Nenhum trabalho encontrado nesta categoria.</p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}

