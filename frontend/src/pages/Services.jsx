import servicesData from '../data/services'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  const sectionRef = useScrollReveal()

  return (
    <>
      <section className="page-banner">
        <div className="page-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
            alt=""
          />
          <div className="page-banner-overlay" />
        </div>
        <div className="container">
          <div className="page-banner-content">
            <span className="section-subtitle">Serviços</span>
            <h1 className="page-banner-title">Meus Serviços</h1>
            <p className="page-banner-description">
              Soluções completas em fotografia para todos os momentos.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle reveal">O que ofereço</span>
            <h2 className="section-header-title reveal">Serviços Profissionais</h2>
            <p className="section-header-description reveal">
              Cada serviço é personalizado para atender suas necessidades específicas.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                className={`service-card reveal reveal-delay-${(index % 3) + 1}`}
              >
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <service.icon size={28} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>

                <p className="service-card-description">
                  {service.description}
                </p>

                <ul className="service-card-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <span className="service-card-price">{service.price}</span>
                  <Link to="/contact" className="btn btn-outline">
                    Solicitar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <div className="services-cta-content">
            <h2>Não Encontrou o que Precisa?</h2>
            <p>
              Entre em contato para um orçamento personalizado. 
              Criamos pacotes sob medida para seu evento.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Fale Comigo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
