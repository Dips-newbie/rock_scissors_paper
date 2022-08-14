var computer = 0;
var player = 0;  

/*Get inputs from both player and computer*/
function playerChoice(playerSelection)
{
   // alert(playerSelection);
    let ComputerSelection=getComputerChoice(3);
    console.log(ComputerSelection,playerSelection);
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
        var textToDisplay = 'its a tie';
        createDivForgameresults_title(textToDisplay);
        createDivForgameresults_score(computer,player);
        gameOver(computer,player);


       /*document.getElementById("gameresults_title").innerHTML = "its a tie";
       document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
       gameOver(computer,player);
       alert("its a tie" + ComputerSelection+playerSelection); */
  }

  else if((ComputerSelection == 1 && playerSelection == 0) || (ComputerSelection == 0 && playerSelection == 1))
     {
        if(ComputerSelection == 1){computer++;}else if(playerSelection == 1){player++;}
        var textToDisplay = 'Paper Cover Rock';
        createDivForgameresults_title(textToDisplay);
        createDivForgameresults_score(computer,player);
        gameOver(computer,player);


       /* document.getElementById("gameresults_title").innerHTML = "Paper cover rock";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        gameOver(computer,player);
        alert("paper cover rock!"+ ComputerSelection+playerSelection + computer + player);*/
     }

  else if((ComputerSelection == 2 && playerSelection == 0) || (ComputerSelection == 0 && playerSelection == 2))
     {
        if(ComputerSelection == 0){computer++;}else if(playerSelection == 0){player++;}
        var textToDisplay = 'Rock Crush Scissor';
        createDivForgameresults_title(textToDisplay);
        createDivForgameresults_score(computer,player);
        gameOver(computer,player);    
      
      
        /* document.getElementById("gameresults_title").innerHTML = "rock crush scissor";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        gameOver(computer,player);
        alert("rock crush scissor"+ ComputerSelection+playerSelection + computer + player);*/
     }
      
  else if((ComputerSelection == 2 && playerSelection == 1) || (ComputerSelection == 1 && playerSelection == 2))
     {
        if(ComputerSelection == 2){computer++;}else if(playerSelection == 2){player++;}
        var textToDisplay = 'Scissor Cut Paper';
        createDivForgameresults_title(textToDisplay);
        createDivForgameresults_score(computer,player);
        gameOver(computer,player);


        /*document.getElementById("gameresults_title").innerHTML = "scissor cut paper.";
        document.getElementById("gameresults_score").innerHTML = "computer score = "+computer+"Player score = "+player;
        gameOver(computer,player);
        alert("scissor cut paper"+ ComputerSelection+playerSelection + computer + player);*/
     } 
}

 /* when any player score 5(winning score) ,then game starts again*/ 

function gameOver(computer,player){
    if(computer == 5 || player == 5){
        document.getElementById("game").innerHTML="<button onclick=window.location.reload();>START AGAIN</button>";
        document.getElementById("game").setAttribute('style',"font-size:24px;border-radius: 22%;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);padding:90px;");
        const finalScore = document.querySelector('#gameresults');
        finalScore.classList.add('game_score');
        if(player == 5){var winner = "You";}else{ var winner = 'Computer';}
        finalScore.textContent = "Winner is : "+winner+"....CONGRATS!! Your scores = "+player+" /  Computer score = "+computer;
        finalScore.setAttribute('style','font-family: fantasy;font-weight:bolder;text-align:center;font-size:xxx-large;background-color:cornsilk;border-bottom: 4px dotted red;color:deeppink;');
    }else{return;}
}

/*This function will create div for showing result and finally append it with parent div*/
function  createDivForgameresults_title(textToDisplay){ 
    const gameresults = document.querySelector('#gameresults');
    const gameresults_title = document.createElement('div');
    gameresults_title.classList.add('gamerslt_title');
    gameresults_title.textContent = textToDisplay;
    gameresults_title.setAttribute('style','color:dimgrey;font-family: fantasy;font-weight:bolder;text-align:center;font-size:large;background-color:cornsilk;');
    gameresults.appendChild(gameresults_title);
}

/*This function will create div for showing score and finally append it with parent div*/
function createDivForgameresults_score(computer,player)
{
    const gameresults = document.querySelector('#gameresults');
    const gameresults_score = document.createElement('div');
    gameresults_score.classList.add('gamerslt_score');
    gameresults_score.textContent = "Your score = "+player+" /  Computer score = "+computer;
    gameresults_score.setAttribute('style','font-family: fantasy;font-weight:bolder;text-align:center;font-size:large;background-color:cornsilk;border-bottom: 4px dotted red;');
    gameresults.appendChild(gameresults_score);
}