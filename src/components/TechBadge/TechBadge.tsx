import './TechBadge.css'

type TechBadgeProps = {
  name: string
  icon: React.ElementType
}

export function TechBadge({ name, icon: Icon }: TechBadgeProps) {
  return (
    <div className="tech-badge">
      <div className="tech-icon-wrapper">
        <Icon className="tech-icon" />
      </div>

      <span className="tech-name">{name}</span>
    </div>
  )
}
