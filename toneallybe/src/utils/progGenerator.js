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
        },

        Blues: {
            // I7 IV7 I7 V7 IV7
            1: [
                { steps: 0, tone: "7", order: "I7" },   // I7
                { steps: 5, tone: "7", order: "IV7" },   // IV7
                { steps: -5, tone: "7", order: "I7" },   // I7
                { steps: 7, tone: "7", order: "V7" },   // V7
                { steps: -2, tone: "7", order: "IV7" },   // IV7
            ],

            // i7 iv7 i7 V7           
            2: [
                { steps: 0, tone: "Minor7", order: "i7" },   // i7
                { steps: 5, tone: "Minor7", order: "iv7" },   // iv7
                { steps: -5, tone: "Minor7", order: "i7" },   // i7
                { steps: 7, tone: "7", order: "V7" }    // V7
            ],

            // i7 iv7 i7 ♭VI7 V7
            3: [
                { steps: 0, tone: "Minor7", order: "i7" },   // i7
                { steps: 5, tone: "Minor7", order: "iv7" },   // iv7
                { steps: -5, tone: "Minor7", order: "i7" },   // i7
                { steps: 8, tone: "7", order: "♭VI7" },   // ♭VI7
                { steps: -1, tone: "7", order: "V7" }    // V7
            ]

        },

        Reggae: {
            // I  V  vi  IV
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" },   // V
                { steps: 2, tone: "Minor", order: "vi" },   // vi
                { steps: 8, tone: "Major", order: "IV" }    // IV
            ],

            // I  IV  V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // I IV
            3: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" }    // IV
            ]

        },

        Classical: {
            // I  IV  V  I
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" },   // V
                { steps: -7, tone: "Major", order: "I" }    // I
            ],

            // I  vi  IV  V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: -4, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // i ♭VI IV V
            3: [
                { steps: 0, tone: "Minor", order: "i" },   // i
                { steps: 8, tone: "Major", order: "♭VI" },   // ♭VI
                { steps: -3, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ]
        },

        Country: {
            // I  IV  V
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // I  V  vi  IV
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" },   // V
                { steps: 2, tone: "Minor", order: "vi" },   // vi
                { steps: -4, tone: "Major", order: "IV" }    // IV
            ],

            // I  vi  IV  V
            3: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: -4, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ]
        },

        Metal: {
            // I  ♭VII  IV  V
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 10, tone: "Major", order: "♭VII" },   // ♭VII
                { steps: -5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // i  ♭VI  iv  V
            2: [
                { steps: 0, tone: "Minor", order: "i" },   // i
                { steps: 8, tone: "Major", order: "♭VI" },   // ♭VI
                { steps: -3, tone: "Minor", order: "iv" },   // iv
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // i  iv  ♭VI  V
            3: [
                { steps: 0, tone: "Minor", order:"i" },   // i
                { steps: 5, tone:"Minor", order:"iv" },   // iv
                { steps: 3, tone:"Major", order:"♭VI" },   // ♭VI
                { steps:-1, tone:"Major", order:"V"}    // V
            ]
        },

        Funk: {
            // I  IV  V
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // I  vi  IV  V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: -4, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // I  ii  V
            3: [
                { steps: 0, tone:"Major", order:"I" },   // I
                { steps: 2, tone:"Minor", order:"ii" },   // ii
                { steps: 5, tone:"Major", order:"V"}    // V
            ]
        },

        Soul: {
            // I iii IV iv
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 4, tone: "Minor", order: "iii" },   // iii
                { steps: 1, tone: "Major", order: "IV" },   // IV
                { steps: 0, tone: "Minor", order: "iv" }    // iv
            ],

            // I vi ii V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: -7, tone: "Minor", order: "ii" },   // ii
                { steps: 5, tone: "Major", order: "V" }    // V
            ],

            // IV V iii vi
            3: [
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" },   // V
                { steps: -3, tone: "Minor", order: "iii" },   // iii
                { steps: 5, tone: "Minor", order: "vi" }    // vi
            ]

        },

        Punk: {
            // I ♭VII IV V
            1: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 10, tone: "Major", order: "♭VII" },   // ♭VII
                { steps: -5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // I IV V
            2: [
                { steps: 0, tone: "Major", order: "I" },   // I
                { steps: 5, tone: "Major", order: "IV" },   // IV
                { steps: 2, tone: "Major", order: "V" }    // V
            ],

            // vi IV I V
            3: [
                { steps: 9, tone: "Minor", order: "vi" },   // vi
                { steps: -4, tone: "Major", order: "IV" },   // IV
                { steps: -5, tone: "Major", order: "I" },   // I
                { steps: 7, tone: "Major", order: "V" }    // V
            ]
        }
    }
    return progressions;
}

module.exports = progGenerator;