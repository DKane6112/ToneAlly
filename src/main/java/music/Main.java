package music;

import java.util.Scanner;

import static music.Notes.*;
import static music.Notes.Chromatic.*;

public class Main {



    public static String inputString (String message)
    {
        Scanner scanner = new Scanner(System.in);
        String answer;

        System.out.println(message);
        answer = scanner.nextLine();

        return answer;
    }

    public static String [] majorScale(String text){
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] chromatic = test2(allNotes,index);

        String [] majorScale = getMajor(chromatic);
        return majorScale;
    }

    public static String [] minorScale(String text){
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] chromatic = test2(allNotes,index);

        String [] minorScale = getMinor(chromatic);
        return minorScale;
    }

    public static String [] chordNotes(String root, String tone){
        String [] chord = getChord(root,tone);

        return chord;
    }

    public static String chordName(String root, String tone, int position){
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(root);

        String [] test = test2(allNotes, index);
        String [] scale  = new String [7];

        if(tone.equals("M")){
            scale = getMajor(test);
        }
        else{
            scale = getMinor(test);
        }

        if(position != 0 && position != 3 && position != 4 && tone.equals("M")){

            tone = "m";
        }
         else if (position != 0 && position != 1 && position != 3 && position != 4 && tone.equals("m")) {
            tone = "M";
        }


        String chord = scale[position];
        chord = chord + tone;

        return chord;
    }

    public static String[] mode(int index, String modeName){

        return getMode(index, modeName);
    }

    public static void main(String[] args) {


        // background: linear-gradient( to right,rgb(40, 40, 40), rgb(60, 60, 60), rgb(40, 40, 40));
        }
    }