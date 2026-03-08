import { useEffect, useState } from 'react'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { getProjects } from '../../services/githubService'
import type { Project } from '../../types/project'

import './styles.css'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (error) {
        console.error('Erro ao buscar projetos', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <section className="projects">
      <div className="projects-container">
        <p className="section-title">PROJETOS</p>

        <h2 className="section-heading">O que eu já construí</h2>

        <p className="section-description">
          Alguns projetos que demonstram minhas habilidades e interesses.
        </p>

        {loading ? (
          <p className="projects-loading">Carregando projetos...</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => {
              console.log(project)

              return (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  tags={project.technologies}
                  github={project.github}
                  demo={project.demo}
                />
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
