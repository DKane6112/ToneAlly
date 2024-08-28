package music;

import java.util.ArrayList;
import java.util.HashMap;

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
        GenreProgression progression = new GenreProgression(genre);
        int chordRoot = progression.getChord(pos);
        String chord = scale[chordRoot];
        chord = chord + chromatic.getChordTones(tone).get(chordRoot);

        return chord;
    }

    public static HashMap<String, String[]> goodScales(String[] chords)
    {
        ArrayList<Chord> list = new ArrayList<>();

        for (int i = 0; i<chords.length; i = i+2) {
            Chord chord = new Chord(chords[i],chords[i+1]);
            list.add(chord);
        }

        ChordProgression progression = new ChordProgression(list);

        HashMap<String, String[]> goodScales = progression.getGoodScales();

        return goodScales;
    }

    public static HashMap<String, String[]> matchingScales(String[] chords)
    {
        ArrayList<Chord> list = new ArrayList<>();

        for (int i = 0; i<chords.length; i = i+2) {
            Chord chord = new Chord(chords[i],chords[i+1]);
            list.add(chord);
        }

        ChordProgression progression = new ChordProgression(list);

        HashMap<String, String[]> goodScales = progression.getMatchingScales();

        return goodScales;
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