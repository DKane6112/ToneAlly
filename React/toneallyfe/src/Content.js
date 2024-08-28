import React from 'react';
import {displayImg} from './api.js';


function Content(){

    return(
        <div id="result">
                    <div id="scales">
                        <label for="ChromaticScale">Chromatic Scale:</label>
                        <p id="ChromaticScale"></p>

                        <label for="MajorScale">Major Scale:</label>
                        <p id="MajorScale"></p>

                        <label for="MinorScale">Minor Scale:</label>
                        <p id="MinorScale"></p>
                    </div>

              <div id="chords">

                    <label for="chordNames">Chord Progression: </label>
                     <div id="chordNames">
                          <div class="chordName">
                               <p id="I">
                               </p>
                               <div class="image-container" id="imgI" >
                                    <img src="./img/chords/Amajor.png" alt="A Major Chord Diagram" id="firstChordImage"/>
                               </div>
                          </div>

                          <div class="chordName">
                               <p id="II"></p>
                               <div class="image-container" id="imgII" >
                                    <img src="./img/chords/Amajor.png" alt="A Major Chord Diagram" id="secondChordImage"/>
                               </div>
                          </div>

                          <div class="chordName">
                               <p id="III"></p>
                               <div class="image-container" id="imgIII" >
                                    <img src="./img/chords/Amajor.png" alt="A Major Chord Diagram" id="thirdChordImage"/>
                               </div>
                          </div>

                          <div class="chordName">
                               <p id="IV"></p>
                               <div class="image-container" id="imgIV" >
                                    <img src="./img/chords/Amajor.png" alt="Chord Diagram" id="fourthChordImage"/>
                               </div>
                          </div>
                     </div>
              </div>
        </div>
                );
            }
export default Content;