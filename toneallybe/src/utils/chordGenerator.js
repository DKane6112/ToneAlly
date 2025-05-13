class ChordGenerator {
    
    constructor(key, genre, previous) {
        this.key = key;
        this.genre = genre;
        this.random = Math.floor(Math.random() * 3) + 1;

        while (this.random === previous) {
            this.random = Math.floor(Math.random() * 3) + 1;
        }
    }

    
    generateChords() {
        const progGenerator = require('../utils/progGenerator');
        const forward = new Map([
            ["C", 1],
            ["C#", 2],
            ["D", 3],
            ["D#", 4],
            ["E", 5],
            ["F", 6],
            ["F#", 7],
            ["G", 8],
            ["G#", 9],
            ["A", 10],
            ["A#", 11],
            ["B", 12]
        ])
        const backward = new Map([
            [1, "C"],
            [2, "C#"],
            [3, "D"],
            [4, "D#"],
            [5, "E"],
            [6, "F"],
            [7, "F#"],
            [8, "G"],
            [9, "G#"],
            [10, "A"],
            [11, "A#"],
            [12, "B"]
        ])

        const prog = {
            key: this.key,
            genre: this.genre,
            chords: [],  
            progression: this.random         
        };
        
        const progressions = progGenerator();
        const progression = progressions[this.genre][this.random];

        let j = forward.get(this.key);

        for (let i = 0; i < progression.length; i++) {
            let steps = progression[i].steps;
            let tone = progression[i].tone;
            
            j = j + steps;
            if (j > 12) {
                j = j - 12;
            }
            if (j < 1) {
                j = j + 12;
            }
            let chord = backward.get(j);
            prog.chords.push(chord + " " + tone);
        }

        return prog;
    }
}

module.exports = ChordGenerator;