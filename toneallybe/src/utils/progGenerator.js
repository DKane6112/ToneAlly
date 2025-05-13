function progGenerator(){
    const progressions = {
        Pop: {
            // I  V  vi  IV
            1: [
                { steps: 0, tone: "Major" },   // I
                { steps: 7, tone: "Major" },   // V
                { steps: 2, tone: "Minor" },   // vi
                { steps: 8, tone: "Major" }    // IV
                ],
            // vi  IV  I  V
            2: [
                { steps: 9, tone: "Minor" },   // vi
                { steps: 8, tone: "Major" },   // IV
                { steps: 7, tone: "Major" },   // I
                { steps: 7, tone: "Major" }    // V
                ],
            // I  V  vi  iii  IV
            3: [
                { steps: 0, tone: "Major" },   // I
                { steps: 7, tone: "Major" },   // V
                { steps: 2, tone: "Minor" },   // vi
                { steps: 7, tone: "Minor" },   // iii
                { steps: 1, tone: "Major" }    // IV
            ]
        },

  
        Rock: {
            // I  ♭VII  IV  V
            1: [
                { steps: 0,  tone: "Major" },  // I
                { steps: 10, tone: "Major" },  // ♭VII
                { steps: 7,  tone: "Major" },  // IV
                { steps: 2,  tone: "Major" }   // V
            ],
            // vi  IV  I  V   (pop-punk)
            2: [
                { steps: 9, tone: "Minor" },   // vi
                { steps: 8, tone: "Major" },   // IV
                { steps: 7, tone: "Major" },   // I
                { steps: 7, tone: "Major" }    // V
            ],
            // I  IV  V
            3: [
                { steps: 0, tone: "Major" },   // I
                { steps: 5, tone: "Major" },   // IV
                { steps: 2, tone: "Major" }    // V
            ]
        },

  
        Jazz: {
            // ii  V  I
            1: [
                { steps: 2, tone: "Minor" },   // ii
                { steps: 5, tone: "Major" },   // V
                { steps: 5, tone: "Major" }    // I
            ],
            // I  vi  ii  V
            2: [
                { steps: 0, tone: "Major" },   // I
                { steps: 9, tone: "Minor" },   // vi
                { steps: 5, tone: "Minor" },   // ii
                { steps: 5, tone: "Major" }    // V
            ],
            // iii  VI  ii  V   (“Rhythm changes” style)
            3: [
                { steps: 4, tone: "Minor" },   // iii
                { steps: 5, tone: "Major" },   // VI
                { steps: 5, tone: "Minor" },   // ii
                { steps: 5, tone: "Major" }    // V
            ]
        }
    }
    return progressions;
}

module.exports = progGenerator;