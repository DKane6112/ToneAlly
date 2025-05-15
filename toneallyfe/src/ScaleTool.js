import React from "react";
import './App.css';
import { useState } from "react";
import ChordChooser from "./components/ChordChooser.js";



function ScaleTool() {

    const [chords, setChords] = useState([]);
    const [scales, setScales] = useState([]);

    const log = (e) => {
        e.preventDefault();
        console.log(scales);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Chosen chords:", chords);

    // 👉 replace with your real fetch
    /* const res = await fetch("/api/scales", {
         method:"POST",
         headers:{ "Content-Type":"application/json" },
         body: JSON.stringify({ chords })
       });
       const data = await res.json();
       setScales(data.scales); */

    // demo: fake response
        setScales(["C major", "A minor", "G Mixolydian"]);
    };

    return (
    <div>
        <header class="hero">
            <h1 class="hero__heading">Find Scales for Your Progression</h1>
            <p class="hero__subheading">Enter a few chords and we’ll show every scale that fits.</p>
        </header>

        <section class="form-card" aria-labelledby="generator-title">
            <h2 id="generator-title" class="sr-only">Scale Finder</h2>
            <form class="form" autoComplete="off" onSubmit={handleSubmit}>
                <div class="form__group">
                    <ChordChooser chords={chords} setChords={setChords}/>
                </div>
                <button type="submit" class="btn-submit">Show Scales</button>
            </form>
        </section>

        {/* create scale results <Results progressions={progressions} /> */}
        {!!scales.length && (
            <section className="results" aria-live="polite">
                <div className="results__header">
                    <i className="fa-solid fa-wave-square" />
                    <h3>Compatible Scales</h3>
                </div>

                <ul className="results__list">
                    {scales.map(s => (
                        <li key={s} className="progression-card">{s}</li>
                    ))}
                </ul>
            </section>
        )}

        <footer>
            <p>&copy; 2025 ToneAlly. Crafted with <i class="fa-solid fa-heart">❤</i> for musicians everywhere.</p>
        </footer>
    </div>
    );
}
export default ScaleTool;