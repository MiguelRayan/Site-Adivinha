const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const remainingAttemptsElement = document.getElementById("remainingAttempts");

let randomNumber;
let remainingAttempts;

// Inicia o jogo
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
  remainingAttempts = 10; // Define o número de tentativas
  message.textContent = "Faça sua tentativa!";
  remainingAttemptsElement.textContent = remainingAttempts;
  guessInput.value = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  restartButton.classList.add("hidden");
}

// Verifica o palpite do jogador
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  // Validação do input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Por favor, insira um número entre 1 e 100!";
    return;
  }

  remainingAttempts--;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Parabéns! Você acertou o número ${randomNumber}!`;
    endGame();
  } else if (remainingAttempts === 0) {
    message.textContent = `😢 Você perdeu! O número era ${randomNumber}.`;
    endGame();
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Muito alto! Tente um número menor.";
  } else {
    message.textContent = "📈 Muito baixo! Tente um número maior.";
  }

  remainingAttemptsElement.textContent = remainingAttempts;
  guessInput.value = "";
}

// Termina o jogo
function endGame() {
  guessInput.disabled = true;
  checkButton.disabled = true;
  restartButton.classList.remove("hidden");
}

// Eventos
checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", startGame);

// Inicializa o jogo na primeira vez
startGame();