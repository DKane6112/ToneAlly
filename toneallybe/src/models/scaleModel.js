const chordTones = require("../utils/chordTones");
const e = require("express");
const scaleGenerator = require("../utils/scaleGenerator");

const scaleModel = {
    generateScale: async (chords) => {
        let notes = [];
        for (let i = 0; i < chords.length; i++){
            let chord = chords[i];
            let tones = chordTones(chord);
            for (let j = 0; j < tones.length; j++){
                if (!notes.includes(tones[j])){
                    notes.push(tones[j]);
                }
            }
        }
        return scaleGenerator(notes, chords[0]);
    }
}

module.exports = scaleModel;