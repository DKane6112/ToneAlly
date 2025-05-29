function progGenerator(){
    const progressions = {
        Pop: {
            // I  V  vi  IV
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" },   // V
                { steps: 2, tone: "Minor", order: "vi" },   // vi
                { steps: 8, tone: "Major", order: "IV" }    // IV
                ],
            // vi  IV  I  V
            2: [
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: 8, tone: "Major", order: "IV" },   // IV
                { steps: 7, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" }    // V
                ],
            // I  V  vi  iii  IV
            3: [
                { steps: 0, tone: "Major", order:"I" },   // I
                { steps: 7, tone: "Major", order: "V" },   // V
                { steps: 2, tone: "Minor", order: "vi" },   // vi
                { steps: 7, tone: "Minor", order: "iii" },   // iii
                { steps: 1, tone: "Major", order: "IV" }    // IV
            ]
        },

  
        Rock: {
            // I  ♭VII  IV  V
            1: [
                { steps: 0,  tone: "Major", order: "I" },  // I
                { steps: 10, tone: "Major", order: "♭VII" },  // ♭VII
                { steps: 7,  tone: "Major", order: "IV" },  // IV
                { steps: 2,  tone: "Major", order: "V" }   // V
            ],
            // vi  IV  I  V   (pop-punk)
            2: [
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: 8, tone: "Major", order: "IV" },   // IV
                { steps: 7, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" }    // V
            ],
            // I  IV  V
            3: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ]
        },

  
        Jazz: {
            // ii  V  I
            1: [
                { steps: 2, tone: "Minor7", order: "ii" },   // ii
                { steps: 5, tone: "7", order: "V" },   // V
                { steps: 5, tone: "Maj7", order: "I"}    // I
            ],
            // I  vi  ii  V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: 5, tone: "Minor", order: "ii" },   // ii
                { steps: 5, tone: "Major", order: "V" }    // V
            ],
            // iii  VI  ii  V   (“Rhythm changes” style)
            3: [
                { steps: 4, tone: "Minor", order: "iii" },   // iii
                { steps: 5, tone: "Major", order: "VI" },   // VI
                { steps: 5, tone: "Minor", order: "ii" },   // ii
                { steps: 5, tone: "Major", order: "V" }    // V
            ]
        }
    }
    return progressions;
}

module.exports = progGenerator;