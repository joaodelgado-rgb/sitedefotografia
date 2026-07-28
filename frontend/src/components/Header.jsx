import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import useScrollPosition from '../hooks/useScrollPosition'
import './Header.css'

const navLinks = [
  { path: '/', label: 'Início' },
  { path: '/portfolio', label: 'Portfólio' },
  { path: '/about', label: 'Sobre' },
  { path: '/services', label: 'Serviços' },
  { path: '/contact', label: 'Contato' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <span className="header-logo-icon">📷</span>
          <span className="header-logo-text">Danilo<span className="header-logo-accent">Fotografia</span></span>
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
          <ul className="header-nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `header-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-nav-cta">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Solicite Orçamento
            </Link>
          </div>
        </nav>

        <button
          className="header-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && <div className="header-overlay" onClick={closeMenu} />}
      </div>
    </header>
  )
}

