package music;

import music.Notes.*;
import java.util.Scanner;
import static music.Notes.*;
import music.Scale.*;

public class Main
{
    public static String[] chromatic(String key){
        Scale chromatic = new Scale(key);
        return chromatic.getChromatic();
    }
    // Used to return all notes of major scale to be used by SpringBoot controller
    public static String [] majorScale(String key)
    {
        Scale majorScale = new Scale(key);

        return majorScale.getMajor();
    }

    // Used to return all notes of minor scale to be used by SpringBoot controller
    public static String [] minorScale(String key)
    {
        Scale minorScale = new Scale(key);

        return minorScale.getMinor();
    }

    // Used by SpringBoot controller to send names of the chords in the recomended chord progressions
    public static String chordName(String root, String tone, String genre, int pos)
    {
        Scale chromatic = new Scale(root);
        String [] scale;

        if(tone.equals("major")){
            scale = chromatic.getMajor();
        }
        else
        {
            scale = chromatic.getMinor();
        }

        int[] chordProgression = chordProgression(genre);
        String chord = scale[chordProgression[pos]];
        chord = chord + chromatic.getChordTones(tone).get(chordProgression[pos]);

        return chord;
    }

    public static int[] chordProgression(String genre){
        int[] progression = new int[4];
        if(genre.equals("rock")){
            progression[0] = 0;
            progression[1] = 3;
            progression[2] = 4;
            progression[3] = 6;
        }
        else if(genre.equals("pop")){
            progression[0] = 0;
            progression[1] = 3;
            progression[2] = 5;
            progression[3] = 4;
        }
        else{
            progression[0] = 1;
            progression[1] = 4;
            progression[2] = 3;
            progression[3] = 0;
        }

        return progression;
    }

    public static String [] chord(String note, String tone)
    {
        Scale chromatic = new Scale(note);
        String [] scale;

        if(tone.equals("M")){
            scale = chromatic.getMajor();
        }
        else
        {
            scale = chromatic.getMinor();
        }

        return new String[]{scale[0],scale[2],scale[4]};
    }

    // Used to return all notes of the modes to be used by SpringBoot controller
    public static String[] mode(int index, String key, String tone)
    {
        Scale mode = new Scale(key);

        return mode.getMode(index, tone);
    }

    public static void main(String[] args)
    {

    }
}