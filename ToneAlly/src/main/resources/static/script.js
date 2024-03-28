function buttonClicked() {
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);

    fetch("/app/run?text=" + encodedText)
        .then(response => {
            // This is the callback function that will run when the Promise is resolved
            // You can access the response object here
            // For example, you can get the text from the response
            return response.text();
        })
        .then(text => {
            // This is another callback function that will run with the text from the response
            // You can use the text to update the button
            let output = document.getElementById("ChromaticScale");
            output.textContent = text;
        })
        .catch(error => {
            // This is the callback function that will run if the Promise is rejected
            // You can handle any errors here
            // For example, you can alert the error message
            alert("There was an error: " + error);
        });
    document.getElementById("result").style.display = "flex";
}
function getMajor(){
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);

    fetch("/app/run/major?text=" + encodedText)
        .then(response => {

            return response.text();
        })
        .then(text => {

            let output = document.getElementById("MajorScale");
            output.textContent = text;
        })
        .catch(error => {

            alert("There was an error: " + error);
        });

}

function getMinor(){
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);

    fetch("/app/run/minor?text=" + encodedText)
        .then(response => {

            return response.text();
        })
        .then(text => {

            let output = document.getElementById("MinorScale");
            output.textContent = text;
        })
        .catch(error => {

            alert("There was an error: " + error);
        });

}

function getChordName(position) {
    let input = document.getElementById("key");
    let text = input.value;
    let encodedText = encodeURIComponent(text);
    let tone = document.getElementById("mood").value;
    encodedText = encodedText + "," + tone + "," + position;

    fetch("/app/run/chordName?text=" + encodedText)
        .then(response => {

            return response.text();
        })
        .then(text => {
            if (position == 0){
                let output = document.getElementById("I");
                output.textContent = text;
            }else if(position == 4){
                let output = document.getElementById("II");
                output.textContent = text;
            }else if(position == 5){
                let output = document.getElementById("III");
                output.textContent = text;
            }else if(position == 3){
                let output = document.getElementById("IV");
                output.textContent = text;
            }

        })
        .catch(error => {

            alert("There was an error: " + error);
        });
}