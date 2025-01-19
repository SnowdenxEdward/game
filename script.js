const userInput = document.getElementById("userInput").value;
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

const userButton = document.getElementById("userButton");
userButton.style.cursor = "pointer";
userButton.addEventListener("click", function (event) {
  event.preventDefault();
  do {
    const computerGuess = Math.floor(Math.random() * 10) + 1;
    const userInput = document.getElementById("userInput").value;
    userInput.value = "";
    if (computerGuess == userInput) {
      alert("You Win The Game");
      console.log("You win the game");
    } else alert("You lose The game");
  } while (computerGuess != userButton);
});
