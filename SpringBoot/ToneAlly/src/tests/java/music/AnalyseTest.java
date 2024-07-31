package music;

import java.util.ArrayList;
import java.util.Arrays;

import static music.Main.goodScales;
import static music.Main.matchingScales;

public class AnalyseTest
{
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
  
