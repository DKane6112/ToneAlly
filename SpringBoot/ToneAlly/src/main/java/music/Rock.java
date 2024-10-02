package music;

import java.util.ArrayList;

public class Rock implements Genre{

    private ArrayList<Integer> progression = new ArrayList<>();

    public Rock(int num){
        if(num==1){
            progression.add(0);
            progression.add(3);
            progression.add(4);
            progression.add(6);
        }
        else if(num==2){
            progression.add(0);
            progression.add(3);
            progression.add(4);
            progression.add(6);
        }
        else {
            progression.add(0);
            progression.add(3);
            progression.add(4);
            progression.add(6);
        }
    }

    public ArrayList<Integer> progression() {
        return progression;
    }
}
