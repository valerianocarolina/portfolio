export async function getProjects() {
  const response = await fetch('/api/projects')

  if (!response.ok) {
    throw new Error('Erro ao buscar projetos')
  }

  return response.json()
}
