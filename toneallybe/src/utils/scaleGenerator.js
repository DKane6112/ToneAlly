const e = require("express");

function scaleGenerator(notes, chord){
    const majorSteps = [0, 2, 4, 5, 7, 9, 11];
    const minorSteps = [0, 2, 3, 5, 7, 8, 10];
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
    
    // let exception = forward.get(notes[0]) + 5;
    // if (exception > 12){
    //     exception = exception - 12;
    // }
    // let reverseException = forward.get(notes[0])  + 11;
    // if (reverseException > 12){
    //     reverseException = reverseException - 12;
    // }

    let badNotes =[];
    if (chord.charAt(1) === "m" || chord.charAt(2) === "m"){
        if(forward.get(notes[0]) + 6 > 12){
            badNotes.push(forward.get(notes[0]) + 6 - 12);
        }
        else{
            badNotes.push(forward.get(notes[0]) + 6);
        }
        if(forward.get(notes[0]) + 4 > 12){
            badNotes.push(forward.get(notes[0]) + 4 - 12);
        }
        else{
            badNotes.push(forward.get(notes[0]) + 4);
        }
    }
    else{
        if(forward.get(notes[0]) + 6 > 12){
            badNotes.push(forward.get(notes[0]) + 6 - 12);
        }
        else{
            badNotes.push(forward.get(notes[0]) + 6);
        }
        if(forward.get(notes[0]) + 3 > 12){
            badNotes.push(forward.get(notes[0]) + 3 - 12);
        }
        else{
            badNotes.push(forward.get(notes[0]) + 3);
        }
    }
    
    // for (let i = 0; i < notes.length; i++){

    //     let note = forward.get(notes[i]);
    //     if (note === exception || note === reverseException){
    //         continue;
    //     }

    //     if (note + 6 > 12){
    //         note = note - 12 + 6;
    //         badNotes.push(note);
    //         note = note + 12 - 6;
    //     }
    //     else {
    //         badNotes.push(note + 6);
    //     }
    // }

    let acceptedScales = [];
    for (let i = 0; i < backward.size; i++){
        let majorScale = [];
        let minorScale = [];

        for (let j = 0; j < majorSteps.length; j++){
            let potentialNote = ""
            if (i + majorSteps[j] > 12){
                potentialNote = backward.get(i + majorSteps[j] - 12);
            }
            else if (i + majorSteps[j] < 1){
                potentialNote = backward.get(i + majorSteps[j] + 12);
            }
            else {
                potentialNote = backward.get(i + majorSteps[j]);
            }
            if (badNotes.includes(forward.get(potentialNote))){
                break;
            }
            majorScale.push(potentialNote);
        }
        if (majorScale.length === 7){
            acceptedScales.push({key: majorScale[0] + " Major", scale: majorScale});
        }
            
        for (let j = 0; j < minorSteps.length; j++){
            let potentialNote = ""
            if (i + minorSteps[j] > 12){
                potentialNote = backward.get(i + minorSteps[j] - 12);
            }
            else if (i + minorSteps[j] < 1){
                potentialNote = backward.get(i + minorSteps[j] + 12);
            }
            else {
                potentialNote = backward.get(i + minorSteps[j]);
            }
            if (badNotes.includes(forward.get(potentialNote))){
                break;
            }
            minorScale.push(potentialNote);
        }
        if (minorScale.length === 7){
            acceptedScales.push({key: minorScale[0] + " Minor", scale: minorScale});
        }
    }
    return acceptedScales;
}

module.exports = scaleGenerator;