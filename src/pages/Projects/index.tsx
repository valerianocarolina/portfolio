import { useEffect, useState } from 'react'
import { getProjects } from '../../services/githubService'
import type { Project } from '../../types/project'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>{project.name}</div>
      ))}
    </div>
  )
}
