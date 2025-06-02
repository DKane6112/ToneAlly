import { useState, useEffect, useRef } from "react";
import {playChord} from "../utils/playAudio.js";

function ProgressionCard({ progression, onSelectChord, order }) {
  const [playing, setPlaying] = useState(false);
  let orderNumber = 0;

  function incOrderNumber() {
    orderNumber++;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(progression.join(" — "));
    // TODO: show toast/snackbar
  };

  const playProgression = async () => {
    setPlaying(true);
    for (const chord of progression) {
      await playChord(chord);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second between chords
    }
    setPlaying(false);
  }

  function displayChord(chord) {
    if (chord.includes("Minor")){
      return chord.replace("Minor", "minor");
    }
    return chord;
  }

  return (
    <div className="progression-card">
      <div className="progression-chords">
        {progression.map((p) => (
          <div className="progression__chord-box">
            <button
              key={p}
              type="button"
              className="progression__chord"
              onClick={() => onSelectChord(p)}
              onMouseUp={() => playChord(p)}
              title={`Show fingering for ${p}`}
            >
              {displayChord(p)}
            </button>
            <span className="progression__order">{order[orderNumber]}</span>
            {incOrderNumber()}
          </div>
        ))}
        
      </div>
      
      <button
        type="button"
        className="play-btn"
        onClick={playProgression}
        disabled={playing}
        aria-label={`Play progression ${progression.join(" — ")}`}
      >
        <i className="fa-solid fa-play" /> ▶
      </button>
    </div>
  );
}

export default function Results({ progressions = [], order = [] }) {
  const [selectedChord, setSelectedChord] = useState(null);
  const ref = useRef(null);
  const [src, setSrc] = useState("");
  useEffect(() => {
    if (selectedChord) {
      
      let chordName = selectedChord.toLowerCase()
      .replace(/#/g, "sharp")
      .replace(/♯/g, "sharp")
      .replace(/[^a-z0-9]/g, "")
      + ".jpg";

      setSrc("/chords/" + chordName);
      
    }
  }, [selectedChord]);

  if (!progressions.length) return null;

  return (
    <section className="results" aria-live="polite">
      <div className="results__header">
        <i className="fa-solid fa-lightbulb" />
        <h3>Try this progression</h3>
        {/* <span className="hint">(Click a chord to see fingering)</span> */}
      </div>

      <div className="results__list">
        <ProgressionCard
          progression={progressions}
          onSelectChord={setSelectedChord}
          order={order}
        />
      </div>

      {selectedChord && (
        <div className="chord-diagram">
          <h4>{selectedChord} </h4>
          
          <div className="chord-diagram__placeholder">
            <img
              src={src}
              className="scales_chords_api"
              alt={selectedChord}
            />
          </div>

          <button
            type="button"
            className="close-diagram"
            onClick={() => setSelectedChord(null)}
            aria-label="Close diagram"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
