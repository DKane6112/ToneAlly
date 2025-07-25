import { useState, useEffect } from "react";
import { Link } from "react-router-dom";     // keep if you use React-Router
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const [smallScreen, setSmallScreen] = useState(
    window.innerWidth <= 768
  );

  // Update smallScreen on window resize
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    
    {open && <div className="backdrop" onClick={close} />}

    <nav className="navbar">
      {smallScreen && (
        <ThemeToggle />
      )}
      <div className= "navbar__wrapper">
        <Link to="/" className="navbar__brand">
            <img src="./favicon.ico" alt="ChordCraft logo" className="navbar__logo" />
            Tone-Ally
        </Link>

        <ul className={`navbar__links ${open ? "open" : ""}`}>
            <li><Link to="/"          className="navbar__link">Home</Link></li>
            <li><Link to="/progressions" className="navbar__link">Progressions</Link></li>
            <li><Link to="/scales" className="navbar__link">Scales</Link></li>
            <li><Link to="/tuner"     className="navbar__link">Tuner</Link></li>
            <li><Link to="/ear-trainer"     className="navbar__link">Ear Trainer</Link></li>
            <li><Link to="/contact"   className="navbar__link">Contact</Link></li>
        </ul>
        { !smallScreen && (
          <ThemeToggle />
        )}
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
          <li><Link to="/tuner"        onClick={close}>Tuner</Link></li>
          <li><Link to="/ear-trainer"        onClick={close}>Ear Trainer</Link></li>
          <li><Link to="/contact"      onClick={close}>Contact</Link></li>
        </ul>
    </aside>
    </>
  );
}
