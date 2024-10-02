import React from 'react';
import {submit} from './api.js';

function Input(){
    return(
                    <section id="userInput">
                        <form id="myForm">
                            <label for="key">Key:</label>
                            <select id="key" name="key">
                                <option value="A">A</option>
                                <option value="A#">A#</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="C#">C#</option>
                                <option value="D">D</option>
                                <option value="D#">D#</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="F#">F#</option>
                                <option value="G">G</option>
                                <option value="G#">G#</option>
                            </select>

                            <label for="mood">Mood:</label>
                            <select id="mood" name="mood">
                                <option value="major">Happy</option>
                                <option value="minor">Sad</option>
                            </select>

                            <label for="genre">Genre:</label>
                            <select id="genre" name="genre">
                                <option value="rock">Rock</option>
                                <option value="pop">Pop</option>
                                <option value="jazz">Jazz</option>
                            </select>

                            <button type="button" id="submit" onClick={submit}>Submit</button>
                        </form>
                    </section>);
                    }

export default Input;