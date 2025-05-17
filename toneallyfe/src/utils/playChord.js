import * as Tone from "tone";


const sampleMap = {
  A2:   "A2.ogg",  "A#2":"As2.ogg", B2:   "B2.ogg",
  C3:   "C3.ogg",  "C#3":"Cs3.ogg", D3:   "D3.ogg",
  "D#3":"Ds3.ogg", E3:   "E3.ogg",  F3:   "F3.ogg",
  "F#3":"Fs3.ogg", G3:   "G3.ogg",  "G#3":"Gs3.ogg",
  A3:   "A3.ogg",  "A#3":"As3.ogg", B3:   "B3.ogg",
  C4:   "C4.ogg",  "C#4":"Cs4.ogg", D4:   "D4.ogg",
  "D#4":"Ds4.ogg", E4:   "E4.ogg",  F4:   "F4.ogg",
  "F#4":"Fs4.ogg", G4:   "G4.ogg",  "G#4":"Gs4.ogg",
  A4:   "A4.ogg",  "A#4":"As4.ogg", B4:   "B4.ogg"
};


const guitar = new Tone.Sampler({
  urls: sampleMap,
  baseUrl: "/samples/guitar-acoustic/",
  onload: () => console.log("Guitar sampler ready")
});


const dryGain = new Tone.Gain(1).toDestination();
const wetGain = new Tone.Gain(0.3).toDestination();

const convolver = new Tone.Convolver("/publicsamples/irs/wood-room.wav")
  .connect(wetGain);

guitar.connect(dryGain);
guitar.connect(convolver);


function getTriadNotes(chordName) {
  const m = chordName.match(/^([A-G](?:#)?)/);
  if (!m) return [];
  const root = m[1];
  const isMinor = /m(?!aj)/i.test(chordName);
  const intervals = isMinor ? [0, 3, 7] : [0, 4, 7];
  const octave = 3;
  return intervals.map(i =>
    Tone.Frequency(`${root}${octave}`)
      .transpose(i)
      .toNote()
  );
}

export async function playChord(chordName) {
  await Tone.start();
  const now = Tone.now();
  const notes = getTriadNotes(chordName);
  if (!notes.length) return;

  const strumDelay = 0.06; // seconds between each string
  notes.forEach((note, i) => {
    guitar.triggerAttackRelease(note, "2n", now + i * strumDelay);
  });
}
