package music;

import music.Notes.*;
import java.util.Scanner;
import static music.Notes.*;

public class Main 
{
    // Used to return all notes of major scale to be used by SpringBoot controller
    public static String [] majorScale(String text)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] chromatic = sortByKey(allNotes,index);

        String [] majorScale = getMajor(chromatic);
        return majorScale;
    }

    // Used to return all notes of minor scale to be used by SpringBoot controller
    public static String [] minorScale(String text)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] chromatic = sortByKey(allNotes,index);

        String [] minorScale = getMinor(chromatic);
        return minorScale;
    }

    public static String [] chordNotes(String root, String tone)
    {
        String [] chord = getChord(root,tone);

        return chord;
    }

    // Used by SpringBoot controller to send names of the chords in the recomended chord progressions
    public static String chordName(String root, String tone, int position)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(root);

        String [] test = sortByKey(allNotes, index);

        String chord = test[position];
        chord = chord + tone;

        return chord;
    }

    // Used to return all notes of the modes to be used by SpringBoot controller
    public static String[] mode(int index, String modeName)
    {
        return getMode(index, modeName);
    }

    public static void main(String[] args) 
    {

    }
}
