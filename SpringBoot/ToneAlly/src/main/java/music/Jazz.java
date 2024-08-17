package music;

import java.util.ArrayList;

public class Jazz implements Genre{
    private ArrayList<Integer> progression = new ArrayList<>();

    public Jazz(int num){
        if(num==1){
            progression.add(1);
            progression.add(4);
            progression.add(3);
            progression.add(0);
        }
        else if(num==2){
            progression.add(1);
            progression.add(4);
            progression.add(3);
            progression.add(0);
        }
        else {
            progression.add(1);
            progression.add(4);
            progression.add(3);
            progression.add(0);
        }
    }

    public ArrayList<Integer> progression() {
        return progression;
    }
}
