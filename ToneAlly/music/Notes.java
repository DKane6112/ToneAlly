package music;

public class Notes 
{

    public static class Chromatic
    {
        private final String [] allNotes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

        public String[] getAllNotes()
        {
            
            return allNotes;
        }
    }

    public static String []getMajor(String [] chromatic)
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

    public static String []getMinor(String [] chromatic)
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

    public static Chromatic getChromatic()
    {

        return new Chromatic();
    }
}
