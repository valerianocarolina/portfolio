import { useState } from 'react'
import './styles.css'

export default function DesignSystemTest() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    document.documentElement.classList.remove('light')
    if (newTheme === 'light') {
      document.documentElement.classList.add('light')
    }
  }

  return (
    <div className="container">
      <h1>Design Tokens Test</h1>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <div style={{ background: 'hsl(var(--surface))', padding: 20 }}>
          Surface Test
        </div>
      </div>

      <div className="color-grid">
        <div className="color-card background">background</div>
        <div className="color-card surface">surface</div>
        <div className="color-card primary">primary</div>
        <div className="color-card secondary">secondary</div>
        <div className="color-card accent">accent</div>
        <div className="color-card muted">muted</div>
      </div>
    </div>
  )
}
