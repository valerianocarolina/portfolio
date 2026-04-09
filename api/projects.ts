/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  try {
    const username = 'valerianocarolina'
    const token = (globalThis as any).process?.env?.GITHUB_TOKEN
    const headers = {
      Accept: 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }

    const endpoints = token
      ? [
          'https://api.github.com/user/repos?visibility=public&affiliation=owner,collaborator,organization_member&sort=updated&per_page=100',
        ]
      : [
          `https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=100`,
          `https://api.github.com/users/${username}/repos?type=member&sort=updated&per_page=100`,
        ]

    const repoResponses = await Promise.all(
      endpoints.map((endpoint) =>
        fetch(endpoint, {
          headers,
        }),
      ),
    )

    const hasFailedResponse = repoResponses.some((response) => !response.ok)

    if (hasFailedResponse) {
      throw new Error('Failed to fetch repositories from GitHub')
    }

    const reposFromResponses = await Promise.all(
      repoResponses.map((response) => response.json()),
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
          const languagesResponse = await fetch(repo.languages_url, {
            headers,
          })

          const languagesData = languagesResponse.ok
            ? await languagesResponse.json()
            : {}

          const technologies = Object.keys(languagesData)

          return {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            github: repo.html_url,
            demo: repo.homepage,
            technologies,
          }
        }),
    )

    res.status(200).json(projects)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch projects',
    })
  }
}
