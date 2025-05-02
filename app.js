let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const comScorePara=document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    // rock,paper,sicssors
}

const drawGame=()=>{
    // console.log("draw game");
     msg.innerText="game was draw. play again";
     msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        // console.log("you win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("you lose");
        compScore++;
        comScorePara.innerText=compScore;
         msg.innerText=`You Lose ${comChoice} beats Your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // console.log("user choice",userChoice);
    // compute choice
    const comChoice=genComChoice();
    // console.log("computer choice",comChoice);


    if(userChoice===comChoice){
        // draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=comChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=comChoice==="scissors" ? false : true;
        }
        else{
            userWin=comChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};


choice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})