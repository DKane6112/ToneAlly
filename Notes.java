public class Notes {

    public static class Chromatic {
        private final String [] allNotes = {"A","A#","B","C","C#","D","D#","E","F","F#","G","G#"};

        public String[] getAllNotes(){
            return allNotes;
        }
    }

    public static Chromatic getChromatic(){

        return new Chromatic();
    }
}
