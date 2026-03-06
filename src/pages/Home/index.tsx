import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1>Home</h1>

      <nav>
        <Link to="/sobre">Sobre</Link> | <Link to="/techstack">Tech Stack</Link>{' '}
        | <Link to="/projetos">Projetos</Link> |{' '}
        <Link to="/experiencia">Experiência</Link> |{' '}
        <Link to="/contato">Contato</Link>
      </nav>
    </div>
  )
}
