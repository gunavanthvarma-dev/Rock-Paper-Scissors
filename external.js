function getComputerChoice()
{
    
    
   /* let i;
    for(i=0;i<=10;i++)
    {
        if(i%2==0)
          choice = "ROCK";
        else if(i%3==0)
           choice = "PAPER";
        else 
            choice = "SCISSORS";
        
    }
    return choice;*/

    /* the above logic not random */
    
    /*the following logic*/

    let choice;
    let temp = Math.floor(Math.random()*10);

    if(temp%2==0 && temp!=0)
      choice="ROCK";
    else if(temp%3==0 && temp!=0)
      choice="PAPER";
    else if(temp==0 || (temp%2!=0 && temp%3!=0))
      choice ="SCISSORS";

    return choice;
}

