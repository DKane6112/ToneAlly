package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import music.Notes.*;
import static music.Main.*;
import java.util.Arrays;




@Controller
@RequestMapping("/app")
public class TestController
{

    @GetMapping("/")
    public String index()
    {
        return "index";
    }

    @GetMapping("/run")
    @ResponseBody
    public String runLogic(@RequestParam String text)
    {
        String [] chromatic = chromatic(text);
        String toReturn = Arrays.toString(chromatic);

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