using System;

 class TTest
{
    public int x;
    public int y;
}
class Test:TTest
{
        public static void Main (String [] args)
    {
        var sc=new Test();
        sc.x=110;
        sc.y=150;
        Console.WriteLine("x= "+sc.x+"y= "+sc.y);
        Console.ReadLine();
    }
    }


