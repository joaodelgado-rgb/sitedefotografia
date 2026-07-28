import useScrollReveal from '../hooks/useScrollReveal'
import { Camera, Award, Users, MapPin } from 'lucide-react'
import './About.css'

const highlights = [
  {
    icon: Camera,
    title: '+8 Anos de Experiência',
    description: 'Desde 2016 transformando momentos em arte.'
  },
  {
    icon: Award,
    title: 'Prêmios Internacionais',
    description: 'Reconhecido em competições de fotografia mundial.'
  },
  {
    icon: Users,
    title: '+150 Clientes',
    description: 'Centenas de histórias capturadas com dedicação.'
  },
  {
    icon: MapPin,
    title: 'Atendimento Nacional',
    description: 'Disponível para viagens e eventos em todo Brasil.'
  }
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="page-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&q=80"
            alt=""
          />
          <div className="page-banner-overlay" />
        </div>
        <div className="container">
          <div className="page-banner-content">
            <span className="section-subtitle">Quem Sou</span>
            <h1 className="page-banner-title">Sobre Mim</h1>
            <p className="page-banner-description">
              Conheça um pouco mais sobre minha trajetória e paixão pela fotografia.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section about-section" ref={sectionRef}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                  alt="Fotógrafo profissional"
                />
                <div className="about-image-badge">
                  <Camera size={20} />
                  <span>Fotógrafo Profissional</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <span className="section-subtitle reveal">Minha História</span>
              <h2 className="about-title reveal">
                Capturando Emoções Através das Lentes
              </h2>
              <p className="about-description reveal">
                Sou Danilo, fotógrafo profissional apaixonado por contar histórias 
                através de imagens. Há mais de 8 anos, venho registrando momentos 
                únicos que se tornam memórias eternas para meus clientes.
              </p>
              <p className="about-description reveal">
                Minha jornada começou como hobby e logo se transformou em uma 
                missão de vida. Cada clique é uma oportunidade de eternizar 
                emoções, seja em um casamento, um retrato ou uma paisagem.
              </p>

              <div className="about-highlights">
                {highlights.map((item, index) => (
                  <div key={index} className={`about-highlight reveal reveal-delay-${(index % 4) + 1}`}>
                    <div className="about-highlight-icon">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h4 className="about-highlight-title">{item.title}</h4>
                      <p className="about-highlight-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vison/Misson */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-card">
              <h3>Missão</h3>
              <p>
                Registrar momentos autênticos com sensibilidade artística, transformando 
                cada imagem em uma obra de arte que emociona e inspira.
              </p>
            </div>
            <div className="vision-card">
              <h3>Visão</h3>
              <p>
                Ser referência em fotografia criativa no Brasil, reconhecido pela 
                excelência técnica e capacidade de capturar a essência de cada 
                momento.
              </p>
            </div>
            <div className="vision-card">
              <h3>Valores</h3>
              <ul>
                <li>Excelência em cada detalhe</li>
                <li>Compromisso com prazos</li>
              <li>Criatividade sem limites</li>
                <li>Respeito e empatia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
