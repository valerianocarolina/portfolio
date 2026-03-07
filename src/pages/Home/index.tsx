import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

import { socialLinks } from '../../constants/socialLinks'
import { Button } from '../../components/Button/Button'

import heroImage from '../../assets/images/hero-illustration.png'

import './styles.css'

export function Home() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* TEXTO */}

        <div className="hero-content">
          <p className="hero-intro">Olá, meu nome é</p>

          <h1 className="hero-title">
            Carolina
            <br />
            <span className="hero-lastname">Valeriano</span>
          </h1>

          <p className="hero-role">Desenvolvedora Frontend</p>

          <p className="hero-description">
            Desenvolvendo experiências web e mobile modernas com{' '}
            <span className="hero-highlight">React</span>,{' '}
            <span className="hero-highlight">React Native</span> e{' '}
            <span className="hero-highlight">TypeScript</span>.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">
              <Button variant="primary" icon={<ArrowDown size={16} />}>
                Ver Projetos
              </Button>
            </Link>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" icon={<Github size={16} />}>
                GitHub
              </Button>
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
          </div>
        </div>

        {/* IMAGEM */}

        <div className="hero-image-wrapper">
          <div className="hero-image-background" />

          <img
            src={heroImage}
            alt="Ilustração de desenvolvedora"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
