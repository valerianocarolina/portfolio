import './ExperienceItem.css'

interface ExperienceItemProps {
  role: string
  company: string
  period: string
  description: string[]
}

export function ExperienceItem({
  role,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <div className="timeline-line" />
      <div className="timeline-dot" />

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3 className="experience-role">{role}</h3>

            <p className="experience-company">{company}</p>
          </div>

          <span className="experience-period">{period}</span>
        </div>

        <ul className="experience-description">
          {description.map((item, index) => (
            <li key={index} className="experience-description-item">
              <span className="experience-arrow">›</span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
