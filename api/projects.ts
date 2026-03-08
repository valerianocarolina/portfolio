/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  try {
    const username = 'valerianocarolina'

    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    )

    const repos = await response.json()

    const projects = await Promise.all(
      repos
        .filter((repo: any) => !repo.fork && repo.visibility === 'public')
        .map(async (repo: any) => {
          const languagesResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/languages`,
          )

          const languagesData = await languagesResponse.json()

          const technologies = Object.keys(languagesData)

          return {
            name: repo.name,
            description: repo.description,
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
