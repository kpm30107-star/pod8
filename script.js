let playerScore = 0;
let compScore = 0;
    
const choices = document.querySelectorAll(".choice");
const comment = document.querySelector("#comment");
    
const playerScoreTotal = document.querySelector("#playerScoreCount");
const compScoreTotal = document.querySelector("#compScoreCount");
    
const randcompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randChoice = Math.floor(Math.random() * 3);
    return options[randChoice];
}
    
const drawGame = () => {
    comment.innerText = "DRAW. PLEASE PLAY AGAIN ";
    comment.classList.remove("bg-green-300", "bg-red-300");
    comment.classList.add("bg-yellow-200");
}


const winGame = (playerWin) => {
    if(playerWin){
        playerScore++;
        playerScoreTotal.innerText = playerScore;
        comment.innerText = "CONGRATSSS YOU WON !!!"
        comment.classList.remove("bg-red-300", "bg-yellow-200");
        comment.classList.add("bg-green-300");
       
    }else{
        compScore++
        compScoreTotal.innerText = compScore;
        comment.innerText = "SORRY YOU LOST"
        comment.classList.remove("bg-green-300", "bg-yellow-200");
        comment.classList.add("bg-red-300");
    }
}
    
const game = (playerChoice) => {
    const compChoice = randcompChoice();

    if(playerChoice === compChoice){
        drawGame()
    } else {
        let playerWin = true;
        if(playerChoice === "rock" && compChoice === "scissor"){
            playerWin = true;
        } else if(playerChoice === "rock" && compChoice === "paper"){
            playerWin = false;
        } else if(playerChoice === "paper" && compChoice === "rock"){
            playerWin = true;
        } else if(playerChoice === "paper" && compChoice === "scissor"){
            playerWin = false;
        } else if(playerChoice === "scissor" && compChoice === "paper"){
            playerWin = true;
        } else {
            playerWin = false;
        }
        winGame(playerWin);
    }
}
    
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const playerChoice = choice.getAttribute("id");
        const sound = document.getElementById("sound");
        sound.play();
        game(playerChoice);
    });
});


