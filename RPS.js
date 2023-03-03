const computerCard = document.getElementById("computerCard");
const personCard  = document.getElementById("personCard");
const computerScore = document.getElementById("computerScore");
const personScore = document.getElementById("personScore");
const  rock = document.getElementById("rock");
const  paper= document.getElementById("paper");
const  scissors = document.getElementById("scissors");
let temp=null;
let clicked=false;
let scorePerson=null;
let scoreComputer=null;



rock.addEventListener("click", () => {
    clicked=true;
    personCard.innerHTML="ROCK";
    ComputerCard();
    Score();

});
paper.addEventListener("click", () => {
    clicked=true;
    personCard.innerHTML="PAPER";
    ComputerCard();
    Score();

});
scissors.addEventListener("click", () => {
    clicked=true;
    personCard.innerHTML="SCISSORS";
    ComputerCard();
    Score();

});


function Score(){
    
    if(clicked=true){
        if(personCard.innerHTML=="ROCK" && computerCard.innerHTML=="PAPER") {
            scoreComputer=scoreComputer+1;
            computerScore.innerHTML=scoreComputer;
        }
        else if(personCard.innerHTML=="ROCK" && computerCard.innerHTML=="SCISSORS"){
            scorePerson=scorePerson+1;
            personScore.innerHTML=scorePerson;
            
        }
        
        else if(personCard.innerHTML=="PAPER" && computerCard.innerHTML=="ROCK"){
            scorePerson=scorePerson+1;
            personScore.innerHTML=scorePerson;

        }
        else if(personCard.innerHTML=="PAPER" && computerCard.innerHTML=="SCISSORS"){
            scoreComputer=scoreComputer+1;
            computerScore.innerHTML=scoreComputer;

        }
        else if(personCard.innerHTML=="SCISSORS" && computerCard.innerHTML=="PAPER"){
            scorePerson=scorePerson+1;
            personScore.innerHTML=scorePerson;

        }
        else if(personCard.innerHTML=="SCISSORS" && computerCard.innerHTML=="ROCK"){
            scoreComputer=scoreComputer+1;
            computerScore.innerHTML=scoreComputer;
        }
        
        
        

    }
}




function ComputerCard() {
    temp=Math.floor(Math.random()*3)+1;
    switch (temp) {
        case 1:
            computerCard.innerHTML="ROCK";
            break;
        case 2:
            computerCard.innerHTML="PAPER";
            break;
        case 3:
            computerCard.innerHTML="SCISSORS";
            break;
            

    }

}


