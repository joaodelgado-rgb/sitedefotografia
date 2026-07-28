import { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate(currentIndex - 1)
    if (e.key === 'ArrowRight' && hasNext) onNavigate(currentIndex + 1)
  }, [currentIndex, hasPrev, hasNext, onClose, onNavigate])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  const currentImage = images[currentIndex]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização da imagem">
      <div className="lightbox-backdrop" onClick={onClose} />

      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Fechar lightbox"
      >
        <X size={24} />
      </button>

      <div className="lightbox-container">
        <div className="lightbox-image-wrapper">
          <img
            src={currentImage.src}
            alt={currentImage.caption}
            className="lightbox-image"
          />

          {(currentImage.caption || currentImage.description) && (
            <div className="lightbox-caption">
              <h3 className="lightbox-caption-title">{currentImage.caption}</h3>
              {currentImage.description && (
                <p className="lightbox-caption-description">{currentImage.description}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="lightbox-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {hasPrev && (
        <button
          className="lightbox-nav lightbox-nav-prev"
          onClick={() => onNavigate(currentIndex - 1)}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {hasNext && (
        <button
          className="lightbox-nav lightbox-nav-next"
          onClick={() => onNavigate(currentIndex + 1)}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div className="lightbox-thumbnails">
        {images.map((img, index) => (
          <button
            key={index}
            className={`lightbox-thumb ${index === currentIndex ? 'lightbox-thumb-active' : ''}`}
            onClick={() => onNavigate(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          >
            <img src={img.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

