import nlwUniteLogo from '../assets/nlw-unite-logo.svg'
import { NavLink } from './nav-link'
export function Header() {
  return (
    <div className="flex items-center gap-5 py-5">
      <img src={nlwUniteLogo} alt="" />

      <nav className="flex items-center gap-5">
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/attendees">Attendees</NavLink>
      </nav>
    </div>
  )
}
