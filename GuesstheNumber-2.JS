let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessfield");
const guesses = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  //if user playing a game this method should valid
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validGuess(guess);
  });
}

function validGuess(guess) {
  // 1 Function for valid a input's value
  if (isNaN(guess)) {
    alert("Please Entere a valid Number.");
  } else if (guess < 1) {
    alert("please enter a Greter than 1.");
  } else if (guess > 100) {
    alert("please enter a lesser than 100.");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMassage(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  // 2 Function for check a input's value
  if (guess === randomNumber) {
    displayMassage(`You Guessed It Right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(`Number Is Tooo Low.`);
  } else if (guess > randomNumber) {
    displayMassage(`Number Is Tooo High.`);
  }
}
function displayGuess(guess) {
  // 3 functoin. value is under 1 to 100 checkig purpose only, clean a input values, prev & Remaining update
  //low or high value's as of your filled input value.
  UserInput.value = "";
  guesses.innerHTML += `${guess} , `;
  numGuess++;
  lastresult.innerHTML = `${11 - numGuess}`;
}

function displayMassage(message) {
  // 4 function it's handleing a display Guess's(intracting with a DOM)
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  // 5 Function for End a game
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h1 id="NewGame">Start New Game</h1>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  // 6 Function for Strat new game
  const NewGameButton = document.querySelector("#NewGame");
  NewGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = "";
    lastresult.innerHTML = `${11 - numGuess}`;
    UserInput.removeAttribute("disabled");
    resultParas.removeChild(p);
    playGame = true;
  });
}
