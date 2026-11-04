import { Link } from "react-router-dom"
import "./header.css"
// import { useEffect } from "react"

interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {
    section: string
}

export default function Navbar({ section, ...props }: NavbarProps) {
    return <nav id="header-bar" {...props}>
        <div id="nav-section">
            <p>{section}</p>
        </div>
        <div id="nav-centre">
            <img id="icon" src="/nasa.webp" alt="nasa_logo" />
        </div>
        <div id="nav-pages">
            <Link to="/">Page Principale</Link>
            <Link to="/sources">Bibliographie</Link>
        </div>
    </nav>
}
