import { Link } from "react-router-dom"
import "../styles/navbar.css"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Fire in the Word Logo" />
      </div>

      {/* Mobile menu button */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/sermons" onClick={() => setOpen(false)}>Sermons</Link>
        <Link to="/bible-school" onClick={() => setOpen(false)}>Bible School</Link>
        <Link to="/prayer" onClick={() => setOpen(false)}>Prayer</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar