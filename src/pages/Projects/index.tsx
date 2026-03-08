import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import './styles.css'

interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    name: 'E-Commerce Mobile App',
    description:
      'Aplicação mobile de e-commerce desenvolvida com React Native, Redux e arquitetura baseada em componentes.',
    tags: ['React Native', 'Redux', 'TypeScript', 'REST API'],
    github: 'https://github.com/valerianocarolina',
  },
  {
    name: 'Task Management Dashboard',
    description:
      'Dashboard interativo para gerenciamento de tarefas com drag-and-drop e filtros avançados.',
    tags: ['React', 'TypeScript', 'State Management'],
    github: 'https://github.com/valerianocarolina',
    demo: '#',
  },
  {
    name: 'Weather App',
    description:
      'Aplicação de previsão do tempo com integração de API e interface responsiva.',
    tags: ['React', 'API', 'CSS'],
    github: 'https://github.com/valerianocarolina',
    demo: '#',
  },
  {
    name: 'Developer Portfolio',
    description:
      'Portfólio pessoal desenvolvido com React, TypeScript e design system próprio.',
    tags: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/valerianocarolina',
    demo: '#',
  },
]

export function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <p className="section-title">PROJETOS</p>

        <h2 className="section-heading">O que eu já construí</h2>

        <p className="section-description">
          Alguns projetos que demonstram minhas habilidades e interesses.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
