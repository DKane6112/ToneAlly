package music;

import java.util.Random;

public class GenreProgression {

    private Genre genre;

    public GenreProgression(String genre){
        Random random = new Random();
        int num = random.nextInt(1,4);
        if(genre.equals("rock")){
            this.genre = new Rock(num);

        } else if (genre.equals("pop")) {
            this.genre = new Pop(num);

        } else {
            this.genre = new Jazz(num);

        }
    }

    public int getChord(int pos){
        return genre.progression().get(pos);
    }

}
