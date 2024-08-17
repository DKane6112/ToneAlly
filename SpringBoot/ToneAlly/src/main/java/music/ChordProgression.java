package music;

import java.util.ArrayList;
import java.util.HashMap;

public class ChordProgression {
    private ArrayList<Chord> userProgression = new ArrayList<>();

    public ChordProgression(ArrayList<Chord> progression){
        this.userProgression = progression;
    }

    public ArrayList<String[]> getGoodScales(){
        ArrayList<String[]> goodScales = new ArrayList<>();
        ArrayList<String> badNotes = new ArrayList<>();

        for (Chord c:userProgression) {
            ArrayList<String> x = c.getBadNotes();
            for (String n:x) {
                badNotes.add(n);
            }
        }

        String[] notes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

        for(int i= 0; i< notes.length; i++){
            boolean addMinor = true;
            boolean addMajor = true;
            Scale scale = new Scale(notes[i]);
            String[] minor = scale.getMinor();
            String[] major = scale.getMajor();

            for(int j = 0; j<minor.length;j++){
                for(int k = 0; k< badNotes.size();k++){
                    if(minor[j] == badNotes.get(k)){
                        addMinor = false;
                    }
                }
            }

            for(int j = 0; j<major.length;j++){
                for(int k = 0; k< badNotes.size();k++){
                    if(major[j] == badNotes.get(k)){
                        addMajor = false;
                    }
                }
            }

            if(addMinor){
                goodScales.add(minor);

            }
            if(addMajor){
                goodScales.add(major);
            }
        }
        return goodScales;
    }

    public ArrayList<String[]> getMatchingScales(){
        ArrayList<String[]> goodScales = new ArrayList<>();
        HashMap<String,Integer> goodNotes = new HashMap<>();

        for (Chord c:userProgression) {
            goodNotes.put(c.getRoot(),goodNotes.size());
            goodNotes.put(c.getThird(),goodNotes.size());
            goodNotes.put(c.getFifth(),goodNotes.size());
        }

        String[] notes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

        for(int i= 0; i< notes.length; i++){
            boolean addMinor = true;
            boolean addMajor = true;
            boolean yes = false;
            Scale scale = new Scale(notes[i]);
            String[] minor = scale.getMinor();
            String[] major = scale.getMajor();

            for(int j = 0; j<minor.length;j++){

                if(goodNotes.get(minor[j]) == null){
                   addMinor = false;
                }
            }

            for(int j = 0; j<major.length;j++){

                if(goodNotes.get(major[j]) == null){
                    addMajor = false;
                }
            }

            if(addMinor){
                goodScales.add(minor);

            }
            if(addMajor){
                goodScales.add(major);
            }
        }
        return goodScales;
    }
}
