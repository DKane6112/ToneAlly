
public class Main 
{
    // This method will be what is used to change the array of all music notes to start at the key the user provides
   public static String[] test(String[] notes, int start) 
    {
        int length = notes.length;
        String[] test = new String[length];

        for(int i = 0; i < notes.length; i++)
        {
            test[i] = notes[start];
            start = start + 1;
            if(start == notes.length){
                start = 0;
            }
        }
        return test;
    }

    public static String inputString (String message)
    {
        Scanner scanner = new Scanner(System.in);
        String answer;

        System.out.println(message);
        answer = scanner.nextLine();

        return answer;
    }

    public static void main(String[] args) 
    {
        // Test to see if it works with OOP
        Notes.Chromatic chromaticScale = Notes.getChromatic();
        String [] allNotes = chromaticScale.getAllNotes();
        String userKey = inputString("Choose your key: ");
        int index = chromaticScale.getIndex(userKey);

        String [] test = test(allNotes, index);
        for(int i = 0; i <test.length; i++)
        {
            System.out.println(test[i]);
        }

    }
}
