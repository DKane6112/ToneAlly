package com.ToneAlly.app;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

import static music.Main.*;


@RestController
//@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/app")
public class Controller
{

    @GetMapping("/")
    public String index()
    {
        return "index";
    }

    @GetMapping("/scales")
//    @CrossOrigin(origins="http://localhost:3000")
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
//    @CrossOrigin(origins="http://localhost:3000")
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
//    @CrossOrigin(origins="http://localhost:3000")
    @ResponseBody
    public HashMap<String, String[]> runMatching(@RequestParam String text)
    {
        String [] data = text.split(",");
        HashMap<String, String[]> matchingScales = matchingScales(data);
//        matchingScales.put("test", new String[]{"hi", "test"});


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
//    @CrossOrigin(origins="http://localhost:3000")
    @ResponseBody
    public HashMap<String, String[]> runGood(@RequestParam String text)
    {
        String [] data = text.split(",");
        HashMap<String,String[]> goodScales = goodScales(data);

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