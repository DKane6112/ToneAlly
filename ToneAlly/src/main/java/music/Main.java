package music;

import music.Notes.*;
import java.util.Scanner;
import static music.Notes.*;

public class Main 
{

    public static String [] majorScale(String text)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] chromatic = sortByKey(allNotes,index);

        String [] majorScale = getMajor(chromatic);
        return majorScale;
    }

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

    public static String chordName(String root, String tone, int position)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(root);

        String [] test = test2(allNotes, index);

        String chord = test[position];
        chord = chord + tone;

        return chord;
    }

    public static void main(String[] args) 
    {

    }
}
