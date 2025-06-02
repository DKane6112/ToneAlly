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
    },
    generateIntervals: async (difficulty) => {
        console.log(`Generating intervals for difficulty: ${difficulty}`);
        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        const intervalMap = {
            0: "Unison",
            1: "Minor 2nd",
            2: "Major 2nd",
            3: "Minor 3rd",
            4: "Major 3rd",
            5: "Perfect 4th",
            6: "Tritone",
            7: "Perfect 5th",
            8: "Minor 6th",
            9: "Major 6th",
            10: "Minor 7th",
            11: "Major 7th",
            12: "Octave"
        };
        const easyIntervals = [0, 3, 4, 5, 7, 12];
        const mediumIntervals = [2, 3, 4, 5, 7, 8, 9, 10, 11]; 
        const hardIntervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        let randomIntervals = [];
        if (difficulty == "easy") {
            for (let i = 0; i < easyIntervals.length; i++) {
                let pick = easyIntervals[Math.floor(Math.random() * easyIntervals.length)];
                // keep looping until different from the last picked interval
                while (randomIntervals.length > 0 && randomIntervals[randomIntervals.length - 1] === pick) {
                    pick = easyIntervals[Math.floor(Math.random() * easyIntervals.length)];
                }
                randomIntervals.push(pick);               
            }
        } else if (difficulty == "medium") {
            for (let i = 0; i < mediumIntervals.length; i++) {
                let pick = mediumIntervals[Math.floor(Math.random() * mediumIntervals.length)];
               
                while (randomIntervals.length > 0 && randomIntervals[randomIntervals.length - 1] === pick) {
                    pick = mediumIntervals[Math.floor(Math.random() * mediumIntervals.length)];
                }
                randomIntervals.push(pick);
            }
        } else if (difficulty == "hard") {
            for (let i = 0; i < hardIntervals.length; i++) {
                let pick = hardIntervals[Math.floor(Math.random() * hardIntervals.length)];
                
                while (randomIntervals.length > 0 && randomIntervals[randomIntervals.length - 1] === pick) {
                    pick = hardIntervals[Math.floor(Math.random() * hardIntervals.length)];
                }
                randomIntervals.push(pick);
            }
        }
        else {
            throw new Error("Invalid difficulty level");
        }

        let intervals = [];
        for (let i = 0; i < randomIntervals.length; i++) {
            let interval = randomIntervals[i];
            let rootNote = "C"; // You can change this to any root note you want
            intervals.push({
                root: rootNote,
                interval: interval,
                intervalName: intervalMap[interval]
            });
        }
        return intervals;
    }
}

module.exports = scaleModel;