//rounding up answer into an integer using math operators
let answer = Math.floor(Math.random() * 100) + 1;
let number_of_guesses = 0;
let guessed_nums = [];

console.log(answer);
// Creating the on-click functionn
function submitGuess(submit) {
  //When user hits the 'guess' button
  let user_guess = document.getElementById("guess").value; //get the value of the guess input
  //connecting the messages with the html
  let msg1 = document.getElementById("message1");
  let msg2 = document.getElementById("message2");
  let msg3 = document.getElementById("message3");
  if (user_guess < 1 || user_guess >= 100) {
    alert("Please enter a number between 1 and 100");

    //Creating else, if and else if statement for the game logic
  } else {
    guessed_nums.push(user_guess);
    number_of_guesses += 1;
  }

  if (user_guess < answer) {
    msg1.innerHTML = "Shit! Nah, you've got to try again";
    msg2.innerHTML = "Number of guesses:" + number_of_guesses;
    msg3.innerHTML = "Guessed numbers are:" + guessed_nums;
  } else if (user_guess > answer) {
    msg1.innerHTML = "Nah! That's too high";
    msg2.innerHTML = "Number of guesses:" + number_of_guesses;
    msg3.innerHTML = "Guessed numbers are:" + guessed_nums;
  } else if (Number(user_guess) === answer) {
    msg1.innerHTML = "Damn Smartie, you win!";
    msg2.innerHTML = "The number was:" + answer;
    msg3.innerHTML = "You guessed it in" + number_of_guesses + "guesses";
  }
}
document.getElementById("submitGuess").addEventListener("click", submitGuess);
