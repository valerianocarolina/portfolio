import type { Project } from '../types/project'

export async function getProjects(): Promise<Project[]> {
  const response = await fetch('/api/projects')

  if (!response.ok) {
    throw new Error('Erro ao buscar projetos')
  }

  return response.json()
}
