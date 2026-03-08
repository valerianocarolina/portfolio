import './styles.css'

import { experiences } from '../../constants/experience'
import { ExperienceItem } from '../../components/ExperienceItem/ExperienceItem'

export function Experience() {
  return (
    <section className="experience">
      <div className="experience-container">
        <p className="section-title">EXPERIÊNCIA</p>

        <h2 className="section-heading">Onde eu trabalhei</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
