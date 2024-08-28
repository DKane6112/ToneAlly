import Header from './Header.js';
import Footer from './Footer.js';
import './index.css';
import {analyse} from './api.js';

function AnalyseContent(){
    return(

        <section id="userInput">
                <form id="myForm">
                    <label for="iChord">I Chord:</label>
                    <select id="iChord" name="key">
                        <option value="A,major">A Major</option>
                        <option value="A,minor">A Minor</option>
                        <option value="A#,major">A# Major</option>
                        <option value="A#,minor">A# Minor</option>
                        <option value="B,major">B Major</option>
                        <option value="B,minor">B Minor</option>
                        <option value="C,major">C Major</option>
                        <option value="C,minor">C Minor</option>
                        <option value="C#,major">C# Major</option>
                        <option value="C#,minor">C# Minor</option>
                        <option value="D,major">D Major</option>
                        <option value="D,minor">D Minor</option>
                        <option value="D#,major">D# Major</option>
                        <option value="D#,minor">D# Minor</option>
                        <option value="E,major">E Major</option>
                        <option value="E,minor">E Minor</option>
                        <option value="F,major">F Major</option>
                        <option value="F,minor">F Minor</option>
                        <option value="F#,major">F# Major</option>
                        <option value="F#,minor">F# Minor</option>
                        <option value="G,major">G Major</option>
                        <option value="G,minor">G Minor</option>
                        <option value="G#,major">G# Major</option>
                        <option value="G#,minor">G# Minor</option>
                    </select>

                    <label for="iiChord">II Chord:</label>
                    <select id="iiChord" name="key">
                            <option value="A,major">A Major</option>
                            <option value="A,minor">A Minor</option>
                            <option value="A#,major">A# Major</option>
                            <option value="A#,minor">A# Minor</option>
                            <option value="B,major">B Major</option>
                            <option value="B,minor">B Minor</option>
                            <option value="C,major">C Major</option>
                            <option value="C,minor">C Minor</option>
                            <option value="C#,major">C# Major</option>
                            <option value="C#,minor">C# Minor</option>
                            <option value="D,major">D Major</option>
                            <option value="D,minor">D Minor</option>
                            <option value="D#,major">D# Major</option>
                            <option value="D#,minor">D# Minor</option>
                            <option value="E,major">E Major</option>
                            <option value="E,minor">E Minor</option>
                            <option value="F,major">F Major</option>
                            <option value="F,minor">F Minor</option>
                            <option value="F#,major">F# Major</option>
                            <option value="F#,minor">F# Minor</option>
                            <option value="G,major">G Major</option>
                            <option value="G,minor">G Minor</option>
                            <option value="G#,major">G# Major</option>
                            <option value="G#,minor">G# Minor</option>
                    </select>

                    <label for="iiiChord">III Chord:</label>
                    <select id="iiiChord" name="key">
                            <option value="A,major">A Major</option>
                            <option value="A,minor">A Minor</option>
                            <option value="A#,major">A# Major</option>
                            <option value="A#,minor">A# Minor</option>
                            <option value="B,major">B Major</option>
                            <option value="B,minor">B Minor</option>
                            <option value="C,major">C Major</option>
                            <option value="C,minor">C Minor</option>
                            <option value="C#,major">C# Major</option>
                            <option value="C#,minor">C# Minor</option>
                            <option value="D,major">D Major</option>
                            <option value="D,minor">D Minor</option>
                            <option value="D#,major">D# Major</option>
                            <option value="D#,minor">D# Minor</option>
                            <option value="E,major">E Major</option>
                            <option value="E,minor">E Minor</option>
                            <option value="F,major">F Major</option>
                            <option value="F,minor">F Minor</option>
                            <option value="F#,major">F# Major</option>
                            <option value="F#,minor">F# Minor</option>
                            <option value="G,major">G Major</option>
                            <option value="G,minor">G Minor</option>
                            <option value="G#,major">G# Major</option>
                            <option value="G#,minor">G# Minor</option>
                    </select>

                    <label for="iVChord">IV Chord:</label>
                    <select id="iVChord" name="key">
                            <option value="A,major">A Major</option>
                            <option value="A,minor">A Minor</option>
                            <option value="A#,major">A# Major</option>
                            <option value="A#,minor">A# Minor</option>
                            <option value="B,major">B Major</option>
                            <option value="B,minor">B Minor</option>
                            <option value="C,major">C Major</option>
                            <option value="C,minor">C Minor</option>
                            <option value="C#,major">C# Major</option>
                            <option value="C#,minor">C# Minor</option>
                            <option value="D,major">D Major</option>
                            <option value="D,minor">D Minor</option>
                            <option value="D#,major">D# Major</option>
                            <option value="D#,minor">D# Minor</option>
                            <option value="E,major">E Major</option>
                            <option value="E,minor">E Minor</option>
                            <option value="F,major">F Major</option>
                            <option value="F,minor">F Minor</option>
                            <option value="F#,major">F# Major</option>
                            <option value="F#,minor">F# Minor</option>
                            <option value="G,major">G Major</option>
                            <option value="G,minor">G Minor</option>
                            <option value="G#,major">G# Major</option>
                            <option value="G#,minor">G# Minor</option>
                    </select>
                    <button type="button" id="submit" onClick={analyse}>Submit</button>
                </form>
            </section>
            );
    }

    export default AnalyseContent;