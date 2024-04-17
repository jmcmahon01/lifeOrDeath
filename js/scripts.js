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

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputNumber = document.getElementById("inputNumber").value;
    const result = guessMyNumber(inputNumber);
    const messageElement = document.getElementById("resultMessage");
    messageElement.textContent = result;
  })
});


