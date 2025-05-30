import { useEffect, useRef, useState } from "react";
import { PitchDetector } from "pitchy";

export default function Tuner() {
  const [note, setNote]   = useState("--");
  const [cents, setCents] = useState(0);

  // these refs keep the raw Web Audio objects where React won’t touch them
  const analyserRef = useRef(null);
  const detectorRef = useRef(null);
  const frameIdRef  = useRef(null);   // stores requestAnimationFrame id

  useEffect(() => {
    // Some mobile browsers still expose webkitAudioContext
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      console.warn("Web Audio not supported in this browser");
      return;
    }

    const ctx = new AudioCtx();                     // 1 Create audio context
    const analyser = ctx.createAnalyser();          // 2 Create analyser node
    analyser.fftSize = 2048;                        //   Set window size
    analyserRef.current = analyser;

    detectorRef.current = PitchDetector.forFloat32Array(analyser.fftSize); // 3 Create detector

    // 4 Ask user for the microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        ctx.createMediaStreamSource(stream).connect(analyser);
        startTuningLoop(ctx);                       // 5 Begin the loop
      })
      .catch(err => {
        console.error("Mic access denied:", err);
      });

    // ---- tidy up when component unmounts ----
    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      ctx.close();          // Release audio thread
    };
  }, []);   // empty deps → run once when component mounts

  /* ------------ render ------------- */
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-5xl font-bold">{note}</h2>

      <div className="w-40 h-1 bg-gray-300 relative my-2">
        <div
          className="absolute top-0 h-1 bg-green-500"
          style={{ left: `calc(50% + ${cents}px)`, width: 2 }}
        />
      </div>

      <p className="text-sm">{cents.toFixed(1)} ¢</p>
    </div>
  );

  /* -------- helper functions -------- */

  function startTuningLoop(ctx) {
    const analyser = analyserRef.current;
    const detector = detectorRef.current;
    const buffer   = new Float32Array(analyser.fftSize);

    const tick = () => {
      analyser.getFloatTimeDomainData(buffer);
      const [freq, clarity] = detector.findPitch(buffer, ctx.sampleRate);

      if (clarity > 0.9 && freq) {
        const { name, diff } = freqToNote(freq);  // map Hz → note + cents
        setNote(name);
        setCents(diff);
      }

      frameIdRef.current = requestAnimationFrame(tick);
    };

    tick();   // kick-off first frame
  }

  // Map a frequency in Hz to a note name and cents deviation
  function freqToNote(freq) {
    const A4     = 440;
    const C0     = A4 * Math.pow(2, -4.75);      // 16.35 Hz
    const noteNr = Math.round(12 * Math.log2(freq / C0));
    const noteIx = noteNr % 12;
    const octave = Math.floor(noteNr / 12);

    const names  = ["C", "C#", "D", "D#", "E", "F",
                    "F#", "G", "G#", "A", "A#", "B"];

    const ideal  = C0 * Math.pow(2, noteNr / 12);    // exact Hz of that note
    const diff   = 1200 * Math.log2(freq / ideal);   // cents deviation

    return { name: `${names[noteIx]}${octave}`, diff };
  }
}
