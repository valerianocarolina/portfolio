import type { Project } from '../types/project'

const GITHUB_USERNAME = 'valerianocarolina'

async function fetchFromGitHubPublicApi(): Promise<Project[]> {
  const endpoints = [
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`,
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=member&sort=updated&per_page=100`,
  ]

  const responses = await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
  const hasFailedResponse = responses.some((response) => !response.ok)

  if (hasFailedResponse) {
    throw new Error('Erro ao buscar projetos no GitHub')
  }

  const reposFromResponses = await Promise.all(
    responses.map((response) => response.json()),
  )

  const uniqueRepos = Array.from(
    new Map(
      reposFromResponses
        .flat()
        .map((repo: any) => [repo.id, repo] as const),
    ).values(),
  )

  const projects = await Promise.all(
    uniqueRepos
      .filter((repo: any) => !repo.fork && repo.visibility === 'public')
      .map(async (repo: any) => {
        const languagesResponse = await fetch(repo.languages_url)
        const languagesData = languagesResponse.ok
          ? await languagesResponse.json()
          : {}

        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          github: repo.html_url,
          demo: repo.homepage,
          technologies: Object.keys(languagesData),
        }
      }),
  )

  return projects
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch('/api/projects')
    const contentType = response.headers.get('content-type') ?? ''

    if (!response.ok || !contentType.includes('application/json')) {
      throw new Error('API local indisponivel no ambiente atual')
    }

    return response.json()
  } catch {
    return fetchFromGitHubPublicApi()
  }
}
