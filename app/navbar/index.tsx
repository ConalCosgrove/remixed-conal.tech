import { type LoaderFunction } from "@remix-run/node";
import { Link, useLocation } from "@remix-run/react";
export const loader: LoaderFunction = ({request}) => {
    const url = new URL(request.url);
    return url;
}
export default function Navbar() {
    const path = useLocation().pathname;
    console.log(path)
    return (
        <nav className="navbar">
            <Link to="/home" className={`nav-item${path.startsWith('/home') ? ' ' : ' not-'}selected`}><span >Home</span></Link>
            <Link to="/music" className={`nav-item${path.startsWith('/music') ? ' ' : ' not-'}selected`}><span>Music</span></Link>
            <Link to="/coding"className={`nav-item${path.startsWith('/coding') ? ' ' : ' not-'}selected`}><span>Coding</span></Link>
        </nav>
    )
}