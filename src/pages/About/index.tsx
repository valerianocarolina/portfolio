import { DeveloperCard } from '../../components/DeveloperCard/DeveloperCard'

import './styles.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <p className="section-title">SOBRE</p>

        <h2 className="section-heading">Um pouco sobre mim</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou uma desenvolvedora frontend apaixonada por criar interfaces
              intuitivas, performáticas e visualmente bem construídas. Tenho
              experiência prática com <span>React</span>,{' '}
              <span>React Native</span>, <span>TypeScript</span> e{' '}
              <span>Redux</span>.
            </p>

            <p>
              Meu foco está em código limpo, arquitetura baseada em componentes
              e na entrega de experiências consistentes tanto para web quanto
              para mobile.
            </p>

            <p>
              Gosto de trabalhar em times ágeis e transformar problemas
              complexos em soluções simples e elegantes.
            </p>
          </div>

          <div className="about-card">
            <DeveloperCard />
          </div>
        </div>
      </div>
    </section>
  )
}
