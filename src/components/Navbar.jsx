import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span className="green">Varitas</span> Prime
      </div>

      {/* MOBILE ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Finance Services
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Digital Marketing
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>

      </ul>

      {/* RIGHT SIDE BUTTONS */}
      <div className="nav-actions">

        {/* DARK MODE TOGGLE */}
        <button
          className="btn-outline"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>

        {/* LOGIN */}
        <Link to="/login">
          <button className="btn-outline">Login</button>
        </Link>

        {/* REGISTER */}
        <Link to="/register">
          <button className="btn-primary">Register</button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;