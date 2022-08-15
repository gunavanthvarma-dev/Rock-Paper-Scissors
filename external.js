let PlayerWin =0;
let CompWin =0;


rounds = 5;

let PlayerSelectionR = document.querySelector('#rock');
let PlayerSelectionP = document.querySelector('#paper');
let PlayerSelectionS = document.querySelector('#scissors');

const outcome = document.querySelector('#outcome');
let result = document.querySelector('#outcome');

  
  PlayerSelectionR.addEventListener("click",function(){
    PlayAround(PlayerSelectionR.textContent,getComputerChoice());
  });
PlayerSelectionP.addEventListener("click",function(){
  PlayAround(PlayerSelectionP.textContent,getComputerChoice());
});
  PlayerSelectionS.addEventListener("click",function(){
    PlayAround(PlayerSelectionS.textContent,getComputerChoice());
  });

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



 function PlayAround(YourChoice,ComputerSelection)
{
    let OutCome  = document.querySelector('#outcome');
    let cpoints = document.querySelector('#cpoints');
    let ypoints = document.querySelector('#ypoints');
    
    if(YourChoice.charAt(0)=="R")
    {
        if(ComputerSelection.charAt(0)=="R")
          {
            
            OutCome.textContent = "Its a DRAW!!!";
            
          } 
        else if(ComputerSelection.charAt(0)=="P")
                { 
                    ++CompWin;
                   
                   OutCome.textContent = "You LOSE!!!Paper beats Rock";
                   cpoints.textContent = CompWin;
                }
            else if(ComputerSelection.charAt(0)=="S")
                 {
                    ++PlayerWin;
                    //return "You WIN!!!Rock beats Scissors";
                    OutCome.textContent =  "You WIN!!!Rock beats Scissors";
                    ypoints.textContent = PlayerWin;
                   
                 }  
    }
    else if(YourChoice.charAt(0)=="P")
     {
        if(ComputerSelection.charAt(0)=="P")
          {
            //return "Its a DRAW!!!";
            OutCome.textContent = "Its a DRAW!!!";
          } 
        else if(ComputerSelection.charAt(0)=="S")
                {
                    ++CompWin;
                    //return "You LOSE!!!Scissors beats Paper";
                    OutCome.textContent = "You LOSE!!!Scissors beats Paper";
                    cpoints.textContent = CompWin;
                }
            else if(ComputerSelection.charAt(0)=="R")
                   {
                    ++PlayerWin;
                    //return "You WIN!!!Paper beats Rock";
                    OutCome.textContent = "You WIN!!!Paper beats Rock";
                  
                    ypoints.textContent = PlayerWin.toString();
                   } 
    }
  
    else if(YourChoice.charAt(0)=="S")
    {
        if(ComputerSelection.charAt(0)=="S")
          {
                        //return "Its a DRAW!!!";
                        OutCome.textContent = "Its a DRAW!!!";
          }
        else if(ComputerSelection.charAt(0)=="P")
              {
               ++PlayerWin;
               // return "You WIN!!!Scissors beats Paper";
               OutCome.textContent = "You WIN!!!Scissors beats Paper";
               ypoints.textContent = PlayerWin;
               
              }
            else if(ComputerSelection.charAt(0)=="R")
                    {
                        ++CompWin;
                        //return "You LOSE!!!Rock beats Scissors";
                        OutCome.textContent = "You LOSE!!!Rock beats Scissors";
                        cpoints.textContent = CompWin;
                    }
    }

  if(CompWin==5 || PlayerWin==5)
  {
    const choices = document.querySelector('.choices');
    while(choices.hasChildNodes())
    {
      choices.removeChild(choices.firstChild);
    }

    if(PlayerWin>CompWin)
    {
    
      result.textContent = "Player WINS!!!reload to play again ";
    }  
    else if(CompWin>PlayerWin)
    {
     
      result.textContent = "Computer WINS!!!reload to play again"
    } 
    else if(CompWin==PlayerWin)
    {
      
      result.textContent = "It's a DRAW!!!reload to play again";
    }

    
  }
}



   
     
     













