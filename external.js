function getComputerChoice()
{
    
    let choice;
     let milli = new Date();
     let temp = milli.getMilliseconds()%10;

    if(temp%2==0 && temp!=0)
      choice="ROCK";
    else if(temp%3==0 && temp!=0)
      choice="PAPER";
    else if(temp==0 || (temp%2!=0 && temp%3!=0))
      choice ="SCISSORS";

    

    return choice;

}

function PlayAround(PlayerSelection,ComputerSelection)
{
    if(PlayerSelection.charAt(0)=="R")
    {
        if(ComputerSelection.charAt(0)=="R")
           return "Its a DRAW!!!";
        else if(ComputerSelection.charAt(0)=="P")
                return "You LOSE!!!Paper beats Rock";
            else if(ComputerSelection.charAt(0)=="S")
                    return "You WIN!!!Rock beats Scissors";
    }
    else if(PlayerSelection.charAt(0)=="P")
    {
        if(ComputerSelection.charAt(0)=="P")
           return "Its a DRAW!!!";
        else if(ComputerSelection.charAt(0)=="S")
                return "You LOSE!!!Scissors beats Paper";
            else if(ComputerSelection.charAt(0)=="R")
                    return "You WIN!!!Paper beats Rock";
    }
    else if(PlayerSelection.charAt(0)=="S")
    {
        if(ComputerSelection.charAt(0)=="S")
           return "Its a DRAW!!!";
        else if(ComputerSelection.charAt(0)=="P")
                return "You WIN!!!Scissors beats Paper";
            else if(ComputerSelection.charAt(0)=="R")
                    return "You LOSE!!!Rock beats Scissors";
    }
}

function Game()
{
   let rounds = parseInt(prompt("enter no. of rounds:"));
   if(isNaN(rounds))
   {
     rounds = console.log("Only numbers are allowed please enter again:");
   }
   else
   {
      for(let i=0;i<rounds;i++)
      {
        let message = `Round:${i+1}`;
        console.log(message);
        let PlayerSelection=prompt("Enter your choice(Rock,Paper,Scissors):");
        PlayerSelection = PlayerSelection.toUpperCase();
        let ComputerSelection = getComputerChoice();
        console.log(PlayAround(PlayerSelection,ComputerSelection));
        
      }
   }
}

Game();










