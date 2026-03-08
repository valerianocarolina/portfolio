import './styles.css'

import { Mail, Github, Linkedin } from 'lucide-react'

import { Button } from '../../components/Button/Button'
import { socialLinks } from '../../constants/socialLinks'

export function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <p className="section-title">CONTATO</p>

        <h2 className="section-heading contact-heading">
          Vamos trabalhar juntos
        </h2>

        <p className="section-description contact-description">
          Estou sempre aberta a novas oportunidades e colaborações. Fique à
          vontade para entrar em contato!
        </p>

        <div className="contact-buttons">
          <a href={socialLinks.email}>
            <Button icon={<Mail size={16} />}>Enviar Email</Button>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" icon={<Linkedin size={16} />}>
              LinkedIn
            </Button>
          </a>

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" icon={<Github size={16} />}>
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
