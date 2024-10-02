package music;

import java.util.ArrayList;

public class Pop implements Genre{
    private ArrayList<Integer> progression = new ArrayList<>();

    public Pop(int num){
        if(num==1){
            progression.add(0);
            progression.add(3);
            progression.add(5);
            progression.add(4);
        }
        else if(num==2){
            progression.add(0);
            progression.add(3);
            progression.add(5);
            progression.add(4);
        }
        else {
            progression.add(0);
            progression.add(3);
            progression.add(5);
            progression.add(4);
        }
    }

    public ArrayList<Integer> progression() {
        return progression;
    }
}
