package com.ToneAlly.app;

import org.springframework.web.bind.annotation.*;

import static music.Main.*;

import java.util.ArrayList;
import java.util.HashMap;


@RestController
@RequestMapping("/app")
public class Controller
{

    @GetMapping("/scales")
    @ResponseBody
    public HashMap<String,String[]> runScales(@RequestParam String text)
    {

        HashMap<String,String[]> scales = new HashMap<>();
        scales.put("chromatic", chromatic(text));
        scales.put("major", majorScale(text));
        scales.put("minor", minorScale(text));


        try
        {
            return scales;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return scales;
        }
    }

//    @GetMapping("/run/modes")
//    @ResponseBody
//    public String runMode(@RequestParam String text)
//    {
//        String [] data = text.split(",");
//        int pos = Integer.parseInt(data[0]);
//        String key = data[1];
//        String mode = Arrays.toString(mode(pos,key));
//
//        try
//        {
//            return mode;
//        }
//        catch (Exception e)
//        {
//            e.printStackTrace();
//            return "Something went wrong";
//        }
//    }
//
    @GetMapping("/chords")
    @ResponseBody
    public HashMap<String,String> runChordName(@RequestParam String text)
    {
        HashMap<String,String> chords = new HashMap<>();
        String [] data = text.split(",");
        String root = data[0];
        String tone = data[1];
        String genre = data[2];

        chords.put("Ichord",chordName(root,tone,genre, 0));
        chords.put("IIchord",chordName(root,tone,genre, 1));
        chords.put("IIIchord",chordName(root,tone,genre,2));
        chords.put("IVchord",chordName(root,tone,genre,3));


        try
        {
            return chords;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return chords;
        }
    }

    @GetMapping("/matchingScales")
    @ResponseBody
    public ArrayList<String[]> runMatching(@RequestParam String text)
    {
        String [] data = text.split(",");
        ArrayList<String[]> matchingScales = matchingScales(data);

        try
        {
            return matchingScales;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return matchingScales;
        }
    }

    @GetMapping("/goodScales")
    @ResponseBody
    public ArrayList<String[]> runGood(@RequestParam String text)
    {
        String [] data = text.split(",");
        ArrayList<String[]> goodScales = goodScales(data);

        try
        {
            return goodScales;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return goodScales;
        }
    }

}