function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			return "You lose! Paper beats rock.";
		} else {
			return "You win! Rock beats scissors.";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			return "You win! Paper beats rock.";
		} else {
			return "You lose! Scissors beats paper.";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			return "You lose! Rock beats scissors.";
		} else {
			return "You win! Scissors beats paper.";
		}
	}
}

function incrementScore(scoreElement) {
	let score = parseInt(scoreElement.innerText);
	score++;
	scoreElement.innerText = score;
}

function updateResult(resultElement, result) {
	resultElement.innerText = result;
}

function game(playerSelection) {
	const computerSelection = getComputerChoice();
	const result = playRound(playerSelection, computerSelection);
	// console.log(`player: ${playerSelection}, computer: ${computerSelection}, result: ${result}`);
	const scoreElement = document.getElementById("score");
	const resultElement = document.getElementById("result");
	// console.log(scoreElement);
	if (result.includes("win")) {
		incrementScore(scoreElement);
	}

	updateResult(resultElement, result);
}

function makeMove(roundsLeft) {
	if (roundsLeft > 0) {
		const availableOptions = ['rock', 'paper', 'scissors'];
		let userInput = prompt('Make your move (rock, paper, or scissors):');

		if (userInput !== null) {
			userInput = userInput.toLowerCase();
			
			if (availableOptions.includes(userInput)) {
				game(userInput);
			} else {
				alert('Invalid move! Please enter rock, paper, or scissors.');
			}
		} else {
			alert('Operation canceled.');
		}

		// Use setTimeout to allow the event loop to continue
		setTimeout(() => makeMove(roundsLeft - 1), 200);
	}
}

function playGame() {
	const scoreElement = document.getElementById("score");
	scoreElement.innerText = 0;
	makeMove(5); // Start the game with 5 rounds
}

