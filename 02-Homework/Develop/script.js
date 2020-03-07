// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharArray = ["!", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "/", "?", "+", "=", "-", "_", ";", ":", "<", ">", "@", "`", "~", "{", "}", "|"];


var lengthPassword = prompt("How long would you like your password to be? Please type a number between 8 and 128.");
  var isCorrectLength = false;
  while(isCorrectLength === false){
    if (lengthPassword >= 8 && lengthPassword <= 128){
      isCorrectLength = true;
    }
    else{
      lengthPassword = prompt("That answer is not sufficient. Please type a number between 8 and 128.");
    }
  }

var lowerCase = prompt("Please type in a lowercase letter to include in your password.");
  var isLower = false;
  while(isLower === false) {
    var forStatement = false;
    for(var i = 0; i < lowerCaseArray.length; i++){
      if (lowerCase === lowerCaseArray[i]){
        forStatement = true;       
      }
    }
    if (forStatement === false){
      lowerCase = prompt("That answer is not sufficient. Please type in a lowercase letter.")
    }
    else{
      isLower = true;
    }
  }
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
