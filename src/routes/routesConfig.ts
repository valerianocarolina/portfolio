import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Projects } from '../pages/Projects'
import { TechStack } from '../pages/TechStack'
import { Contact } from '../pages/Contact'

export const routes = [
  {
    path: '/',
    label: 'Inicio',
    element: Home,
    showInNavbar: false,
  },
  {
    path: '/about',
    label: 'Sobre',
    element: About,
    showInNavbar: true,
  },
  {
    path: '/tech-stack',
    label: 'Tecnologias',
    element: TechStack,
    showInNavbar: true,
  },
  {
    path: '/projects',
    label: 'Projetos',
    element: Projects,
    showInNavbar: true,
  },
  {
    path: '/experience',
    label: 'Experiencia',
    element: Experience,
    showInNavbar: true,
  },
  {
    path: '/contact',
    label: 'Contato',
    element: Contact,
    showInNavbar: true,
  },
]
