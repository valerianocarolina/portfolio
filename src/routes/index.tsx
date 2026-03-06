import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Projects } from '../pages/Projects'
import { TechStack } from '../pages/TechStack'
import { Contact } from '../pages/Contact'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
