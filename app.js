const btnAll = document.querySelectorAll("button");

const computerChoice = document.querySelector("#computer-choice");

const yourChoice = document.querySelector("#your-choice");

const result = document.querySelector("#result");

btnAll.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    yourChoice.innerHTML = e.target.textContent;

    generateComputerChoice();

    generateResult();

    // e.preventDefault();
  });
});

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice.innerHTML = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice.innerHTML = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice.innerHTML = "Scissors";
  }
};

const generateResult = () => {
  if (computerChoice.textContent === yourChoice.textContent) {
    result.innerHTML = "it's draw";
  }

  if (
    computerChoice.textContent === "Scissors" &&
    yourChoice.textContent === "Rock"
  ) {
    result.innerHTML = "You win!";
  }

  if (
    computerChoice.textContent === "Rock" &&
    yourChoice.textContent === "Scissors"
  ) {
    result.innerHTML = "You lost";
  }

  if (
    computerChoice.textContent === "Paper" &&
    yourChoice.textContent === "Scissors"
  ) {
    result.innerHTML = "You win!";
  }

  if (
    computerChoice.textContent === "Scissors" &&
    yourChoice.textContent === "Paper"
  ) {
    result.innerHTML = "You lost";
  }

  if (
    computerChoice.textContent === "Paper" &&
    yourChoice.textContent === "Rock"
  ) {
    result.innerHTML = "You win!";
  }

  if (
    computerChoice.textContent === "Rock" &&
    yourChoice.textContent === "Paper"
  ) {
    result.innerHTML = "You lost";
  }
};
