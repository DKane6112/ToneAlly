package music;
class Scale extends Notes{

    private String[] chromatic;


    public Scale(String note){

        int start = this.getIndex(note);
        String [] notes = this.getAllNotes();
        this.chromatic = new String[notes.length];

        for(int i = 0; i < notes.length; i++)
        {
            chromatic[i] = notes[start];
            start = start + 1;
            if(start == notes.length){
                start = 0;
            }
        }
    }

    public String[] getChromatic(){

        return this.chromatic;
    }
    public String[] getMajor()
    {

        String[] majorScale = new String[7];

        majorScale[0] = chromatic[0];
        majorScale[1] = chromatic[2];
        majorScale[2] = chromatic[4];
        majorScale[3] = chromatic[5];
        majorScale[4] = chromatic[7];
        majorScale[5] = chromatic[9];
        majorScale[6] = chromatic[11];

        return majorScale;
    }

    public String[] getMinor()
    {

        String[] minorScale = new String[7];

        minorScale[0] = chromatic[0];
        minorScale[1] = chromatic[2];
        minorScale[2] = chromatic[3];
        minorScale[3] = chromatic[5];
        minorScale[4] = chromatic[7];
        minorScale[5] = chromatic[8];
        minorScale[6] = chromatic[10];

        return minorScale;
    }

    public String[] getHarmonicMinor()
    {

        String[] minorScale = new String[7];

        minorScale[0] = chromatic[0];
        minorScale[1] = chromatic[2];
        minorScale[2] = chromatic[3];
        minorScale[3] = chromatic[5];
        minorScale[4] = chromatic[7];
        minorScale[5] = chromatic[8];
        minorScale[6] = chromatic[11];

        return minorScale;
    }

    public String[] getMode(int start, String tone){

        String[] mode = new String[7];

        if(tone.equals("Major")){

            mode = this.getMajor();

        }
        else
        {
            mode = this.getMinor();
        }


        for(int i = 0; i < mode.length; i++)
        {
            mode[i] = mode[start];
            start = start + 1;
            if(start == mode.length){
                start = 0;
            }
        }

        return mode;

    }
}