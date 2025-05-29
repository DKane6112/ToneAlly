import { useState, useRef, useEffect } from "react";

const GENRES = [
  "Rock", /*"Rhythm and Blues", "R&B", "Rap",*/ "Reggae",
  "Pop", "Punk", "Funk", /*"Folk",*/ "Jazz",
  "Classical", "Country"/*, "EDM", "House", "Techno"*/,
  "Metal", "Soul", "Blues" /*,"Lo-fi", "Ambient"*/
];

export default function GenreCombo({ value, onChange }) {
  const [input, setInput] = useState(value || "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);           // index of highlighted item
  const comboRef = useRef(null);

  const filtered = GENRES.filter(g =>
    g.toLowerCase().startsWith(input.trim().toLowerCase())
  );

  // close dropdown when clicking outside
  useEffect(() => {
    const close = e => {
      if (!comboRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  // handle keyboard navigation
  const onKeyDown = e => {
    if (!open && ["ArrowDown","ArrowUp"].includes(e.key)) {
      setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(i => (i + 1) % filtered.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(i => (i - 1 + filtered.length) % filtered.length);
    }
    if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      choose(filtered[active]);
    }
    if (e.key === "Escape") setOpen(false);
  };

  const choose = genre => {
    setInput(genre);
    onChange(genre);
    setOpen(false);
  };

  return (
    <div className="combo" ref={comboRef}>
      <label htmlFor="genre-input">Genre</label>
      <input
        id="genre-input"
        type="text"
        value={input}
        onChange={e => { setInput(e.target.value); setOpen(true); setActive(-1); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        aria-autocomplete="list"
        aria-controls="genre-list"
        aria-expanded={open}
        aria-activedescendant={active >= 0 ? `option-${active}` : undefined}
      />

      {open && (
        <ul
          id="genre-list"
          className="combo__list"
          role="listbox"
          ref={comboRef}
        >
          {filtered.length ? (
            filtered.map((g, i) => (
              <li
                key={g}
                id={`option-${i}`}
                role="option"
                aria-selected={i === active}
                className={i === active ? "active" : undefined}
                onMouseDown={() => choose(g)}   // use mousedown so click doesn’t blur first
              >
                {g}
              </li>
            ))
          ) : (
            <li className="disabled">No match</li>
          )}
        </ul>
      )}
    </div>
  );
}
