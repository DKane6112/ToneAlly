const ChordGenerator = require('../utils/chordGenerator');

const progModel = {
    generateProg: async (key, genre) => {
        let generator = new ChordGenerator(key, genre);
        let chords = generator.generateChords();
        return chords;
    }
}

module.exports = progModel;