import { useState } from "react";
import { Link } from "react-router-dom";     // keep if you use React-Router

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
    
    {open && <div className="backdrop" onClick={close} />}

    <nav className="navbar">
      <div className= "navbar__wrapper">
        <Link to="/" className="navbar__brand">
            <img src="./favicon.ico" alt="ChordCraft logo" className="navbar__logo" />
            Tone-Ally
        </Link>

        <ul className={`navbar__links ${open ? "open" : ""}`}>
            <li><Link to="/"          className="navbar__link">Home</Link></li>
            <li><Link to="/progressions" className="navbar__link">Progressions</Link></li>
            <li><Link to="/scales" className="navbar__link">Scales</Link></li>
            <li><Link to="/about"     className="navbar__link">About</Link></li>
            <li><Link to="/contact"   className="navbar__link">Contact</Link></li>
        </ul>
      </div>

      {/*  --- hamburger (mobile only) --- */}
      <button
        className={`hamburger ${open ? "is-active" : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>     
    </nav>

    <aside className={`drawer ${open ? "open" : ""}`} role="navigation">
        <ul className="drawer__links">
          <li><Link to="/"             onClick={close}>Home</Link></li>
          <li><Link to="/progressions" onClick={close}>Progressions</Link></li>
          <li><Link to="/scales" className="navbar__link">Scales</Link></li>
          <li><Link to="/about"        onClick={close}>About</Link></li>
          <li><Link to="/contact"      onClick={close}>Contact</Link></li>
        </ul>
    </aside>
    </>
  );
}
