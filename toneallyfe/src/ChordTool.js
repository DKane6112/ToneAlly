import React from "react";
import './App.css';
import { useState } from "react";
import Results from "./components/Progressions.js";
import GenreCombo from "./components/GenreCombo.js";

function ChordTool() {
    const [genre, setGenre] = useState("");
    const [key, setKey] = useState("C");
    const NOTES = ["C","D","F","G","A","B","C#","D#","F#","G#","A#","E"];
    const [progressions, setProgressions] = useState([]);
    const [previous, setPrevious] = useState(0);

    const log = (e) => {
        e.preventDefault();
        console.log("Genre: ", genre);
        console.log("Key: ", key);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        log(e);
        const response = await fetch("http://localhost:4000/prog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key, genre, previous }),
        });

        if (response.ok) {
            const data = await response.json();
            let progression = data.chords[0];
            for (let i = 1; i < data.chords.length; i++) {
                progression = progression + " — " + data.chords[i];
            }
            setProgressions([progression]);
            setPrevious(data.progression);
            console.log(data);
        } else {
            console.error("Error fetching progressions");
        }
    }

    return (
    <div>
        <header class="hero">
            <h1 class="hero__heading">Unleash Harmonies in Seconds</h1>
            <p class="hero__subheading">Input a genre and key to ignite fresh chord progression ideas for your next masterpiece.</p>
        </header>

        <section class="form-card" aria-labelledby="generator-title">
            <h2 id="generator-title" class="sr-only">Chord Progression Generator</h2>
            <form class="form" autoComplete="off" onSubmit={handleSubmit}>
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
                <button type="submit" class="btn-submit">Generate Ideas</button>
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