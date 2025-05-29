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
    const [ordered, setOrdered] = useState([]);
    const [showForm, setShowForm] = useState(true);

    const log = (e) => {
        e.preventDefault();
        console.log("Genre: ", genre);
        console.log("Key: ", key);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        log(e);
        const response = await fetch("https://toneally.onrender.com/prog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key, genre, previous }),
        });

        if (response.ok) {
            const data = await response.json();
            let progression = [];
            let order = [];
            for (let i = 0; i < data.chords.length; i++) {
                progression.push(data.chords[i]);
                order.push(data.order[i]);
            }
            setProgressions(progression);
            setOrdered(order);
            setPrevious(data.progression);
            console.log(data);
        } else {
            console.error("Error fetching progressions");
        }
        setShowForm(false);
    }

    return (
    <div>
        <header class="hero">
            <h1 class="hero__heading">Unleash Harmonies in Seconds</h1>
            <p class="hero__subheading">Input a genre and key to see tried and true chord progressions for you to build on.</p>
        </header>

        {showForm && (
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
        )}

        {!showForm && (
            <div className="progression-info">    
                <Results progressions={progressions} order= {ordered} />
                
                <button
                    className="btn-outline"
                    onClick={() => setShowForm(true)
                    }
                    > Back
                </button>
            </div>       
        )}
    </div>
    );
}
export default ChordTool;