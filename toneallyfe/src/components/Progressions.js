import { useState } from "react";

/**
 * Single progression row
 */
function ProgressionCard({ progression }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(progression);
      // 👉🏽 TODO: trigger your snackbar / toast here
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="progression-card">
      <span className="progression">{progression}</span>
      <button
        type="button"
        className="copy-btn"
        aria-label={`Copy progression ${progression}`}
        onClick={handleCopy}
      >
        <i className="fa-regular fa-copy" />
      </button>
    </div>
  );
}

export default function Results({ progressions = [] }) {

  if (!progressions.length) return null;

  return (
    <section className="results" aria-live="polite">
      <div className="results__header">
        <i className="fa-solid fa-lightbulb" />
        <h3>Try these progressions</h3>
      </div>

      <div className="results__list">
        {progressions.map((p) => (
          <ProgressionCard key={p} progression={p} />
        ))}
      </div>
    </section>
  );
}
