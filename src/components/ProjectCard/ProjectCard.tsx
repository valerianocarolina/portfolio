import { Github, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

interface ProjectCardProps {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export function ProjectCard({
  name,
  description,
  tags,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{name}</h3>

      <p className="project-card-description">{description}</p>

      <div className="project-card-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <Github size={14} />
            Code
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
