import { Link } from 'react-router-dom'
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-decoration">
        <span className="footer-decoration-line" />
        <span className="footer-decoration-diamond" />
        <span className="footer-decoration-line" />
      </div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">📷</span>
              <span className="footer-logo-text">Danilo<span className="footer-logo-accent">Fotografia</span></span>
            </div>
            <p className="footer-description">
              Capturando momentos únicos com arte e sensibilidade. 
              Transformamos suas memórias em imagens eternas.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/portfolio">Portfólio</Link></li>
              <li><Link to="/about">Sobre</Link></li>
              <li><Link to="/services">Serviços</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Serviços</h4>
            <ul className="footer-links-list">
              <li><Link to="/services">Casamentos</Link></li>
              <li><Link to="/services">Retratos</Link></li>
              <li><Link to="/services">Eventos</Link></li>
              <li><Link to="/services">Fashion</Link></li>
              <li><Link to="/services">Filmagem</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-links-title">Contato</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:contato@danilofotografia.com">
                  <Mail size={16} />
                  <span>contato@danilofotografia.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999">
                  <Phone size={16} />
                  <span>(11) 99999-9999</span>
                </a>
              </li>
              <li>
                <span className="footer-contact-address">
                  <MapPin size={16} />
                  <span>São Paulo, SP</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Danilo Fotografia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

