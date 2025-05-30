import { useEffect, useRef, useState } from "react";
import { PitchDetector } from "pitchy";

export default function Tuner() {
  /* ─────────── state ─────────── */
  const [note,  setNote]  = useState("");
  const [freq,  setFreq]  = useState(0);
  const [cents, setCents] = useState(0);

  /* ─────────── refs ─────────── */
  const analyserRef = useRef(null);
  const detectorRef = useRef(null);
  const frameIdRef  = useRef(null);
  const streamRef   = useRef(null);
  const audioCtxRef = useRef(null);
  const lastHeard   = useRef(0);

  /* ─────────── constants ─────────── */
  const MIN_HZ = 60;     // covers drop-D
  const MAX_HZ = 350;    // covers high-E
  const IN_TUNE_CENTS = 12;
  const GAUGE_SPAN = 50; // ±50 ¢ full scale
  const SILENT_RESET_MS = 2000;

  /* ─────────── lifecycle ─────────── */
  useEffect(() => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    analyserRef.current = analyser;

    detectorRef.current = PitchDetector.forFloat32Array(analyser.fftSize);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        streamRef.current = stream;

        const source = ctx.createMediaStreamSource(stream);

        // mild band-pass: keeps fundamentals & 2-3 harmonics
        const band = ctx.createBiquadFilter();
        band.type = "bandpass";
        band.frequency.value = 180;
        band.Q.value = 1;

        source.connect(band).connect(analyser);
        startLoop(ctx);
      })
      .catch((e) => console.error("Mic access denied:", e));

    return () => cleanup();
  }, []);

  /* ─────────── render ─────────── */
return (
  <div style={{
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center"}}
  >
    
    <svg style={{width: "100vw", height: "35vh", display:"block", margin:"0 auto" }} viewBox="0 0 300 160">
      
      <path d={describeArc(150,130,100,-90,90)}
            stroke="#e0e0e0" strokeWidth="8" fill="none" />

      <path d={describeArc(
                150,130,100,
                - (IN_TUNE_CENTS / GAUGE_SPAN) * 90,
                  (IN_TUNE_CENTS / GAUGE_SPAN) * 90)}
            stroke="rgba(80,200,80,.45)" strokeWidth="8" fill="none" />

      <line x1="150" y1="130" x2="150" y2="30"
            stroke="#0077ff" strokeWidth="3"
            transform={`rotate(${(cents / GAUGE_SPAN) * 90} 150 130)`}/>
    </svg>

    {!!note && (
      <span style={{
            fontSize:"4.5rem", fontWeight:800, lineHeight:1,
            marginTop:"0.75rem"}}
      >
        {note.replace(/\d$/,"")}
      </span>
    )}
    <span style={{fontSize:"2rem", marginTop:"0.25rem"}}>
      {freq.toFixed(1)}&nbsp;Hz
    </span>
  </div>
);



  /* ─────────── helpers ─────────── */
  function startLoop(ctx) {
    const analyser = analyserRef.current;
    const detector = detectorRef.current;
    const buf      = new Float32Array(analyser.fftSize);

    const tick = () => {
      analyser.getFloatTimeDomainData(buf);
      let [pitch, clarity] = detector.findPitch(buf, ctx.sampleRate);

      const now = performance.now();

      if (clarity > 0.9 && pitch) {
        /* --- fundamental prioritiser: halve until inside range --- */
        while (pitch > MAX_HZ && pitch / 2 >= MIN_HZ) pitch /= 2;

        if (pitch >= MIN_HZ && pitch <= MAX_HZ) {
          const { name, cents: dev } = hzToNote(pitch);
          setNote(name);
          setFreq(pitch);
          setCents(dev);
          lastHeard.current = now;
        }
      }

      /* idle reset */
      if (now - lastHeard.current > SILENT_RESET_MS) {
        setNote("");
        setFreq(0);
        setCents(0);
      }

      frameIdRef.current = requestAnimationFrame(tick);
    };

    lastHeard.current = performance.now();
    tick();
  }

  function hzToNote(f) {
    const A4 = 440, A4_MIDI = 69;
    const noteNum = Math.round(A4_MIDI + 12 * Math.log2(f / A4));

    const ideal = A4 * Math.pow(2, (noteNum - A4_MIDI) / 12);
    const cents = 1200 * Math.log2(f / ideal);

    const octave = Math.floor(noteNum / 12) - 1;
    const names  = ["C","C#","D","D#","E","F","F#",
                    "G","G#","A","A#","B"];

    return { name: names[noteNum % 12] + octave, cents };
  }

  function cleanup() {
    if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
  }

  // build an SVG arc path from polar angles (deg)
    function describeArc(cx, cy, r, startAngle, endAngle) {
        const toRad = deg => (deg - 90) * Math.PI / 180;   // SVG 0° is 12 o’clock
        const p = deg => ({
            x: cx + r * Math.cos(toRad(deg)),
            y: cy + r * Math.sin(toRad(deg))
        });
        const s = p(endAngle), e = p(startAngle);
        const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
        return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 0 ${e.x} ${e.y}`;
    }
}
