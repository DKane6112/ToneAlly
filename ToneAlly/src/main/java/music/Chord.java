package music;

import java.util.ArrayList;

public class Chord extends Scale {
    private String root;
    private String third;
    private String fifth;
    private String tone;
    private ArrayList<String> badNotes = new ArrayList<>();
    public Chord(String root, String tone){
        super(root);

        this.root = root;

        if(tone.equals("minor")){
            String[] minor = this.getMinor();
            this.third = minor[2];
            this.fifth = minor[4];
        }
        else{
            String[] major = this.getMajor();
            this.third = major[2];
            this.fifth = major[4];
        }
        this.tone = tone;
    }

    public ArrayList<String> getBadNotes(){
        String[] chromatic = this.getChromatic();

        if(tone.equals("major")){
            badNotes.add(chromatic[1]);
        }
        else if(tone.equals("minor")){
            badNotes.add(chromatic[11]);
        }

        return badNotes;
    }

    public String getRoot(){
        return this.root;
    }

    public String getThird(){
        return this.third;
    }

    public String getFifth(){
        return this.fifth;
    }


}
