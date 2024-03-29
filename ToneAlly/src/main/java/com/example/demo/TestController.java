package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import music.Notes.*;
import static music.Main.*;
import java.util.Arrays;
import java.util.HashMap;


@Controller
@RequestMapping("/app")
public class TestController
{

    @GetMapping("/")
    public String index()
    {
        return "index";
    }

    @GetMapping("/analyse")
    public String analyse()
    {
        return "analyse";
    }

    @GetMapping("/run")
    @ResponseBody
    public HashMap<String,String[]> runLogic(@RequestParam String text)
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

//    @GetMapping("/run/mode")
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
    @GetMapping("/run/chordName")
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

}