import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const NOTES = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B"
];
const QUALS = ["", "m", "7", "maj7", "m7", "sus2", "sus4"];
const SUGGESTIONS = NOTES.flatMap(n => QUALS.map(q => n + q));

export default function ChordChooser({ chords, setChords }) {
  const [draft, setDraft] = useState("");
  const inputRef = useRef(null);

  const commitDraft = val => {
    const clean = val.trim();
    if (clean && !chords.includes(clean)) setChords([...chords, clean]);
  };

  const onKeyDown = e => {
    if (["Enter", ","].includes(e.key)) {
      e.preventDefault();
      commitDraft(draft);
      setDraft("");
    }
  };

  const onChange = e => {
    const val = e.target.value;
    setDraft(val);

    // 👉 If the datalist completed a valid chord, chip it immediately
    if (SUGGESTIONS.includes(val)) {
      commitDraft(val);
      setDraft("");
    }
  };

  return (
    <>
      <label htmlFor="chord-input">Chords</label>
      <div className="chip-box">
        {chords.map(chord => (
          <span key={chord} className="chip">
            {chord}
            <button
              type="button"
              aria-label={`Remove ${chord}`}
              onClick={() => setChords(chords.filter(c => c !== chord))}
            >
              ×
            </button>
          </span>
        ))}

        <input
          id="chord-input"
          list="chord-suggestions"
          ref={inputRef}
          value={draft}
          onChange={onChange}
          onKeyDown={onKeyDown}
          /* Option A: auto-commit on blur too
           * onBlur={() => { commitDraft(draft); setDraft(""); }}
           */
          placeholder={chords.length ? "Add chord…" : "e.g. Am7"}
          autoComplete="off"
        />
      </div>
      <datalist id="chord-suggestions">
        {SUGGESTIONS.map(s => (
          <option key={s} value={s} />
        ))}
      </datalist>
    </>
  );
}
