import React from "react";
import './App.css';
import { useState } from "react";
import Results from "./components/Progressions.js";
import GenreCombo from "./components/GenreCombo.js";

function ChordTool() {
    const [genre, setGenre] = useState("");
    const [key, setKey] = useState("C");
    const NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
    const [progressions, setProgressions] = useState(["I — V — vi — IV", "ii — V — I", "vi — IV — I — V"]);

    const log = (e) => {
        e.preventDefault();
        console.log("Genre: ", genre);
        console.log("Key: ", key);
    }

    return (
    <div>
        <header class="hero">
            <h1 class="hero__heading">Unleash Harmonies in Seconds</h1>
            <p class="hero__subheading">Input a genre and key to ignite fresh chord progression ideas for your next masterpiece.</p>
        </header>

        <section class="form-card" aria-labelledby="generator-title">
            <h2 id="generator-title" class="sr-only">Chord Progression Generator</h2>
            <form class="form" autoComplete="off">
                <div class="form__group">
                    <GenreCombo value={genre} onChange={setGenre} />
                </div>

                <div class="form__group">
                    <label id="key-label">Key</label>
    
                    <div class="key-picker" role="radiogroup" aria-labelledby="key-label">
                    {NOTES.map(note => (
                        <button
                            key={note}
                            type="button"
                            className={`key-pill${key === note ? " active" : ""}`}
                            aria-checked={key === note}
                            onClick={() => setKey(note)}
                        >
                            {note}
                        </button>
                        ))}
                    </div>
                </div>
                <button type="submit" class="btn-submit" onClick= {log}>Generate Ideas</button>
            </form>
        </section>

        <Results progressions={progressions} />

        <footer>
            <p>&copy; 2025 ToneAlly. Crafted with <i class="fa-solid fa-heart">❤</i> for musicians everywhere.</p>
        </footer>
    </div>
    );
}
export default ChordTool;