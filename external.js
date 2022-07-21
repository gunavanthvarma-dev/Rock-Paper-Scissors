function getComputerChoice()
{
    let choice;
    
    let i;
    for(i=0;i<=10;i++)
    {
        if(i%2==0)
          choice = "ROCK";
        else if(i%3==0)
           choice = "PAPER";
        else 
            choice = "SCISSORS";
        
    }
    return choice;
}

