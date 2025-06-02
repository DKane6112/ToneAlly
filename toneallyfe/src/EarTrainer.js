import React, { useState } from "react";
import "./EarTrainer.css";
import api          from "./api.js";
import { playInterval } from "./utils/playAudio.js";

export default function EarTrainer() {
  
  const WHEEL_SIZE = 360; // size of the wheel in pixels
  const intervalNames = [
    "Unison","Minor 2nd","Major 2nd","Minor 3rd","Major 3rd",
    "Perfect 4th","Tritone","Perfect 5th","Minor 6th","Major 6th",
    "Minor 7th","Major 7th","Octave"
  ];

  const [intervals, setIntervals] = useState([]);
  async function fetchIntervals(level) {
        const { data } = await api.post(`scale/interval/${level}`, { difficulty: level });
        setIntervals(data);
        console.log(data.data);
        return data;
    }

  const [difficulty, setDifficulty] = useState("");
  const [started,    setStarted]    = useState(false);
  const [idx,        setIdx]        = useState(0);
  const [correct,      setCorrect]      = useState(0);
  const [attempts,     setAttempts]     = useState(0);
  const [feedback,   setFeedback]   = useState("");
  const [finished,   setFinished]   = useState(false);

 
  const allowedAnswers = React.useMemo(() => {
    if (difficulty === "easy")   return ["Unison","Minor 3rd","Major 3rd","Perfect 4th","Perfect 5th","Octave"];
    if (difficulty === "medium") return ["Major 2nd","Minor 3rd","Major 3rd","Perfect 4th","Perfect 5th","Minor 6th","Major 6th","Minor 7th","Major 7th"];
    return intervalNames; // hard = all intervals
  }, [difficulty]);


  async function beginGame() {
    try {
      const first = await fetchIntervals(difficulty);
      setStarted(true);
      setIdx(0);
      setCorrect(0);
      setAttempts(0);
      setFeedback("");
      setFinished(false);
      playInterval(first[0]);
    } catch (err) {
      console.error(err);
    }
  }

  
  function handleGuess(name) {
    if (finished) return;

    const hit = name === intervals[idx].intervalName;
    setAttempts(a => a+1);
    setFeedback(hit ? "correct" : "wrong");

    if (hit) {
      const next = idx + 1;
      setCorrect(c => c + 1);

      if (next < intervals.length) {
        setIdx(next);
        setTimeout(() => {
          setFeedback("");
          playInterval(intervals[next]);
        }, 800);
      } else {
        
        setFinished(true);
        setTimeout(() => setFeedback(""), 1100);
      }
    } else {
      
      setTimeout(() => setFeedback(""), 1100);
    }
  }

  return (
    <div className="trainer-page">
      <header >
        <h1 className="hero__heading">Ear Trainer</h1>
        <p className="hero__subheading">
          Test your musical ear with our interactive interval game
        </p>
      </header>

      
      {!started && !finished && (
        <section className="menu-card">
          <label htmlFor="difficulty">Choose difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="easy">Easy (pentatonic)</option>
            <option value="medium">Medium (major/minor)</option>
            <option value="hard">Hard (all)</option>
          </select>

          <button
            className="btn-primary"
            disabled={!difficulty}
            onClick={beginGame}
          >
            Start Game
          </button>
        </section>
      )}

      
      {started && !finished && (
        <section className="game-card">
          <div className="scorebar">
            <span>Score {correct}/{attempts}</span>
            <span>Q {idx + 1}</span>
          </div>

          
          <button
            className="play-btn"
            onClick={() => playInterval(intervals[idx])}
          >
            ▶︎&nbsp;Play&nbsp;Interval
          </button>

          <p className="micro-copy"> Select answer from wheel below</p>      
          <div className="answers-grid wheel-wrapper">
                <svg
                    viewBox="0 0 300 300"
                    className="wheel"
                    style={{ "--size": `${WHEEL_SIZE}px` }}
                >
                    {allowedAnswers.map((name, i) => {
                    const angle = (i / allowedAnswers.length) * 360 - 90;
                    const radius = 122;
                    const x = 150 + radius * Math.cos(angle * Math.PI / 180);
                    const y = 150 + radius * Math.sin(angle * Math.PI / 180);

                    return (
                        <g key={name} transform={`translate(${x} ${y})`} className="wheel-slice"
                            onClick={() => handleGuess(name)}
                        >
                            <circle r="28" fill="transparent" />
                            <circle r="26" className="wheel-btn-bg" />
                            <text
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className="wheel-btn-text"
                            >
                                {name.replace("Perfect ","")
                                    .replace("Major ","M ")
                                    .replace("Minor ","m ")}
                            </text>
                        </g>
                    );
                    })}
                </svg>
            </div>


          
          {feedback && (
            <div
              className={`feedback ${
                feedback === "correct" ? "ok" : "bad"
              }`}
            >
              {feedback === "correct" ? "✓ Correct!" : "✗ Try again"}
            </div>
          )}
        </section>
      )}

      
      {finished && (
        <section className="end-card">
          <h2>
            {attempts === intervals.length
                ? "🎉 Perfect!"
                : (correct / attempts) >= 0.8
                    ? "Well done!"
                    : "Keep practising!"
            }
          </h2>


          <p>
            Correct&nbsp;&nbsp;{correct}<br/>
            Wrong&nbsp;&nbsp;&nbsp;&nbsp;{attempts - correct}<br/>
           Accuracy&nbsp;{attempts ? Math.round((correct/attempts)*100) : 0}%
          </p>
          <div>
            <button
                className="btn-primary"
                onClick={() => {
                setDifficulty("");
                setFinished(false);
                setStarted(false);
                }}
            >
            Play Again
          </button>
          </div>
        </section>
      )}
    </div>
  );
}


