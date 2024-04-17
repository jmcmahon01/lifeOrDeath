//Business Logic
function welcome(salutation) {
  return function (userName) {
    return `${salutation}! So glad you could join us ${userName}... BWAHAHAHAHA!!!!`
  }
}
const greeting = welcome("Welcome to the game of life or death");

function guessMyNumber(num) {
  const myNumber = Math.floor(Math.random() * 2) + 1;
  if (parseInt(num) === myNumber) {
    return "You have chosen... Wisely! You may live";
  } else {
    return "You have chosen... Poorly! Now you must DIE!";
  }
}




//UI Logic
document.addEventListener('DOMContentLoaded', function () {
  const greetingParagraph = document.getElementById("greetingParagraph");
  greetingParagraph.textContent = greeting("Joseph");

  const gameForm = document.getElementById("gameForm");
  const messageElement = document.getElementById("resultMessage");
  const resetButton = document.getElementById("reset");

  gameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputNumber = document.getElementById("inputNumber").value;
    if (inputNumber.trim() === "") {
      messageElement.textContent = "Please enter a number (1 or 2).";
      return; // Exit the function early if the input is empty
    }
    const result = guessMyNumber(inputNumber);
    messageElement.textContent = result;
  })

  resetButton.addEventListener("click", function () {
    messageElement.textContent = " ";
    document.getElementById("inputNumber").value = "";
  })
});



