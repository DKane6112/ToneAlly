import React from "react";
import { useTheme } from "../hooks/theme";
import "./toggle.css";              
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="toggle">
      {/* screen-reader friendly control */}
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <span className="track">
        {/* you can swap ☀️/🌙 for icons or SVGs */}
        <img 
          className="thumb"
          src={theme === "dark" ? "icons/dark-mode.svg" : "icons/light-mode.svg"}
          alt={theme === "dark" ? "Dark mode" : "Light mode"}
          draggable="false"
        />
      </span>
    </label>
  );
}

