import { Link } from "react-router-dom"
import "./header.css"

export default function Navbar() {
    return <nav id="header-bar">
        <div id="nav-section">
            <p></p>
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
