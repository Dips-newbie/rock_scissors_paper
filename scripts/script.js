var computer = 0;
var player = 0;  

/*Get inputs from both player and computer*/
function playerChoice(playerSelection)
{
    //alert(playerSelection);
    let ComputerSelection=getComputerChoice(3);
    //console.log(ComputerSelection,playerSelection);
    playRound(ComputerSelection,playerSelection);
}

/*computer input*/
function getComputerChoice(max)
{
    return Math.floor(Math.random() * max);
}

function playRound(ComputerSelection,playerSelection){
   // console.log(computer,player);
   if(ComputerSelection === playerSelection){  
       document.getElementById("gameresults_title").innerHTML = "its a tie";
       document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
       console.log(gameOver(computer,player));
       /*alert("its a tie" + ComputerSelection+playerSelection); */
  }

  else if((ComputerSelection == 1 && playerSelection == 0) || (ComputerSelection == 0 && playerSelection == 1))
     {
        //alert('1 - 0');
        if(ComputerSelection == 1){computer++;}else if(playerSelection == 1){player++;}
        document.getElementById("gameresults_title").innerHTML = "Paper cover rock";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        console.log(gameOver(computer,player));
        //alert("paper cover rock!"+ ComputerSelection+playerSelection + computer + player);
     }

  else if((ComputerSelection == 2 && playerSelection == 0) || (ComputerSelection == 0 && playerSelection == 2))
     {
        //alert('2 - 0');
        if(ComputerSelection == 0){computer++;}else if(playerSelection == 0){player++;}
        document.getElementById("gameresults_title").innerHTML = "rock crush scissor";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        console.log(gameOver(computer,player));

        //alert("rock crush scissor"+ ComputerSelection+playerSelection + computer + player);
     }
      
  else if((ComputerSelection == 2 && playerSelection == 1) || (ComputerSelection == 1 && playerSelection == 2))
     {
       // alert('2 - 1');
        if(ComputerSelection == 2){computer++;}else if(playerSelection == 2){player++;}
        document.getElementById("gameresults_title").innerHTML = "scissor cut paper.";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        console.log(gameOver(computer,player));

        //alert("scissor cut paper"+ ComputerSelection+playerSelection + computer + player);
     } 
     //console.log("```````````````````");
     //console.log(computer,player);
    // console.log("------------------");
}

 /* when any player score 5(winning score) ,then game starts again*/ 

function gameOver(computer,player){
    if(computer == 5 || player == 5){
        document.getElementById("gameresults_title").innerHTML="Gameover";
        document.getElementById("game").innerHTML="<button onclick=window.location.reload();>start again</button>";
    }else{return;}
}