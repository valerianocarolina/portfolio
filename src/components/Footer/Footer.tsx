import { Github, Linkedin, Heart } from 'lucide-react'
import './Footer.css'
import { socialLinks } from '../../constants/socialLinks'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Carolina Valeriano. Built with{' '}
          <Heart size={12} className="footer-heart" /> and React.
        </p>

        <div className="footer-socials">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-icon"
          >
            <Github size={18} />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
