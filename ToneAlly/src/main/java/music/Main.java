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
    public static String chordName(String root, String tone, int position)
    {
        Scale chromatic = new Scale(root);
        String [] scale;

        if(tone.equals("M")){
            scale = chromatic.getMajor();
        }
        else
        {
            scale = chromatic.getMinor();
        }

        String chord = scale[position];
        chord = chord + tone;

        return chord;
    }

    public static String [] chord(String note, String tone)
    {
        Scale chromatic = new Scale(note);
        String [] scale;

        if(tone.equals("Major")){
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