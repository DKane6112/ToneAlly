// Home.jsx
import { Link } from "react-router-dom";
import { use, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // api call to wake up the server
    const wakeUpServer = async () => {

      const response = await fetch("https://toneally.onrender.com/prog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "C", genre: "Pop", previous: 0 }),
      });
    };
    wakeUpServer();
  }
  , []);

  return (
    <div>
      {/* hero ------------------------------------------------ */}
      <header className="hero">
        <h1 className="hero__heading">
          ToneAlly <span role="img" aria-label="spark">✨</span>
        </h1>
        <p className="tagline">It’s&nbsp;<strong>ToneAlly</strong>&nbsp;awesome!</p>
        <p className="hero__subheading">
          Your pocket-sized harmony assistant: generate fresh chord
          progressions, find scales that fit, and explore fingerings—all in one place.
        </p>

        <div className="cta-row">
          <Link to="/progressions" className="btn-submit">Generate Progressions</Link>
          <Link to="/scales" className="btn-outline">Find Scales</Link>
        </div>
      </header>

      {/* three-card explainer -------------------------------- */}
      <section className="grid-3">
        <article className="info-card">
          <i className="fa-regular fa-lightbulb icon-lg" />
          <h3>Instant Inspiration</h3>
          <p>Pick a genre &amp; key and ToneAlly spits out tried-and-true progressions (or something totally random—your choice).</p>
        </article>

        <article className="info-card">
          <i className="fa-solid fa-sliders icon-lg" />
          <h3>Scale Matcher</h3>
          <p>Paste your own chords and see every major, minor and modal scale that avoids the clashing notes.</p>
        </article>

        <article className="info-card">
          <i className="fa-solid fa-guitar icon-lg" />
          <h3>Play &amp; Learn</h3>
          <p>Click any chord to view a diagram (and soon, <em>hear</em> it). Craft ideas faster than you can brew coffee.</p>
        </article>
      </section>

      {/* footer --------------------------------------------- */}
      <footer>
        <p>&copy; 2025 ToneAlly. Crafted with <i className="fa-solid fa-heart" /> for musicians everywhere.</p>
      </footer>
    </div>
  );
}
