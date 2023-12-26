
public class Main {
    // This method will be what is used to change the array of all music notes to start at the key the user provides
    public static int[] test(int[] notes, int start) {
        int[] test = new int[7];


        for(int i = 0; i < notes.length; i++){
            test[i] = notes[start];
            start = start + 1;
            if(start == notes.length){
                start = 0;
            }
        }
        return test;
    }
    public static void main(String[] args) {
        int[] notes = {1,2,3,4,5,6,7,};
        int[] test = test(notes,2);
        for(int i = 0; i <test.length; i++){
            System.out.println(test[i]);
        }

        }
    }
