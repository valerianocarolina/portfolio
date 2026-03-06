import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { routes } from '../../routes/routesConfig'

import './Header.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('light')
  }

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-c">C</span>
          <span className="logo-v">V</span>
        </Link>

        {/* Desktop nav */}
        <div className="navbar-links">
          {routes
            .filter((route) => route.showInNavbar)
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={
                  location.pathname === route.path
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                {route.label}
              </Link>
            ))}

          <button onClick={toggleTheme} className="theme-button">
            {isDark ? <Sun size={16} color="white" /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="navbar-mobile">
          <button onClick={toggleTheme} className="theme-button">
            {isDark ? <Sun size={16} color="white" /> : <Moon size={16} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? (
              <X size={20} color={isDark ? 'white' : 'black'} />
            ) : (
              <Menu size={20} color={isDark ? 'white' : 'black'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      {isOpen && (
        <div className="mobile-menu">
          {routes
            .filter((route) => route.showInNavbar)
            .map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={handleNavigation}
                className={
                  location.pathname === route.path
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                {route.label}
              </Link>
            ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
