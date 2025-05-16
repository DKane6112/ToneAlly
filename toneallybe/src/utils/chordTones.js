function chordTones(chord){
    const majorSteps = [0, 4, 3];
    const minorSteps = [0, 3, 4];
    let chordTones = [];
    let minor = false;

    let root = chord.charAt(0);
    if (chord.length > 1 && chord.charAt(1) === "#") {
        root += "#";
        if(chord.length === 3 && chord.charAt(2) === "m") {
            minor = true;
        }
    }
    if (chord.length > 1 && chord.charAt(1) === "m") {
        minor = true;
    }

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

    let j = forward.get(root);
    let steps = majorSteps;
    if (minor){
        steps = minorSteps;
    }

    for (let i = 0; i < steps.length; i++) {
        j = j + steps[i];
        if (j > 12) {
            j = j - 12;
        }
        if (j < 1) {
            j = j + 12;
        }
        let tone = backward.get(j);
        chordTones.push(tone);
    }
    return chordTones;
}

module.exports = chordTones;