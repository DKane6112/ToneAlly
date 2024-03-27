package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import music.Notes.*;
import static music.Main.*;
import java.util.Arrays;
import static music.Main.chordName;
import static music.Notes.Chromatic.test2;
import static music.Notes.getChord;
import static music.Notes.getMode;


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
    public String runLogic(@RequestParam String text)
    {
        String [] allNotes = Chromatic.getAllNotes();
        int index = Chromatic.getIndex(text);
        String [] test = test2(allNotes, index);
        String toReturn = Arrays.toString(test);

        try
        {
            return toReturn;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "Something went wrong";
        }
    }

    @GetMapping("/run/major")
    @ResponseBody
    public String runMajor(@RequestParam String text)
    {
        String [] majorScale = majorScale(text);
        String toReturn = Arrays.toString(majorScale);

        try
        {
            return toReturn;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "Something went wrong";
        }
    }

    @GetMapping("/run/minor")
    @ResponseBody
    public String runMinor(@RequestParam String text)
    {
        String [] minorScale = minorScale(text);
        String toReturn = Arrays.toString(minorScale);

        try
        {
            return toReturn;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "Something went wrong";
        }
    }

    @GetMapping("/run/mode")
    @ResponseBody
    public String runMode(@RequestParam String text)
    {
        String [] test = text.split(",");
        int pos = Integer.parseInt(test[0]);
        String key = test[1];
        String mode = Arrays.toString(getMode(pos,key));

        try
        {
            return mode;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "Something went wrong";
        }
    }

    @GetMapping("/run/chordName")
    @ResponseBody
    public String runChordName(@RequestParam String text)
    {
        String [] test = text.split(",");
        String root = test[0];
        String tone = test[1];
        int pos = Integer.parseInt(test[2]);

        String chord = chordName(root,tone,pos);


        try
        {
            return chord;
        }
        catch (Exception e)
        {
            e.printStackTrace();
            return "Something went wrong";
        }
    }

}