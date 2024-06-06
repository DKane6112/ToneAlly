package music;

import music.Notes.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import static music.Notes.*;
import static music.Main.*;

public class Tests
{
  public static String inputString (String message)
    {
        Scanner scanner = new Scanner(System.in);
        String answer;

        System.out.println(message);
        answer = scanner.nextLine();

        return answer;
    }

//  public static void sortByKeyTest()
//  {
//        String [] allNotes = Chromatic.getAllNotes();
//        String userKey = inputString("Choose your key: ");
//        int index = Chromatic.getIndex(userKey);
//
//        String [] test = sortByKey(allNotes, index);
//        for(int i = 0; i <test.length; i++)
//        {
//            System.out.println(test[i]);
//        }
//  }
//
//  public static void getMode(int mode)
//  {
//
//        String userKey = inputString("Choose your key: ");
//        Scale scale = new Scale(userKey);
//        String [] allNotes = scale.getChromatic();
//        int index = Chromatic.getIndex(userKey);
//
//        String [] test = sortByKey(allNotes, index);
//
//        String [] modeScale = getMajor(test);
//
//        String [] sortedMode = sortByKey(modeScale, mode);
//
//        for(int i = 0; i < sortedMode.length; i++)
//        {
//            System.out.println(sortedMode[i]);
//        }
//  }
    
  
  public static void main(String[] args) 
  {

      Chord one = new Chord("A","minor");
      Chord two = new Chord("E","minor");
      Chord three = new Chord("D","minor");
      System.out.println(three.getRoot());
      System.out.println(three.getThird());
      System.out.println(three.getFifth());

      ArrayList<String> sddd = three.getBadNotes();
      for (String s:
           sddd) {
          System.out.println(s);
      }

      ArrayList<Chord> list = new ArrayList<>();
      list.add(one);
      list.add(two);
      list.add(three);
      ChordProgression progression = new ChordProgression(list);

      ArrayList<String[]> chords = progression.getGoodScales();

      for (String[] s:chords) {
          System.out.println(Arrays.toString(s));

      }

      System.out.println(" ");

      String[] l = {"G","major","C","major","D","major","E","minor"};
      ArrayList<String[]> scales = goodScales(l);

      for (String[] s:scales) {
          System.out.println(Arrays.toString(s));

      }

      System.out.println(" ");

      String[] o = {"G","major","C","major","D","major","E","minor"};
      ArrayList<String[]> sca = matchingScales(o);

      for (String[] s:sca) {
          System.out.println(Arrays.toString(s));

      }
  }
  
}
  
