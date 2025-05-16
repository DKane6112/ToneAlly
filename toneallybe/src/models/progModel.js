const ChordGenerator = require('../utils/chordGenerator');

const progModel = {
    generateProg: async (key, genre, previous) => {
        let generator = new ChordGenerator(key, genre, previous);
        let chords = generator.generateChords();
        return chords;
    }
}

module.exports = progModel;