package music;

Public class Tests
{
  public static String inputString (String message)
    {
        Scanner scanner = new Scanner(System.in);
        String answer;

        System.out.println(message);
        answer = scanner.nextLine();

        return answer;
    }

  public static void sortByKeyTest()
  {
    String [] allNotes = Chromatic.getAllNotes();
        String userKey = inputString("Choose your key: ");
        int index = Chromatic.getIndex(userKey);

        String [] test = test2(allNotes, index);
        for(int i = 0; i <test.length; i++)
        {
            System.out.println(test[i]);
        }
  }
    
  
  public static void main(String[] args) 
  {

        sortByKeyTest();
  }
  
}
  
