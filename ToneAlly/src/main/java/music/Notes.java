package music;

public class Notes
{

    private final String [] allNotes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

    public String[] getAllNotes()
    {

        return allNotes;
    }

    public int getIndex(String note){
        int index = 0;

        for(int i = 0; i< allNotes.length; i++ ){
            if (note.equals(allNotes[i])){
                index = i;
            }
        }
        return index;
    }

}
