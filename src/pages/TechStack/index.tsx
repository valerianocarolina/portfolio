import { technologies } from '../../constants/tecnologies'
import { TechBadge } from '../../components/TechBadge/TechBadge'

import './styles.css'

export function TechStack() {
  return (
    <section id="tech-stach" className="techstack">
      <div className="techstack-container">
        <p className="section-title">TECH STACK</p>

        <h2 className="section-heading">Tecnologias que utilizo</h2>

        <p className="section-description">
          Meu conjunto principal de ferramentas para construir aplicações web e
          mobile modernas.
        </p>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
