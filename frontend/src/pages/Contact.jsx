import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import './Contact.css'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(11) 99999-9999',
    href: 'tel:+5511999999999'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contato@danilofotografia.com',
    href: 'mailto:contato@danilofotografia.com'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'São Paulo, SP',
    href: null
  }
]

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useScrollReveal()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
      setFormData(initialFormState)
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <>
      <section className="page-banner">
        <div className="page-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            alt=""
          />
          <div className="page-banner-overlay" />
        </div>
        <div className="container">
          <div className="page-banner-content">
            <span className="section-subtitle">Contato</span>
            <h1 className="page-banner-title">Entre em Contato</h1>
            <p className="page-banner-description">
              Vamos conversar sobre seu próximo projeto fotográfico.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section" ref={sectionRef}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-subtitle reveal">Informações</span>
              <h2 className="contact-info-title reveal">Vamos Conversar</h2>
              <p className="contact-info-description reveal">
                Estou pronto para ouvir suas ideias e criar algo incrível juntos. 
                Preencha o formulário ou use um dos canais abaixo.
              </p>

              <div className="contact-info-items">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`contact-info-item reveal reveal-delay-${index + 1}`}
                  >
                    <div className="contact-info-icon">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social reveal">
                <p>Siga-me nas redes sociais:</p>
                <div className="contact-social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper reveal">
              {isSubmitted ? (
                <div className="contact-success">
                  <CheckCircle size={48} />
                  <h3>Mensagem Enviada!</h3>
                  <p>
                    Obrigado pelo contato! Responderei em até 24 horas.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nome</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className={errors.phone ? 'input-error' : ''}
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Serviço de Interesse</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="wedding">Casamento</option>
                        <option value="portrait">Retrato</option>
                        <option value="event">Evento</option>
                        <option value="fashion">Fashion</option>
                        <option value="landscape">Ensaio Externo</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me sobre seu projeto..."
                      rows={5}
                      className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    <Send size={18} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
