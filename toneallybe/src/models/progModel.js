const progModel = {
    generateProg: async (key, genre) => {

        const prog = {
            key: key,
            genre: genre,
            chords: ["C", "G", "Am", "F"],           
        };
        return prog;
    }
}

module.exports = progModel;