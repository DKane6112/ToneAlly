function scales() {
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);

    fetch("/app/run?text=" + encodedText)
        .then(response => {
            // This is the callback function that will run when the Promise is resolved
            // You can access the response object here
            // For example, you can get the text from the response
            return response.json();
        })
        .then(data => {
            // This is another callback function that will run with the text from the response
            // You can use the text to update the button
            let output = document.getElementById("ChromaticScale");
            output.textContent = data.chromatic;
            output = document.getElementById("MajorScale");
            output.textContent = data.major;
            output = document.getElementById("MinorScale");
            output.textContent = data.minor;
        })
        .catch(error => {
            // This is the callback function that will run if the Promise is rejected
            // You can handle any errors here
            // For example, you can alert the error message
            alert("There was an error: " + error);
        });
    document.getElementById("result").style.display = "flex";
}
function chord() {
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);
    let tone = document.getElementById("mood").value;
    let genre = document.getElementById("genre").value;
    encodedText = encodedText + "," + tone + "," + genre;

    fetch("/app/run/chordName?text=" + encodedText)
        .then(response => {

            return response.json();
        })
        .then(data => {

                let output = document.getElementById("I");
                output.textContent = toneReplace(data.Ichord);
                let file = sharpRemove(data.Ichord);
                let img = document.getElementById("firstChordImage");
                img.setAttribute("src", "/img/chords/"+file+".webp");

                output = document.getElementById("II");
                output.textContent = toneReplace(data.IIchord);
                file = sharpRemove(data.IIchord);
                img = document.getElementById("secondChordImage");
                img.setAttribute("src", "/img/chords/"+file+".webp");

                output = document.getElementById("III");
                output.textContent = toneReplace(data.IIIchord);
                file = sharpRemove(data.IIIchord);
                img = document.getElementById("thirdChordImage");
                img.setAttribute("src", "/img/chords/"+file+".webp");

                output = document.getElementById("IV");
                output.textContent = toneReplace(data.IVchord);
                file = sharpRemove(data.IVchord);
                img = document.getElementById("fourthChordImage");
                img.setAttribute("src", "/img/chords/"+file+".webp");

        })
        .catch(error => {

            alert("There was an error: " + error);
        });
}

function sharpRemove(chord){
    return chord.replace(/#/g, 'sharp');
}

function toneReplace(chord){
    return chord.replace(/major/g, 'M').replace(/minor/g, 'm');
}

const submit = document.getElementById("submit");
submit.addEventListener("click", (event)=> {
    scales();
    chord();
});

function displayImg(id){

    let img = document.getElementById(id);
    if(img.style.display == 'block'){
        img.style.display = 'none'
    }
    else{
        document.querySelectorAll('.image-container').forEach(img => {
            img.style.display = 'none';
        });

        img.style.display = "block";
    }

}
const chordI = document.getElementById("I");
chordI.addEventListener("click",(event)=>{
    displayImg("imgI");
});

const chordII = document.getElementById("II");
chordII.addEventListener("click",(event)=>{
    displayImg("imgII");
});

const chordIII = document.getElementById("III");
chordIII.addEventListener("click",(event)=>{
    displayImg("imgIII");
});

const chordIV = document.getElementById("IV");
chordIV.addEventListener("click",(event)=>{
    displayImg("imgIV");
});
