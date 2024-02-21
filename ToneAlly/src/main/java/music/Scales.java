class Scale extends Notes{

    private String[] chromatic;


    public Scale(String note){

        int start = Notes.getIndex(note)
        int length = Notes.getAllNotes.length;
        String[] chromatic = new String[length];

        for(int i = 0; i < length; i++)
        {
            chromatic[i] = notes[start];
            start = start + 1;
            if(start == notes.length){
                start = 0;
            }
        }
    }
}