let userScore = 0;
let compScore = 0;

const compChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return options[computerChoice];
};

const drawGame = (comp_choice, user_choice) => {
    return comp_choice === user_choice;
};

const gameWinner = (comp_choice, user_choice) => {
    if (drawGame(comp_choice, user_choice)) {
        return 3;
    }
    if (
        (comp_choice === "rock" && user_choice === "paper") ||
        (comp_choice === "paper" && user_choice === "scissors") ||
        (comp_choice === "scissors" && user_choice === "rock")
    ) {
        userScore++;
        return 1; 
    } else {
        compScore++;
        return 2; 
    }
};

const winningMsg = document.querySelector(".msg");
const realUserScore = document.querySelector("#userScore");
const realCompScore = document.querySelector("#compScore");

const mainGame = (user_choice) => {
    const comp_choice = compChoice();
    const winner = gameWinner(comp_choice, user_choice);

    if (winner === 1) {
        winningMsg.innerText = "Yayy! You win!";
        winningMsg.style.backgroundColor = "green";
        realUserScore.innerText = userScore;
    } else if (winner === 2) {
        winningMsg.innerText = "HAHA! Computer wins!";
        winningMsg.style.backgroundColor = "red";
        realCompScore.innerText = compScore;
    } else {
        winningMsg.innerText = "It's a draw!";
        winningMsg.style.backgroundColor = "black";
    }

    console.log(`User choice: ${user_choice}, Computer choice: ${comp_choice}`);
    console.log(`User score: ${userScore}, Computer score: ${compScore}`);
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`${userChoice} clicked`);
        mainGame(userChoice);
    });
});