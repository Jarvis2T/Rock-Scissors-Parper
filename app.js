let userScore = 0;
let comScore = 0;
const userChoice_img = document.getElementById("userChoiceImg");
const comChoice_img = document.getElementById("comChoiceImg");
const choiceImg_img = document.querySelectorAll(".choiceImg");
const userScore_span = document.getElementById("userScore");
const comScore_span = document.getElementById("comScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
const resetBtn_btn = document.getElementById("resetBtn");

function choiceImgDisplay(display) {
	let i;
	for (i = 0; i < choiceImg_img.length; i++) {
		choiceImg_img[i].style.display = display;
	};
};

function choiceImg(userImg, comImg) {
	userChoiceImg.src = `image/${userImg}.png`;
	comChoiceImg.src = `image/${comImg}.png`;
	choiceImgDisplay("block");
};

function convertChoices(word) {
	let x = "Scissors";
	if (word === "rock") {
		x = "Rock";
	} else if (word === "paper") {
		x = "Paper";
	}; 
	return x;
};

function win(user, com) {
	const userChoice_div = document.getElementById(user).parentNode;
	userScore++;
	userScore_span.innerHTML = userScore;
	comScore_span.innerHTML = comScore;
	result_p.innerHTML = `${convertChoices(user)} beats ${convertChoices(com)}. You win! 😃`;
	userChoice_div.classList.add("green-glow");
	setTimeout(function() {userChoice_div.classList.remove("green-glow")}, 300);
};

function lose(user, com) {
	const userChoice_div = document.getElementById(user).parentNode;
	comScore++;
	userScore_span.innerHTML = userScore;
	comScore_span.innerHTML = comScore;
	result_p.innerHTML = `${convertChoices(user)} loses to ${convertChoices(com)}. You lose! 😞`;
	userChoice_div.classList.add("red-glow");
	setTimeout(function() {userChoice_div.classList.remove("red-glow")}, 300);
};

function draw(user, com) {
	const userChoice_div = document.getElementById(user).parentNode;
	userScore_span.innerHTML = userScore;
	comScore_span.innerHTML = comScore;
	result_p.innerHTML = `${convertChoices(user)} equals ${convertChoices(com)}. It's a draw! 😮`;
	userChoice_div.classList.add("grey-glow");
	setTimeout(function() {userChoice_div.classList.remove("grey-glow")}, 300);
};

function comRandomChoices() {
	const choicesArray = ['rock', 'scissors', 'paper'];
	const randomNum = Math.floor(Math.random() * 3);
	return choicesArray[randomNum];
};

function game(userChoice) {
	const comChoice = comRandomChoices();
	switch(userChoice + comChoice) {
		case "rockscissors":
		case "scissorspaper":
		case "paperrock":
			win(userChoice, comChoice);
		break;

		case "rockpaper":
		case "scissorsrock":
		case "paperscissors":
			lose(userChoice, comChoice);
		break;

		case "rockrock":
		case "scissorsscissors":
		case "paperpaper":
			draw(userChoice, comChoice);
		break;
	}
	choiceImg(userChoice, comChoice);
};

function scoreReset() {
	choiceImgDisplay("none");
	userScore = 0;
	comScore = 0;
	userScore_span.innerHTML = userScore;
	comScore_span.innerHTML = comScore;
	result_p.innerHTML = "Let's start the game!";
};

function main() {
	rock_div.addEventListener("click", function(event) {
		game("rock");
	}); 

	scissors_div.addEventListener("click", function(event) {
		game("scissors");
	});

	paper_div.addEventListener("click", function(event) {
		game("paper");
	});

	resetBtn_btn.addEventListener("click", function(event) {
		scoreReset();
	});
};

main();