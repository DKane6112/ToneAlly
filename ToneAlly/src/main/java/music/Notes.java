package music;

public class Notes 
{

    private final String [] allNotes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

    public String[] getAllNotes()
    {
            
        return allNotes;
    }

    public static int getIndex(String note){
            int index = 0;
            for(int i = 0; i< allNotes.length; i++ ){
                if (note.equals(allNotes[i])){
                    index = i;
                }
            }
           return index;
        }

    public static String [] getChord(String note, String tone)
    {
        Chromatic chromatic = getChromatic();
        String[] key = chromatic.getAllNotes();
        int index = chromatic.getIndex(note);
        String[] scale = new String[7];

        String[] notesByKey = sortByKey(key,index);

        if(tone.equals("Major")){
            scale = Chromatic.getMajor(notesByKey);
        }
        else
        {
            scale = Chromatic.getMinor(notesByKey);
        }

        String[] chord = {scale[0],scale[2],scale[4]};

        return chord;
    }

}
