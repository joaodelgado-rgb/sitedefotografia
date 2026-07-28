import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'
import { Camera, Heart, Shield, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Home.css'

const features = [
  {
    icon: Camera,
    title: 'Equipamento Profissional',
    description: 'Câmeras de última geração e lentes profissionais para resultados excepcionais.'
  },
  {
    icon: Heart,
    title: 'Paixão pela Arte',
    description: 'Cada foto é feita com dedicação e amor pelo que fazemos.'
  },
  {
    icon: Shield,
    title: 'Compromisso Total',
    description: 'Garantia de satisfação e entrega no prazo combinado.'
  },
  {
    icon: Sparkles,
    title: 'Edição Premium',
    description: 'Pós-produção profissional com tratamento de cor e retoque.'
  }
]

const stats = [
  { number: '500+', label: 'Projetos Realizados' },
  { number: '150+', label: 'Clientes Satisfeitos' },
  { number: '8+', label: 'Anos de Experiência' },
  { number: '98%', label: 'Taxa de Aprovação' }
]

export default function Home() {
  const sectionRef = useScrollReveal()

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="section features" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Por que nos escolher</span>
            <h2 className="section-header-title">Excelência em Cada Clique</h2>
            <p className="section-header-description">
              Combinamos técnica, criatividade e paixão para criar imagens que contam histórias.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card reveal reveal-delay-${index + 1}`}
              >
                <div className="feature-card-icon">
                  <feature.icon size={28} />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section (imported Gallery) */}
      <Gallery />

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Vamos Trabalhar Juntos?</h2>
            <p className="cta-description">
              Entre em contato para orçamentos, dúvidas ou para agendar sua sessão.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
