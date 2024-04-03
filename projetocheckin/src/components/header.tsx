// JSX = JavaScript XML
// TSX = TypeScript XML
import nlwUnitedIcon from "../assets/nlw-united-icon.svg"
import { NavLink } from "./nav-link"

export function Header() {

    return (
    
        <div className="flex items-center gap-5">
            <img src={nlwUnitedIcon} />

            <nav className="flex items-center gap-5">
                <NavLink href="/eventos">Evento</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
            </nav>

      
        </div>
    )
}