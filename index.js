alert("hey");
//connecting the messages with the 
let msg1 =  document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById ("message3");

//rounding up answer using math operators 
let answer = Math.floor(Math.random()*100) + 1;
let number_of_guessses =0;
let guessed_num = [];

// Creating the on-click functionn
function play (){
    let user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > = 100){
        alert("Please enter a number between 1 and 10");
}else{ 
guesses_num.push(user_guess);
number_of_guesses+=1;

if(user_guess < answer){
    msg1.textContent= "Shit! Nah, you've got to try again";
    msg2.textContent="Number of guesses:" + number_of_guessses;
    msg3.textContent="Guessed numbers are:" + guessed_nums;
}
else if(user_guess > answer){ 
    msg1.textContent= "Fuck! That's too high";
    msg2.textContent="Number of guesses:" + number_of_guessses;
    msg3.textContent="Guessed numbers are:" + guessed_nums;
}
else if(user_guess === answer){
    msg1.textContent = "Damn Smartie, you win!";
    msg2.textContent = "The number was:" + answer;
    msg3.textContent= "You guessed it in"+ no_of_guesses + "guesses";
    document.getElementById
}
}
}