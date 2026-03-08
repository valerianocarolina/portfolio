import './DeveloperCard.css'
import profileImage from '../../assets/images/carolina.jpg'

export function DeveloperCard() {
  return (
    <div className="developer-card">
      <div className="developer-avatar">
        <img src={profileImage} alt="Carolina Valeriano" />
      </div>

      <p className="developer-name">Carolina Valeriano</p>

      <p className="developer-role">Desenvolvedora Frontend</p>

      <div className="developer-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>Mobile</span>
      </div>
    </div>
  )
}
