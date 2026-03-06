import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Projects } from '../pages/Projects'
import { TechStack } from '../pages/TechStack'
import { Contact } from '../pages/Contact'

export const routes = [
  {
    path: '/',
    label: 'Home',
    element: Home,
    showInNavbar: false,
  },
  {
    path: '/about',
    label: 'About',
    element: About,
    showInNavbar: true,
  },
  {
    path: '/tech-stack',
    label: 'Tech Stack',
    element: TechStack,
    showInNavbar: true,
  },
  {
    path: '/projects',
    label: 'Projects',
    element: Projects,
    showInNavbar: true,
  },
  {
    path: '/experience',
    label: 'Experience',
    element: Experience,
    showInNavbar: true,
  },
  {
    path: '/contact',
    label: 'Contact',
    element: Contact,
    showInNavbar: true,
  },
]
